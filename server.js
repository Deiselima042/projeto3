const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_filme": "/filmes",
  "/adicionar_filme": "/filmes",
  "/editar_filme/:id": "/filmes/:id",
  "/deletar_film/:id": "/filmes/:id"
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
