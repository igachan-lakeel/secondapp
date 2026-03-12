const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resetDatabase = async () => {
  await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE;`;
};

module.exports = { prisma, resetDatabase };
