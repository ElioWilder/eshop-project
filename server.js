const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

const products = [
{
    id:1,
    title:"Noctis Lucis Caelum",
    description:"Figurine Play Arts Kai - Square-Enix - Final Fantasy XV",
    imageUrl:"../img/Noctis.jpg",
    price:14900,
    likes:0,
    likeLabel:"Like",
    createDate: new Date("2021-07-17"),
    size: ['27 cm']
},
{
    id:2,
    title:"Cloud Strife",
    description:"Figurine Play Arts Kai - Square-Enix - Final Fantasy VII Remake",
    imageUrl:"../img/Cloud.jpeg",
    price:15900,
    likes:0,
    likeLabel:"Like",
    createDate: new Date("2021-05-24"),
    size: ['28 cm']
}

]

app.get('/products', (rep, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(products)
  });
  
  app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`);
  });

  app.get('/products/:id', (req, res) => {
      const id = req.params.id;
      res.set('Access-Control-Allow-Origin', '*');
      res.json(products.find((p) => p.id == id))
  });

  app.put('/products/:id/likes', (req, res) => {
      const id = req.params.id;
      let product = products.find((p) => p.id == id);
      if (product.likes === 0) {
        product.likes++;
        product.likeLabel = "Unlike";
      } else {
        product.likes--;
        product.likeLabel = "Like";
      } 
      res.set('Access-Control-Allow-Origin', '*');
      res.json(product);
  })