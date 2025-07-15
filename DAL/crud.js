import { UserActivity } from "../models/UserActivity.js";

export async function getAll(){
    return await UserActivity.findAll()
}

export async function getByPk(id) {
    return await UserActivity.findByPk(id)
}

export async function create(name,activity) {
    return await UserActivity.create({name:name,activity:activity})
}

export async function deleteUser(id) {
    const user = await getByPk(id)
    if (user === null ){
        console.log("user not found");
    }
    return await user.destroy()
}

export async function updateUser(id,name,activity) {
    const user = await getByPk(id)
    if (user === null ){
        console.log("user not found");
    }
    return await user.update({name,activity})
}
