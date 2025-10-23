const { TableClient } = require("@azure/data-tables");
module.exports = async function (context, req) {
 const client = TableClient.fromConnectionString(process.env.AzureWebJobsStorage, "Notas");
 const nota = {
 partitionKey: "usuario1",
 rowKey: new Date().getTime().toString(),
 conteudo: req.body.conteudo
 };
 await client.createEntity(nota);
 context.res = { body: { sucesso: true } };
};