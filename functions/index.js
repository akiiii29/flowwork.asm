const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const key = admin.database().ref().push().key

// all list noti
//create list

exports.listCreated = functions.database
    .ref('board/{boardId}/lists/{listID}')
    .onCreate((snapshot, context) => {
        
        const user = context.auth.uid
        admin.auth().getUser(user).then((userRecord) => {
          console.log(userRecord.email)
          const listName = snapshot.val().title
          const boardId = context.params.boardId
        const listNotification = {
            id: key,
            content: ` ${userRecord.email} vừa tạo danh sách ${listName} `,
            boardId: boardId,
            time: new Date().toISOString()
        }
        const createListNoti = (listNotification => {
          return admin.database().ref('notifications/' + boardId)
          .push(listNotification)
          .then(console.log(' list notificantions added'));
      })
        return createListNoti(listNotification);
        })
        
})



//all card noti
//create card

exports.cardCreated = functions.database
    .ref('board/{boardId}/lists/{listID}/cards/{cardID}')
    .onCreate((snapshot, context) => {
        
        const user = context.auth.uid
        admin.auth().getUser(user).then((userRecord) => {
          const cardName = snapshot.val().text
          const boardId = context.params.boardId
        const cardNotification = {
            id: key,
            content: `${userRecord.email} vừa thêm thẻ ${cardName} `,
            boardId: boardId,
            time: new Date().toISOString()
        }
        const createCardNoti = (cardNotification => {
          return admin.database().ref('notifications/' + boardId)
          .push(cardNotification)
          .then(console.log(' card notificantions added'));
        })
        return createCardNoti(cardNotification);

        })
        
})
// update card 

// exports.boardUpdated = functions.database
//     .ref('board/{boardId}/lists/{listID}/cards')
//     .onUpdate((change, context) => {
//         const before = change.before.ref.parent.once('value').then(snapshot =>{
//           const id = snapshot.val()
//           console.log(id, 'id')
//         })
//         return before   
// })

// Noti khi có member join

exports.joined = functions.database
    .ref('boards/{boardId}/members/{membersId}')
    .onCreate((snapshot, context) => {
        const emailJoin = snapshot.val().email
        const userJoin = snapshot.val().uid
        const boardId = context.params.boardId
        const joinNotification = {
            id: key,
            content: `Thành viên ${emailJoin} vừa gia nhập! `,
            boardId: boardId,
            time: new Date().toISOString()
        } 
        const memberNotification = {
          id: key,
          content: `Bạn đã được mời vào board ${boardId} `,
          boardId: boardId,
          userId: userJoin,
          boardlink : `http://localhost:3000/board/${boardId}`,
          time: new Date().toISOString()
      } 
      const joinNoti = (joinNotification => {
        return admin.database().ref('notifications/' + boardId)
        .push(joinNotification)
        .then(console.log(' join notificantions added'));
      })
      const invNoti = (memberNotification => {
        return admin.database().ref('notifications/inviteNoti/')
        .push(memberNotification)
        .then(console.log(' inv notificantions added'));
      })
        return joinNoti(joinNotification) && invNoti(memberNotification)
      }
      
  )


      //noti khi member bi kick
      
exports.exitted = functions.database
    .ref('boards/{boardId}/members/{membersId}')
    .onDelete((snapshot, context) => {
        const emailJoin = snapshot.val().email
        const boardId = context.params.boardId
        const exitNotification = {
            id: key,
            content: `Thành viên ${emailJoin} đã rời khỏi bảng! `,
            boardId: boardId,
            time: new Date().toISOString()
        } 
        const exitNoti = (exitNotification => {
          return admin.database().ref('notifications/' + boardId)
          .push(exitNotification)
          .then(console.log(' card notificantions added'));
        })
        return exitNoti(exitNotification)
      } 
  )






















// exports.listUpdated = functions.database
//     .ref('board/{boardId}')
//     .onUpdate((snapshot, context) => {
//         const createNoti = (notification => {
//             return admin.database().ref('board/'+ boardId +'/notifications/' + key)
//             .push(notification)
//             .then(console.log('notificantions added'));
//         })
//         const user = context.auth.uid
//         const boardId = context.params.boardId
//         const notification = {
//             id: key,
//             content: `User ${user} added list ${listName} `,
//             time:   admin.database.ServerValue.TIMESTAMP
//         }
        
//         return createNoti(notification);
// })