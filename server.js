// server.js
const next = require('next')
const express = require('express')
const server = express();
const path = require('path');
const { parse } = require('url')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {

    server.get("*", (req, res) => {
        return handle(req, res)
    })


    server.listen(3000, (err) => {
        if (err) throw err
        
        console.log('> Ready on http://localhost:3000')
    })
})