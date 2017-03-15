// constructs g.settings object
module.exports = function() {
  var appRoot = m.path.normalize(__dirname +'/');

  g.settings = {
    appRoot: appRoot,
    classLoader: {
      baseDir: m.path.join(appRoot,'classes/'),
      toLoad: [
        'Server',
        'LessWatch'
      ]
    },
    Server: {
      webroot: 'www',
      // this is not working:
      // libs: [
      //   {
      //     dir: 'bootstrap',
      //     path: 'node_modules/bootstrap/dist'
      //   },
      //   {
      //     dir: 'jquery',
      //     path: 'node_modules/jquery/dist'
      //   }
      // ],
      // manually instead:
      bootstrap: 'node_modules/bootstrap/dist',
      jquery: 'node_modules/jquery/dist',
      port: 3000
    },
    LessWatch: {
      paths: {
        watchDirs: [
          './less/**/*.less'
        ],
        lessInput: [
          './less/all.less'
        ],
        cssOutput: './www/css'
      }
    }
  };
};












