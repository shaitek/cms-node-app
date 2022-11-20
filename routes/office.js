const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('List of offices');
});

router.get('/:id', (req, res)=>{
    res.send("Office id" + req.params.id);
});

router.post('/', (req,res)=>{
    res.send('Office Created');
});

router.put('/', (req,res)=>{
    res.send('Office Created');
});

router.delete(':/id', (req, res)=>{
    res.send('Office Deleted'+ req.params.id);
});


module.exports.officeRoutes = router;
