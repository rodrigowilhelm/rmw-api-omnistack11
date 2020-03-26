const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();


// cors é sistema de segurança pra somente determinados sites possam utilizar dessa API.
app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos Http
  * GET: Buscar/listar uma informação do backend
  * POST: Criar uma informação no backend
  * PUT: Alterar uma informação no backend
  * DELETE: Deletar uma informação no backend
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
   */

  /**
   * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where() (KNEX.JS)
    */


