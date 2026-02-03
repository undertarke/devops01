import AWS from 'aws-sdk'

AWS.config.update({
     region: "ap-southeast-1",
    accessKeyId: "",
    secretAccessKey: ""
})

const db = new AWS.DynamoDB.DocumentClient()

const Table = 'hinh_anh'


// Create or Update users
const createOrUpdate = async (data = {}) => {
    const params = {
        TableName: Table,
        Item: data
    }

    try {
        await db.put(params).promise()
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}

// Read all users
const readAllUsers = async () => {
    const params = {
        TableName: Table
    }

    try {

        console.log(Table)
        const { Items = [] } = await db.scan(params).promise()
        console.log(Items)
        return { success: true, data: Items }

    } catch (error) {
        return { success: false, data: null }
    }

}

// Read Users by ID
const getUserById = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }
    try {
        const { Item = {} } = await db.get(params).promise()
        return { success: true, data: Item }
    } catch (error) {
        return { success: false, data: null }
    }
}

// Delete User by ID
const deleteUserById = async (value, key = 'id') => {
    const params = {
        TableName: Table,
        Key: {
            [key]: parseInt(value)
        }
    }

    try {
        await db.delete(params).promise()
        return { success: true }

    } catch (error) {
        return { success: false }
    }
}


export {
    createOrUpdate,
    readAllUsers,
    getUserById,
    deleteUserById
}