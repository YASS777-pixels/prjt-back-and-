const { text } = require('express')
const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
    {
        user: {
        type:
    },    
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('goal',goalSchema)

