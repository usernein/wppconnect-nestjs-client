Rsync = require('rsync')
dotenv = require('dotenv')
dotenvExpand = require('dotenv-expand')

const env = dotenv.config()
dotenvExpand.expand(env)

const rsync = new Rsync()
  .shell('ssh')
  .flags('azr')
  .source('.')
  .exclude(['.git', 'node_modules', '.env'])
  // eslint-disable-next-line no-undef
  .destination(process.env.RSYNC_DESTINATION)

// Execute the command
rsync.execute(function (error, code, cmd) {
  if (error) {
    console.log(error)
  } else {
    console.log('Deployed!', { code, cmd })
  }
})
