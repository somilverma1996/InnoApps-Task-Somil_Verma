const express = require("express");
const router = express.Router();
const User = require("../model/User")
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images/');
    },
    filename: (req, file, cb) => {
        // console.log(file);
        cb(null, Date.now() + "_" + file.originalname)
    }
});

let fileFilter = function (req, file, cb) {
    var allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'application/pdf'];
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb({
            success: false,
            message: 'Invalid file type. Only jpg, png image files are allowed.'
        }, false);
    }
};
let obj = {
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: fileFilter
};
const upload = multer(obj).array('images'); // upload.single('file')
router.post("/upload", (req, res) => {
    // res.status(200).json({message:"OK"})
    // return
    // res.setHeader("Access-Control-Allow-Origin","*"
    upload(req, res, function (error) {
        if (error) { //instanceof multer.MulterError
            res.status(500);
            if (error.code == 'LIMIT_FILE_SIZE') {
                error.message = 'File Size is too large. Allowed file size is 2MB';
                error.success = false;
            }
            return res.json(error.message);
        } else {
            if (!req.files) {
                res.status(400).json('file not found');
            }
            console.log(req.files.length);
            
            if (req.files.length < 4) {
                res.status(400).json('Please select atleast 4 files');
            }else {
                let data = []
                req.files.forEach(file => {
                    data.push(file.filename)
                    console.log(data)
                })
                let payload = {
                    images: data,
                    createdAt: new Date()
                }
                console.log(payload.images.length)
                User.create(payload, (err, result) => {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json({
                            success: true,
                            data: result,
                            message: 'File uploaded successfully!'
                        });
                    }
                })
            }
        }
    })
})

router.get("/getAllUploads", (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json({
                success: true,
                data: data,
                
            });
        }
    })
})

module.exports = router