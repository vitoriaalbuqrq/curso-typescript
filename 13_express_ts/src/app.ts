//1 - iniciando projeto
//console.log("Espress + TS")

//2- Init Express
import express,
 { NextFunction,
Request, Response } from 'express';

//Execução da função importada
const app = express();

//3 - rota com POST
app.use(express.json());

//rota para executar
app.get("/", (req, res) => {
    return res.send("Hello Express!");
});
//3 - rota com POST
app.post("/api/product", (req, res) => {
    console.log(req.body)
    return res.send("Produto adicionado!")
});

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}

//4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
    //req.method = VERBO HTTP
    if(req.method === "POST"){
        return res.send("Inseriu algum registro")
    }else if (req.method === "GET"){
        return res.send("Leu algum registro!")
    }else {
        return res.send("Não podemos realizar esta operação!")
    }
})
// 5 - Interfaces
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces");
});

//6 - Enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.0,
        color: "Blue",
        sizes: ["P", "M", "G"],
    });
});

//7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)
    const id = req.params.id
    if(id === "1"){
        const product = {
            id: 1,
            name: "Boné",
            price: 10,
        }
        return res.json(product);
    }else{
        return res.send("Produto não encontrado!")
    }
})

//8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
    console.log(req.params)
    const productId = req.params.id;
    const reviewId = req.params.reviewId;

    return res.send(`Acessando a review ${reviewId} do produto ${productId}`)
});

//9 - router handler
function getUser(req: Request, res: Response){ 
    console.log(`Resgatando o usuário com id: ${req.params.id}`)
    return res.send(`O usuário foi encontrado!`)
};
app.get("/api/user/:id", getUser);

//10 - Middleware: recurso para executar uma função entre a execução de uma rota, por exemplo 
function checkUser(req: Request, res:Response, next:NextFunction){
    if(req.params.id === "1"){
        console.log("Pode seguir!");
        next();
    }else {
        console.log("Acesso restrito!");
    }
}

app.get("/api/user/:id/acess", checkUser,(req:Request, res: Response) => {
    return res.json({msg: "Bem-vindo a área administrativa!"});
});

//12 - req e res com generics
app.get("/api/user/:id/details/:name", 
    (req:Request<{id: string; name:string}>, res: Response<{status: boolean}>
    ) => {
        console.log(`ID: ${req.params.id}`)
        console.log(`Name: ${req.params.name}`)
        
        return res.json({status: true})
    })
    
// 13 - Tratando erros
app.get("/api/error", (req: Request, res: Response) => {
    try {
        throw new Error("Algo deu errado!");
    } catch (e: any) {
        //res.statusCode = 500;
        res.status(500).json({ msg: e.message });
    }
});

//Definir a porta para expor esse serviço
app.listen(3000, () => {
    console.log("Aplicação de TS + Express funcionando");
});