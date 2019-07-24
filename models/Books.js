module.exports = (Schema, model) => {
    const Books = new Schema({
        title: {
          type: String,
          match: /[a-z]/
        },
        subtitle: String,
        author: {
            type: String,
            match: /[a-z]/
        },
        description: {
          type: String,
          match: /[a-z]/
        },
        coverImg: String,
        bookLink: String
    })

    return model('Books', Books)
}