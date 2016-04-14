var jsonServer = require('json-server')

var webshot = require('webshot');
var fs = require('fs');

var uuid = require('node-uuid');

// Returns an Express server
var server = jsonServer.create()

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults())

var bodyParser = require('body-parser')
// parse application/json
server.use(bodyParser.json())


// Add custom routes
server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })


// Todo: using json server export lowdb instance?
const low = require('lowdb')
const storage = require('lowdb/file-async')
const db = low('db.json', {storage:storage})

function renderQuestionaire(qdata, res) {
  res.write('This will be render by template engine')
  res.write('with questionnaire data like below:')
  res.write(JSON.stringify(qdata, null, 2))
  res.end('this is end')
}

function generateThumbnail(id){
  webshot('http://localhost:3000/admin/edit/' + id, './public/thumbnails/'+id+'.png', function(err){
    if(err){
      console.log('create thumbnail for ' + id + ' failure');
      console.log(err);
    }
  });
}

server.post('/questionnaire/preview', function(req, res) {
  debugger;
  var qdata = req.body
  renderQuestionaire(qdata, res)
})

server.get('/questionnaires', function(req, res){
  var questionnaires = db('questionnaires');
  res.json({'success':true, data:questionnaires});
});

server.get('/questionnaire/:id', function(req, res){
  var questionnaire = db('questionnaires').find({id: req.params.id});
  res.json({'success':true, data:questionnaire});
});

server.post('/questionnaire/add', function(req, res){
  var item = req.body;
  item.id = uuid.v1();
  db('questionnaires').push(item).then(function(){
    webshot('http://localhost:3000/admin/edit/' + item.id, './public/thumbnails/'+item.id+'.png', function(err){
      if(err){
        console.log('create thumbnail for ' + item.id + ' failure');
        console.log(err);
        return;
      }

      res.json({'success':true, data:item});
    });
  });
});

//get questionnaire page thumbnail
server.get('/questionnaire/thumbnail/:id', function(req,res){
  res.writeHead(200);
})

// Returns an Express router
var router = jsonServer.router('db.json')
server.use('/api', router)

server.listen(8100, function() {
  console.log('server is running at ', 8100)
})