const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

module.exports = {
  prisma,
}

// const students = [
//     {
//       id: 1,
//       firstName: 'John',
//       lastName: 'Doe',
//       phoneNumber: '123-456-7890',
//       recordedDateTime: '2020-01-01T00:00:00.000Z',
//     },
//     {
//       id: 2,
//       firstName: 'Jane',
//       lastName: 'Dorian',
//       phoneNumber: '82910-23029-23',
//       recordedDateTime: '2020-01-02T00:00:00.000Z',
//     },
//     {
//       id: 3,
//       firstName: 'Jack',
//       lastName: 'Witcky',
//       phoneNumber: '3-1315-23-23',
//       recordedDateTime: '2020-01-03T00:00:00.000Z',
//     },
//   ]

//   module.exports = {
//     students,
//   }