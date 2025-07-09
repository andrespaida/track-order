import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: '3.218.78.185',
  user: 'orders_user',
  password: 'strongpassword',
  database: 'orders_db'
})

export default pool