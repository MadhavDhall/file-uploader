const express = require("express")
const multer = require("multer")

const path = require("path")
const app = express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '/uploads/'))
    },
    filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.use("/uploads", express.static('uploads'))

app.get("/", (req, res) => {
    res.json({"msg":"Hello""})
//     res.sendFile(path.join(__dirname, "./index.html"))
})

app.post("/file", upload.single("file"), (req, res) => {
    res.send("done")
})

const port = process.env.PORT || 7000
app.listen(port, () => {
    console.log("Listening on port " + port);
})
