const express = require("express")
const app = express()
const multer = require('multer')
const path = require("path")
var fs = require("fs")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})


app.get("/api", (req, res) => {
  res.json({ "users": ["userOne", "userTwo", "userThree"], "names": ["drake", "your mom", "bill", "bob"] })
})


app.use(express.static("build"));
app.get("/retriveImage", (req, res) => {
  var folders = fs.readdirSync('./images');
  res.json(folders);
  //res.sendFile(__dirname + "/images/" + folders[0]);
})
app.use(express.static(__dirname+"/images"));

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("'<center><h1>Image uploaded</h1></center>'");
})

app.listen(5000, () => { console.log("Server started on port 5000") })












/*
const upload = multer({

  //dest: "images",

  limits: {
    fileSize: 1000000,
  },

  fileFilter(req, file, cb){
    if(!file.originalname.match(/\.(png|jpg|jpeg)$/)){
      cb(new Error("Please upload an image"))
    }

    cb(underfined, true)

    router.post('/upload', upload.single('upload'), async (req, res) => {
      try {
        const incident = await Incident.findById(req.body.id)
        incident.image = req.file.buffer
        incident.save()
        res.send()
      } catch (e){
        res.status(400).send(e)
      }
    }, (error, req, res, next) => {
      res.status(400).send({error: error.message})
    })

    app.get("/api", (req, res) => {
        res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"], "names": ["drake", "your mom", "bob", "jim"] })
    })

    app.post("/upload", upload.single("upload"), (req, res) => {
      res.send()
    })

  }

})

*/
