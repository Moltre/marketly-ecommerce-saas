import {Router} from 'express'; import {list,create,update,remove} from '../controllers/products.js'; import {auth,roles} from '../middleware/auth.js';
const r=Router();r.get('/',list);r.post('/',auth,roles('vendor'),create);r.patch('/:id',auth,roles('vendor'),update);r.delete('/:id',auth,roles('vendor'),remove);export default r;
