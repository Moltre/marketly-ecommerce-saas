import Store from '../models/Store.js'; import slugify from '../utils/slugify.js';
export async function list(req,res){res.json(await Store.find({active:true}).populate('owner','name').sort('-createdAt'))}
export async function mine(req,res){res.json(await Store.findOne({owner:req.user._id}))}
export async function create(req,res){if(await Store.exists({owner:req.user._id}))return res.status(409).json({message:'Vendor already has a store'});const slug=await slugify(req.body.name,Store);const s=await Store.create({...req.body,owner:req.user._id,slug});res.status(201).json(s)}
export async function update(req,res){const s=await Store.findOne({owner:req.user._id});if(!s)return res.status(404).json({message:'Store not found'});Object.assign(s,req.body);await s.save();res.json(s)}
