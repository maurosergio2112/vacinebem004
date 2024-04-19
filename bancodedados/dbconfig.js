// dbConfig.js
const knex = require('knex')({
  client: 'pg',
  connection: {
    host : '192.168.1.10',
    user : 'postgres',
    password : 'admin',
    database : 'vacinebem004',
    port: 5432
  }
});

module.exports = knex;
  
  const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
    },
  });
  console.log('Usuário criado:', newUser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
