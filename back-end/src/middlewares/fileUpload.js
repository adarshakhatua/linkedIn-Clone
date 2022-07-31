const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname +'-'+ uniquePrefix + '-' + file.originalname)
    }
})

const fileFilter=(req, file, cb)=> {
    // console.log(file)
    // The function should call `cb` with a boolean
    // to indicate if the file should be accepted

    // To accept the file pass `true`, like so:
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif") {
        cb(null, true)
    }
    // To reject this file pass `false`, like so:
    else {
        cb(null, false) 
    }

}



const option = {
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize :1024*1024*5},
}
const upload = multer(option);

const uploadFiles = (formKey,method) => {
    return function (req, res, next) {
        let uploadItem;
        if (method === "single") {
            uploadItem = upload.single(formKey);
        }
        else if (method === "multiple") {
            uploadItem = upload.any(formKey);
        }

        return uploadItem(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // A Multer error occurred when uploading.
                return res.status(500).send({ message: err.message });
            } else if (err) {
                // An unknown error occurred when uploading.
                return res.status(501).send({ message: err.message });
            }

            // Everything went fine.
            return next();
        })
    }
    
}

module.exports = uploadFiles;