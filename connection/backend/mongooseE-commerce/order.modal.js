import mongoose from "mongoose"

const orderItemsSchema = new mongoose.Schema({
    type: mongoose.Schema.Types.ObjectId,
    ref:'Product'
})

const orderSchema = new mongoose.Schema({
prderPrice:{
    type: Number,
    required: true
},
customer:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
orderItems: {
   type:[orderItemsSchema]
},
address:{
    type:String,
    requirec: true
}, 
status :{
    type: String,
    enum:["PENDING","CANCELLED","DELIVERED"],
    default: "PENDING "
}

},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)
