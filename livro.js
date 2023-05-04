const express = require("express")
const router = express.Router()

const app = express()
const porta = 8080

function mostraLivros(request, response){
    response.json ({
        categoria: "psicologia",
        nome: "A coragem de não agradar",
        sinopse: "O livro explora a ideia de que a maioria das pessoas se sente presa pelas expectativas dos outros e que a verdadeira liberdade só pode ser encontrada quando você tem a coragem de não agradar aos outros e seguir seu próprio caminho. Com base nas ideias do psicólogo Alfred Adler, o livro oferece insights valiosos sobre autoaceitação, autoestima e autorrealização.",
        sumário: "Introdução, A primeira noite, A segunda Noite, A terceira noite, A quarta noite, A quinta noite, posfácio, sobre os autores, informações sobre a Sextante"
    })
}

function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/livro", mostraLivros))
app.listen(porta, mostraPorta)