import express from 'express'

const app = express();

app.use(express.json())

let vehicles = [{
    id: 1,
    brand: "Toyota",
    model: "Fortuner",
    color: "Black",
    price: 4200000,
},
{
    id: 2,
    brand: "Hyundai",
    model: "Creta",
    color: "White",
    price: 1500000,
},
{
    id: 3,
    brand: "Tata",
    model: "Nexon EV",
    color: "Blue",
    price: 1650000,
}
];


app.get('/vehicles', (req, res)=>{
    res.json(vehicles)
})










app.listen(4000, () => {
    console.log(`Express Server started at Port: 4000`);
});