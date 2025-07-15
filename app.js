import { sequelize } from "./db.js";
import { UserActivity } from "./models/UserActivity.js";
import express from "express";
import configRouts from "./routs/configRouts.js";
import { config } from "dotenv";
config()
const app = express()
app.use(express.json())
configRouts(app)

try {
    const initialData = [
        { name: "Netamel", activity: "login" },
        { name: "Bob", activity: "uplode photo" },
    ];

    await UserActivity.bulkCreate(initialData);
    console.log("initial Data inserted");

} catch (error) {
    console.log("Err inserting data:",error);

}
app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`);
})
