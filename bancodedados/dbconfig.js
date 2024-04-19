// dbConfig.js
module.exports = {
    user: 'postgres',
    host: 'http://192.168.56.1:3000/user/',
    database: 'vacinebem004',
    password: 'admin',
    port: 5432, // Porta padrão do PostgreSQL
  };
  
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
