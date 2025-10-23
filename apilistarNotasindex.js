const { TableClient } = require("@azure/data-tables");
module.exports = async function (context, req) {
 const client = TableClient.fromConnectionString(process.env.AzureWebJobsStorage, "Notas");
 const entities = client.listEntities({ queryOptions: { filter: "PartitionKey eq 'usuario1'" } });
 const notas = [];
 for await (const n of entities) notas.push(n);
 context.res = { body: notas };
};