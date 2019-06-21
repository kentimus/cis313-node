const express = require('express')
const path = require('path')
const rates = require('./my_modules/rates')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/show-rate', function(req, res){
    let weight = req.query.weight;
    let mailtype = req.query.mailtype;
    rates(weight, mailtype, function(err, rate){
        if(err){
            var params = {
                error : err,
                mailtype : mailtype,
                weight : weight
            }
        } else {
            var params = {
                error    : null,
                mailtype : mailtype,
                weight   : weight,
                rate     : rate        
            }   
        }
        res.render('pages/show-rate',params); 
    });
    
    
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
