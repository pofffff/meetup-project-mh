const { toLocaleString } = require('core-js/fn/number/epsilon');
const mongoose = require('mongoose'),
  multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, '../uploads/');
  },
  filename: function(req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, '-') +
        path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

module.exports.upload = multer({ storage: storage, fileFilter: fileFilter });
