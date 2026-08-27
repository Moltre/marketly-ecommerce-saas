import {Router} from 'express'; import multer from 'multer'; import {uploadImage} from '../controllers/upload.js'; import {auth,roles} from '../middleware/auth.js';
const r=Router();const upload=multer({storage:multer.memoryStorage(),limits:{fileSize:5*1024*1024}});r.post('/',auth,roles('vendor','admin'),upload.single('image'),uploadImage);export default r;
