import {Router} from 'express'; import {list,mine,create,update} from '../controllers/stores.js'; import {auth,roles} from '../middleware/auth.js';
const r=Router();r.get('/',list);r.get('/mine',auth,roles('vendor'),mine);r.post('/',auth,roles('vendor'),create);r.patch('/mine',auth,roles('vendor'),update);export default r;
