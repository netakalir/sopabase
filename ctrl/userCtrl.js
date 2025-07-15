import {
    getAll,
    getByPk,
    create,
    deleteUser as deleteUserDB,
    updateUser as updateUserDB
} from "../DAL/crud.js"


export async function getUsers(req, res) {
    try {
        const users = await getAll()
        res.json({ msg: "--- all users ---", users })
    } catch (error) {
        res.status(500).json({ msg: "Failed to read users", error: error.message });
    }
}

export async function createUser(req, res) {
    try {
        const user = await create(req.body.name, req.body.activity)
        res.json({ msg: "--- user added ---", user })
    } catch (error) {
        res.status(500).json({ msg: "Failed to added user", error: error.message });
    }
}

export async function getUserByID(req, res) {
    try {
        const user = await getByPk(req.params.id)
        res.json({ msg: "--- user ---", user })
    } catch (error) {
        res.status(500).json({ msg: "Failed to find user", error: error.message });
    }
}

export async function deleteUser(req, res) {
    try {
        await deleteUserDB(req.params.id)
        res.json({ msg: `--- user ${req.params.id} deleted ---` })
    } catch (error) {
        res.status(500).json({ msg: "Failed to deleted user", error: error.message });
    }

}

export async function updateUser(req, res) {
    try {
        const user = await updateUserDB(req.params.id, req.body.name, req.body.activity)
        res.json({ msg: `--- user ${req.params.id} update ---` })
    } catch (error) {
        res.status(500).json({ msg: "Failed to updata user", error: error.message });
    }

}




