var express = require('express');
var router = express.Router();
const currentData = require("../controller/dataController")


/* GET home page. */
router.get('/', async (req, res, next) =>{
  
let datas=await currentData()
// console.log(datas);
res.render('index',{datas})


});
module.exports = router;
