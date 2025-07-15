import express from "express";

import {
    getUsers,
    createUser,
    getUserByID,
    deleteUser,
    updateUser
} from "../ctrl/userCtrl.js"

const router = express.Router()
router.get("/",getUsers)
router.post("/",createUser)
router.get("/:id",getUserByID)
router.delete("/:id",deleteUser)
router.put("/:id",updateUser)

export default router