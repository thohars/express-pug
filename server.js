const { meta } = require('./configs/meta'); 
const express = require('express')
  , app = express()
  , compression = require('compression');

(async() => {
  app.disable('x-powered-by');
  app.use(compression());

  // view engine
  app.set('view engine', 'pug');

  // static file-serving
  //app.use('/route', express.static(__dirname+'/static');
  app.use(express.static(__dirname+'/static'));

  // locals for other information
  //app.locals.something = object
  app.locals.meta = meta;
  
  app.use('/', require(__dirname+'/controllers/index')); // routes
  app.use('/', require(__dirname+'/controllers/gets/404')); // 404 catchall

  app.listen(meta.port, () => {
    console.log(`Listening on port ${meta.port}`); 
  });
})();
