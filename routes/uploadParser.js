import multer from 'multer';
import cloudinary from 'cloudinary';
import cloudinaryStorage from 'multer-storage-cloudinary';

cloudinary.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME,
});
const storage = cloudinaryStorage({
    allowedFormats: ['jpg', 'png'],
    cloudinary: cloudinary,
    folder: 'image',
    transformation: [{ crop: 'limit', height: 500, width: 500 }],
});

export default multer({ storage: storage });
