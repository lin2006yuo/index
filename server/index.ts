// server.js
import express from "express"
const { parse } = require("url")
const next = require("next")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  
  server.get("*", handle)

  server.listen(3000, (err: any) => {
    if (err) throw err
    console.log("> Ready on http://localhost:3000")
  })
})
