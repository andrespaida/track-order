import pool from './db.js'

const resolvers = {
  Query: {
    trackOrder: async (_, { id }) => {
      const [rows] = await pool.query('SELECT * FROM orders WHERE id = ?', [id])
      return rows[0] || null
    }
  }
}

export default resolvers