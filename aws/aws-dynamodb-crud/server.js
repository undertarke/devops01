import express from 'express'
import { createOrUpdate, deleteUserById, getUserById, readAllUsers } from './db.js'


const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})


// READ ALL Users
app.get('/images', async (req, res) => {
    const { success, data } = await readAllUsers()

    if (success) {
        return res.json({ success, data })
    }
    return res.status(500).json({ success: false, messsage: "Error" })
})

// Get User by ID
app.get('/image/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await getUserById(id)
    console.log(data)
    if (success) {
        return res.json({ success, data })
    }

    return res.status(500).json({ success: false, message: "Error" })
})

    
// Create User
app.post('/image', async (req, res) => {
    const { success, data } = await createOrUpdate(req.body)

    if (success) {
        return res.json({ success, data })
    }

    return res.status(500).json({ success: false, message: 'Error' })
})


// Update User by ID
app.put('/image/:id', async (req, res) => {
    const user = req.body
    const { id } = req.params
    user.id = parseInt(id)

    const { success, data } = await createOrUpdate(user)

    if (success) {
        return res.json({ success, data })
    }

    return res.status(500).json({ success: false, message: "Error" })
})


// Delete User by Id
app.delete('/image/:id', async (req, res) => {
    const { id } = req.params
    const { success, data } = await deleteUserById(id)
    if (success) {
        return res.json({ success, data })
    }
    return res.status(500).json({ success: false, message: 'Error' })
})



app.listen(8088)


