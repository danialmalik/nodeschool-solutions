function getShortMessages(messages) {
    return messages.filter((msg, index, msgs)=> {
        return msg.message.length < 50;
    })
    .map((msgObj, index, array)=> {
        return msgObj.message;
    })
}

module.exports = getShortMessages
