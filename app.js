const express = require('express');
const app = express();


app.use('/api/orders', (req,res,next)=>
{

    const orders =
    [
        {
            id: "123",
            userName: "user-001",
            Email: "Mail@mail.mail",
            PlacedOrder: "Cheesecake"
        },
    
        {
            id: "432",
            userName: "user-001",
            Email: "Mail@mail2.mail",
            PlacedOrder: "Cheesecake"
        },
        
    
        {
            id: "1234",
            userName: "user-002",
            Email: "Mail@mail2.mail",
            PlacedOrder: "Cheesecake"
        },
            
    
    
    ];
    
    res.json(
        {
            message: 'Orders retrived Sucessfully!',
            orders: orders
        }
    );
    
});



module.exports = app;





/*
app.use((req,res,next)=>
{
    res.send("I am the first middleware, if i ude next I call the second, if not, nada will happen")
    next();
});

app.use((req,res,next)=>
{
    console.log("I am the second middleware, called next by the precious middelware")

});
*/