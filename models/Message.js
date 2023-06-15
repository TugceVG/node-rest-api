const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
    {
        conversationId: {
            type: 'string',
        },
        sender: {
            type: 'string',
        },
        text: {
            type: 'string',
        },
    },
    { timestamps: true });

module.exports = mongoose.model("Message", MessageSchema);