// TODO: 
// post, user , body, replies, etc.
const {Schema, model} = require('mongoose')

// const Post = require('./Post')
// const User = require('./User')

const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectID,
        // ref: Post,
        required: true,
   
    },
    user: {
        type: Schema.Types.ObjectID,
        // ref: User,
        required: true,

    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
    replies: [
        {
            body: {
                type: String,
                required: true
            },
            user: {
                type: Schema.Types.ObjectID,
                // ref: User,
                required: true
            },
            createdAt: {
                type: Date,
                default: new Date()
            }
        }
    ]

}, {
    timestamps: true
})

const Comment = model('Comment', commentSchema)
module.exports = Comment