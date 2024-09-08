const express  = require('express')
const router = express.Router()



router.get('/login',(req, res)=>{
    // code 
    res.send('Hello Login Jukkru')
})


module.exports = router