const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017'
const dbName = 'myblog'

mongoose.set('useFindAndModify', false)

mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

// 发生错误
db.on('error', err => {
    console.error(err)
})

// // 连接成功
// db.once('open', () => {
//     console.log('mongoose connect success…')
// })

module.exports = mongoose
