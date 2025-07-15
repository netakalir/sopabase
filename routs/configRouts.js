import userRouter from "./crudRout.js";

export default function(app){
    app.use("/users",userRouter)

    app.use((req, res) => {//שגיאה אם לא נמצא אף route שיכול להכיל את הבקשה
        res.status(404).json({ msg: "route not found" })
    })
}