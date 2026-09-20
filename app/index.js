const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("Hello World")
})

// take params from url and returns a response
app.get("/:id", (req, res) => {
    res.send(`Hello Samarth World ${req.params.id}`)
})

// only listens if not in test
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is listening at port: ${PORT}`)
    })
}

module.exports = app;