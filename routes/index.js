var express = require('express');
var router = express.Router();
var paintingFile1 = require("../public/database/page000.json")
var paintingFile2 = require("../public/database/page001.json")
// var videoFile = require("../public/database/video.json")
// var musicFile = require("../public/database/music.json")
// var textFile = require("../public/database/text.json")
let now = new Date()
let strJson=now.toJSON()

/* GET home page. */
router.get('/', function(req, res, next) {
  const painting1 = paintingFile1 
  const painting2 = paintingFile2 
  // const video = videoFile 
  // const music = musicFile 
  // const text = textFile 
  const tableLimit = 4
  
  res.render('0_Home', { title: 'David Ryan', 
  strj: strJson,
  now: now,
  json1: painting1, 
  json2: painting2, 
  // json2: video, 
  // json3: music, 
  // json4: text, 
  tableLimit: tableLimit,
  page: 'David Ryan', 
  page2: 'Paintings', 
  page3: 'Video',
  page4: 'Texts',
  page3: 'Music'});
});

router.get('/painting', function(req, res, next) {
  const painting1 = paintingFile1
  res.render('0_List', { title: 'David Ryan Paintings', json: painting1, products: painting1, page: 'painting' });
});

router.get('/painting/:id', function(req, res, next) {
  const painting2 = paintingFile1
  var id = req.params.id
  const item = paintingFile1[id]
  res.render('1_Item', { title: 'David Ryan Painting', item: item, product: item, page: 'Painting', index: id});
});

router.get('/video', function(req, res, next) {
  const video = videoFile 
  res.render('0_List', { title: 'David Ryan Videos', json: scales, page: 'Video' });
});

router.get('/Scales/:id', function(req, res, next) {
  var id = req.params.id
  const item = scalesFile[id] 
  res.render('1_Item', { title: 'David Ryan Scales', item: item, page: 'Scales', index: id});
});

router.get('/Publications', function(req, res, next) {
  const products = productsFile 
  res.render('0_List', { title: 'David Ryan All Publications', json: products, page: 'Publications' });
});

router.get('/Publications/:id', function(req, res, next) {
  var id = req.params.id
  const item = productsFile[id] 
  res.render('1_Item', { title: 'David Ryan All Publications', item: item, page: 'Publications', index: id});
});

router.get('/About', function(req, res, next) {
  const about = aboutFile 
  res.render('3_about', { title: 'David Ryan About', json: about, page: 'About' });
});

router.get('/Contact', function(req, res, next) {
  res.render('4_contact', { title: 'David Ryan Contact' });
});

module.exports = router;
