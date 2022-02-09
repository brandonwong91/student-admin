// node-graphql/src/resolvers.js

const { students } =  require('./database.js');

const resolvers = {

    Student: {
        id: (parent, args, context, info) => parent.id,
        firstName: (parent) => parent.firstName,
        lastName: (parent) => parent.lastName,
        phoneNumber: (parent) => parent.phoneNumber,
        recordedDateTime: (parent) => parent.recordedDateTime,
      },

    Query: {
      students: () => students,
      student: (parent, args) => {
        return students.find((student) => student.id === Number(args.id))
      },
    },

    Mutation: {
      registerStudent: (parent, args) => {
        students.push({
          id: students.length + 1,
          firstName: args.firstName,
          lastName: args.lastName,
          phoneNumber: args.phoneNumber,
          recordedDateTime: Date.now(),
        })
        return students[students.length - 1]
      },
    },

  }


  module.exports = {
    resolvers,
  }