const app = require("./index");


const connect = require("./configs/db")

app.listen(4567, async function() {
    await connect();
    console.log("listrning on port 4567")
})