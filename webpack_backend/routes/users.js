var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/',
    function(req,
                    res,
                    next) {
  //res.send('respond with a resource');
      var query = connection.query('insert into users set ?'
          , user
          , function (err, result) {
            if (err) {
              console.error(err);
              throw err;
            }
            res.status(200).send('success');
          });
});

module.exports = router;
