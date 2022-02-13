const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const jane = await prisma.student.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      firstName: 'Jane',
        lastName: 'Doe',
        phoneNumber: '123-234-344',
        recordedDateTime: new Date(),
    },
  })

  const john = await prisma.student.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      firstName: 'John',
        lastName: 'Dorian',
        phoneNumber: '123-382-9919',
        recordedDateTime: new Date(),
    },
  })

  console.log({ jane, john })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })