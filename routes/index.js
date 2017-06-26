var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/formulario', function(req, res, next) {
  var config = require('../models/gii360')
  db = mysql.createConnection(config);
  db.connect;
  console.log(req.body);
  db.query('SELECT id_pregunta, id_forma, respuesta, salto, pregunta\
            FROM preguntas AS P\
            INNER JOIN respuestas AS R\
            ON P.id_gpo_respuesta = R.id_gpo_respuesta\
            AND P.id_gpo_respuesta = ?','3', function(err, rows){
    res.json({rows: rows});

    rows.forEach(function(item){
      console.log('id_pregunta = '+item.id_pregunta);
      console.log('id_forma = '+item.id_forma);
    })
  });


});


module.exports = router;
