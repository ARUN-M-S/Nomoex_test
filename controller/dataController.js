
const axios = require("axios");

const currentData=(req,res)=>{

    try {
        return new Promise(async(resolve,resject)=>{
            const data = await axios.get('https://api.binance.com/api/v3/ticker/24hr?symbols=["BTCUSDT","ETHUSDT","ENJUSDT","GRTUSDT"]')
const datas=data.data
console.log(datas,"hhhhh");
resolve(datas)

        })
        
    } catch (error) {
        console.log(errorr);
        
    }
    


}

module.exports=currentData