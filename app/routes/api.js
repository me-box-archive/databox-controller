var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send({"message":"test"});
 
});


router.post('/actuate', function(req, res, next) {
    var actuator_id = req.body.actuator_id;
    var method = req.body.method;
    var params = req.body.method;

    /*
        // look up actuator end point from directory using actuator id
        // varify method is a registered method
        // make call to actuator end point
        // return success or fail

    */

});



module.exports = router;
