const { gql } = require('apollo-server')

const typeDefs = gql`
  scalar GraphQLDateTime
  type Student {
    id: ID!
    firstName: String!
    lastName: String!
    phoneNumber: String!
    recordedDateTime: GraphQLDateTime!
  }

  type Query {
    allStudents: [Student]
    Student(id: ID!): Student
  }

  type Mutation {
    createStudent(firstName: String, lastName: String, phoneNumber: String): Student
    updateStudent(id: ID!, firstName: String, lastName: String, phoneNumber: String): Student
    deleteStudent(id: ID!): Student
  }
`

module.exports = {
  typeDefs,
}