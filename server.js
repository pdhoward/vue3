require('dotenv').config()
const cors       = require('cors')
const express    = require('express')
const bodyParser = require('body-parser')
const multipart  = require('connect-multiparty')
const request    = require('request')
const cloudinary = require('cloudinary')

//...

const app = express()

//...
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const multipartMiddleware = multipart();

//...

cloudinary.config({
    cloud_name: 'CLOUDINARY_CLOUD_NAME', 
    api_key: 'CLOUDINARY_API_KEY', 
    api_secret: 'CLOUDINARY_API_SECRET'
});

//...
app.get('/products', multipartMiddleware, function(req, res){
    return res.json([
      {id: '1', name: 'UltraLight Mechanical Keyboard'},
      {id: '121', name: 'IPhone X'},
      {id: '23', name: 'Tesla S'},
      {id: '42', name: 'Work Shoes'}
    ]);
  });

  app.get('/getProductInfo/:id', multipartMiddleware, function(req, res){
    /*eslint no-console: ["error", { allow: ["log", "error"] }] */
    console.log( req.params.id );
    return res.json({
      media:        [
        {
          id:       '0',
          type:     'image',
          url:      'https://static.pexels.com/photos/265631/pexels-photo-265631.jpeg'
        },       
        {
          id:       '3',
          type:     'video',
          url:      
              'http://res.cloudinary.com/og-tech/video/upload/s--ZWPqo282--/v1514966645/sea_turtle-short_z1pr4o.mp4'
        },
      ],
      product_name: 'Ultra Thin Mechanical Keyboard',
      product_desc: 'This keyboard gives you the clack to your click',
      product_price: '200'
    })
  });

  //...
  let port = 3128 || process.env.PORT;

    app.listen(port, function () {
      console.log('App listening on port ' + port + '!');
    });
