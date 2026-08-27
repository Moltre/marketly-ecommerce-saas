import {Router} from 'express'; import {create,mine} from '../controllers/orders.js'; import {auth} from '../middleware/auth.js';
const r=Router();r.post('/',auth,create);r.get('/mine',auth,mine);export default r;
