const fs = require('fs')

module.exports = function override(config, env) {
  config.module.rules[2].oneOf[1].include = [
    config.module.rules[2].oneOf[1].include,
    fs.realpathSync('../common'),
  ]

  return config
}
