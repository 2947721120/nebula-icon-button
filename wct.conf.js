const pkg = require('./package.json');
const argv = require('minimist')(process.argv.slice(2));
const build = `${pkg.name} v${pkg.version} (${Math.round(new Date().getTime() / 1000)})`

console.log(`BUILD: ${build}`)

module.exports = {
  verbose: false,
  expanded: true,
  persistent: argv.persistent || false,
  simpleOutput: true,
  plugins: {
    local: {
      disabled: true,
      browsers: ['chrome', 'firefox']
    },
    sauce: {
      disabled: true,
      name: pkg.name,
      build: build,
      browsers: [{
        browserName: 'Chrome',
        platform: 'Windows 10',
        version: 'latest'
      }, {
        browserName: 'firefox',
        platform: 'Windows 10',
        version: 'latest'
      }, {
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: 'latest'
      },{
        browserName: 'safari',
        platform: 'macOS 10.12',
        version: 'latest'
      }]
    }
  }
}
