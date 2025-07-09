import pool from './db.js'

const resolvers = {
  Query: {
    trackOrder: async (_, { id }) => {
      const [rows] = await pool.query('SELECT * FROM orders WHERE id = ?', [id])

      if (!rows[0]) return null

      const order = rows[0]

      return {
        id: order.id,
        userId: order.userId,
        products: order.products,
        total: order.total,
        status: order.status,
        createdAt: order.created_at
          ? new Date(order.created_at).toISOString()
          : null
      }
    }
  }
}

export default resolvers