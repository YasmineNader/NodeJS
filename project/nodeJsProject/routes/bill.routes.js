const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");
const user = require("../models/user.model");
const auth = require("../middleware/Auth");
const product = require("../models/product.model");
const bill = require("../models/bill.model");

router.post('/user/bills',auth.userAuth, async (req, res) => {
    try {
        // amount=0
        // totalprice=0
        productID = await product.find()
        

        bills = new bill(req.body)
        bills.totalprice=0
        bills.products.forEach((element) =>{
             
            element.amount = Number(element.price)*Number(element.quantity)
            bills.totalprice+=Number(element.price) * Number(element.quantity)
             
            bills.orderStatus="shipped"
           
            // productID.forEach(pro=>{
            //     console.log(pro.stock)
            // })
            
            // console.log(element.amount)
           // console.log(element.price*element.quantity)
            //all+= Number(element.price) * Number(element.quantity)
            //console.log(element.price*element.quantity)
            //console.log(all)
        });

      
        
       // await bills.save()
     
      res.status(200).send("bill Is created");
    } catch (e) {
      res.status(500).send(e.message);
    }
  });
  
  module.exports=router
  