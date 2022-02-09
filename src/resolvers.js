// node-graphql/src/resolvers.js

// const { students } =  require('./database.js');
const { prisma } = require("./database.js");
const resolvers = {

    Student: {
        id: (parent, args, context, info) => parent.id,
        firstName: (parent) => parent.firstName,
        lastName: (parent) => parent.lastName,
        phoneNumber: (parent) => parent.phoneNumber,
        recordedDateTime: (parent) => parent.recordedDateTime,
      },

    Query: {
      students: () => prisma.student.findMany(),
      student: (parent, args) => {
        return prisma.student.findFirst({
          where: { id: Number(args.id) },
        });
      },
    },

    Mutation: {
      registerStudent: (parent, args) => {
        return prisma.student.create({
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            phoneNumber: args.phoneNumber,
          },
        })
      },
      updateStudent: (parent, args) => {
        return prisma.student.update({
          where: {
            id: Number(args.id),
          },
          data: {
            firstName: args.firstName,
            lastName: args.lastName,
            phoneNumber: args.phoneNumber,
            recordedDateTime: new Date(),
          },
        });
      },
    },

  }


  module.exports = {
    resolvers,
  }