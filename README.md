# Track Order Microservice

This microservice allows tracking the status of an order by its ID using GraphQL. It is part of the **Orders Domain** in the Toy Shop system.

## 🛠️ Tech Stack

- **Language**: JavaScript (Node.js)
- **Framework**: Apollo Server (GraphQL)
- **Database**: MariaDB
- **Architecture**: KISS (Keep It Simple, Stupid)
- **Deployment**: Docker + GitHub Actions + EC2

## 📦 GraphQL Schema

```graphql
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
```

## 🚀 How to Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
node index.js
```

Server will run on `http://localhost:4003`.

## 🧪 Sample Query (Postman or GraphQL Playground)

**POST** `http://localhost:4003/`  
**Body** (GraphQL):

```graphql
query {
  trackOrder(id: 1) {
    id
    userId
    products
    total
    status
    createdAt
  }
}
```

## 🐳 Docker

### Build image

```bash
docker build -t track-order .
```

### Run container

```bash
docker run -d -p 4003:4003 --name track-order track-order
```

## 🔐 Environment Variables

Ensure you provide the correct DB credentials (either in code or using environment variables):

- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`

## 📁 Project Structure

```
.
├── Dockerfile
├── index.js
├── resolver.js
├── schema.js
└── package.json
```

## 📌 Endpoint

- `/` → GraphQL endpoint for tracking orders

---

© 2025 Toy Shop Project — All rights reserved.