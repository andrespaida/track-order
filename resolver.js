import pool from './db.js'

const resolvers = {
  Query: {
    trackOrder: async (_, { id }) => {
      const [rows] = await pool.query('SELECT * FROM orders WHERE id = ?', [id])

      if (!rows[0]) return null

      const order = rows[0]

      return {
        ...order,
        createdAt: order.createdAt instanceof Date
          ? order.createdAt.toISOString()
          : order.createdAt
      }
    }
  }
}

export default resolvers