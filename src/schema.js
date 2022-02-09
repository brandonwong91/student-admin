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
    students: [Student]
    student(id: ID!): Student
  }

  type Mutation {
    registerStudent(firstName: String, lastName: String, phoneNumber: String): Student!
  }
`
module.exports = {
  typeDefs,
}