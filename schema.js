import { gql } from 'apollo-server'

const typeDefs = gql`
  type Order {
    id: ID
    userId: String
    products: String
    total: Float
    status: String
    createdAt: String
  }

  type Query {
    trackOrder(id: ID): Order
  }
`

export default typeDefs