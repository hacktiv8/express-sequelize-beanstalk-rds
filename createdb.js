const pgtools = require('pgtools')

const env       = process.env.NODE_ENV || 'development'
const config    = require(__dirname + '/config/config.js')[env]

pgtools.createdb(config, config.database, (err, res) => {
  if (err) {
    console.error(err)
    process.exit(-1)
  }
  console.log(res)
})
