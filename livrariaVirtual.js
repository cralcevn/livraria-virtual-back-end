const express = require("express") // aqui estou iniciando o express
const router = express.Router() // aqui estou configurando a primeira parte da rota
const cors = require ("cors") // aqui estou trazendo o pacote cors que permite consumir essa api no fornt-end

const conectaBancoDeDados = require ("./BancoDeDados") // ligando ao arquivo bancoDeDados
conectaBancoDeDados()

const Livro = require("./livroModel")

const app = express() // aqui estou iniciando o app
app.use(express.json())
app.use (cors())
const porta = 8080 // aqui estou criando a porta

// GET
async function mostraLivro (resquest, response) {
    try{
        const livroVindoDoBancoDeDados = await Livro.find()
        response.json (livroVindoDoBancoDeDados)
    }catch (erro){
        console.log(erro)
    }
    
}

//POST 
async function criaLivro(request, response){
    const novoLivro = new Livro({
        categoria: request.body.categoria,
        nome: request.body.nome,
        sinopse: request.body.sinopse,
        sumário: request.body.sumário
    })
    
    try{
        const livroCriado = await novoLivro.save()
        response.status(201).json(livroCriado)
    } catch (erro){
        console.log(erro)
    }
}


// PATCH
async function corrigeLivro(request, response){
    try{
        const livroEncontrado = await Livro.findById(request.params.id)
        
        if (request.body.categoria){
            livroEncontrada.categoria = request.body.categoria
        }
    
        if (request.body.nome){
            livroEncontrada.nome = request.body.nome
        }
    
        if (request.body.sinopse){
            livroEncontrada.sinopse = request.body.sinopse
        }

        if (request.body.sumário){
            livroEncontrada.sumário = request.body.sumário
        }
        const livroAtualizadoNoBancoDeDados = await livroEncontrado.save()
        response.json(livroAtualizadoNoBancoDeDados)


    } catch (erro) {
        console.log(erro)
    }
    
} 

// DELETE
 async function deletaLivro (request, response) {
    
    try {
        await Livro.findByIdAndDelete(request.params.id)
        response.json({message:"Livro deletado com sucesso!"})
    } catch (erro) {
        console.log(erro)
    }

 }

app.use(router.get("/livro", mostraLivro)) // configurei rota GET /livro
app.use(router.post("/livro", criaLivro)) //  configurei rota POST/livro
app.use(router.patch("/livro/:id", corrigeLivro)) // configurei a rota PATCH / livro/ :id
app.use(router.delete("/livro/:id", deletaLivro)) // configurei rota DELETE /livro

//PORTA
function mostraPorta () {
    console.log ("Servidor criado e rodando na porta ", porta)
}

app.listen(porta, mostraPorta) // servidor ouvindo porta