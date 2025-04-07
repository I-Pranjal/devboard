const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err))

// Task routes
const taskRoutes = require('./Routes/TaskRoutes')
app.use('/api/tasks', taskRoutes)

// Snippet routes
const snippetRoutes = require('./Routes/SnippetRoutes')
app.use('/api/snippets', snippetRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
