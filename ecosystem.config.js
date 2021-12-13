module.exports = {
  apps : [{
    name   : "express-pug",
    script : "./server.js",
    env_production: {
      NODE_ENV: "production" 
    }
  }]
}
