const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const multer = require('multer');
const path = require('path');

//middlewares
app.use(cors());
app.use(express.json());
app.use('/auth', require('./routes/jwtAuth'));
app.use('/auth', require('./routes/posts'));

// storage engine 
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  storage: storage,
 
});
app.use('/images', express.static('upload/images'));
app.post('/uploadimg', upload.single('images'), (req, res) => {
  res.json({
    success: 1,
    images_url: `http://localhost:5000/images/${req.file.filename}`,
  });
});

function errHandler(err, req, res, next) {
  if (err instanceof multer.MulterError) {
    res.json({
      success: 0,
      message: err.message,
    });
  }
}
app.use(errHandler);

app.listen(5000, () => {
  console.log('server up and running');
});
