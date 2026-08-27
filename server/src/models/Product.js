import mongoose from 'mongoose';
const schema=new mongoose.Schema({store:{type:mongoose.Schema.Types.ObjectId,ref:'Store',required:true},name:{type:String,required:true},description:String,category:String,price:{type:Number,required:true},compareAtPrice:Number,stock:{type:Number,default:0},sku:String,images:[String],active:{type:Boolean,default:true}},{timestamps:true});
export default mongoose.model('Product',schema);
