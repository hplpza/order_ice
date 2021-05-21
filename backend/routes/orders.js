const express = require("express")

const router = express.Router();

const Order = require('../model/order')

const CheckAuth = require('../middleware/check-auth')


router.post('',CheckAuth , (req,res,next)=>

{
    const orders = new Order
    (
        {
                userName: req.body.userName,
                Email: req.body.Email,
                PlacedOrder: req.body.PlacedOrder
        }
    );


            orders.save().then((createdOrder)=>
            
                {
                    console.log(createdOrder);
                    res.status(201).json({message: '', orderID: createdOrder._id
                });

                    console.log(orders)
                });

});


router.get('', (req,res,next)=>
{
    Order.find().then((documents)=>{
        res.json
        (
            
                {
                        message: 'orders retrived from server successfully',
                        orders:documents

                });
    
            });

});






router.delete('/:id',CheckAuth, (req,res,next)=>
{
console.log(req.params.id)


    Order.deleteOne({_id: req.params.id}).then(result=>
        {
            console.log("Order Deleted from DB")
            res.status(200).json({message: 'Order Deleted from DB'});
        });
        
    });


module.exports = router;
