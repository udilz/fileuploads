import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import slugify from "slugify";
import { handleRegister, handleValidation } from "./controllers/validation.controllers";

const app = express();

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, "./public");
  },
  filename: function (_, file, cb) {
    cb(null, slugify(file.originalname, {lower: true}));
  },
});

const upload = multer({storage});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true})); // merubah request menjadi form data

app.post("/",handleValidation);
app.post("/register",handleRegister);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.post('/profile', upload.single('file'), function (req, res) {
  // req.file is the `avatar` file
  const {file,body} = req;
  // req.body will hold the text fields, if there were any
  console.log({file,body});
  return res.json({message: "success"})

})


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
