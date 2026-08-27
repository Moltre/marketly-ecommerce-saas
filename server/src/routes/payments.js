import {Router} from 'express'; import {checkoutSession} from '../controllers/payments.js'; import {auth} from '../middleware/auth.js';
const r=Router();r.post('/checkout-session',auth,checkoutSession);export default r;
