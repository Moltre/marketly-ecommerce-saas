import mongoose from 'mongoose';
const schema=new mongoose.Schema({owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},name:{type:String,required:true},slug:{type:String,unique:true,required:true},category:String,description:String,logoUrl:String,bannerUrl:String,rating:{type:Number,default:0},active:{type:Boolean,default:true}},{timestamps:true});
export default mongoose.model('Store',schema);
