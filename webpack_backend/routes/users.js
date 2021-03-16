var express = require('express');
var connection = require('../database/connection');
var router = express.Router();

/* GET users listing. */
router.route('/searchUser')
    .get(function(req,
                    res,
                    next) {
        connection.query('SELECT * FROM user'
            , function (err, result) {
                if (err) {
                    console.error(err);
                    throw err;
                }
                res.status(200).send(result);
            });
    });

router.route('/registUser')
    .post(function(req,
             res,
             next) {
        var params = {userName: req.body.userName, userPhone: req.body.userPhone, userAge: req.body.userAge};

        connection.query('insert into user set ?'
            , params
            , function (err, result) {
                if (err) {
                    console.error(err);
                    throw err;
                }
                res.status(200).send(result);
            });
    });

module.exports = router;
