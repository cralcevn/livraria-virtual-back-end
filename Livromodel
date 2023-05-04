const mongoose = require("mongoose")

const LivrosSchema = new mongoose.Schema({

    categoria:{
        type: String,
        required: true
    },
    nome:{
        type: String,
        required: true,
    },
    sinopse:{
        type: String,
        required: true,
    },
    sumário: {
        type: String,
        required: true
    }
} )

module.exports = mongoose.model("livro", LivrosSchema)
