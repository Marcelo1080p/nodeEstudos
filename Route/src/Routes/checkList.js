const express = require('express');

const router = express.Router();

router.get('checklists', ( req, res ) => {
    console.log("Olá");
    res.send('<h1>ROUTES</h1>');
});



module.exports = router;