'use strict';

module.exports = class Server {
  constructor() {
    // save our settings to this
    this.settings = g.settings.Server;

    // add express to this
    this.app = m.express();

    // run the setup method
    this.setup();
  }

  setup() {
    // tell express to use middleware to parse JSON
    this.app.use(m.bodyparser.json());

    // declare a webroot
    this.app.use(
      m.express.static(
        m.path.join(g.settings.appRoot, this.settings.webroot)
      )
    );

    // have index listing at the webroot
    this.app.use(
      m.serveindex(
        m.path.join(g.settings.appRoot, this.settings.webroot),
        {
          icons: true,
          hidden: true,
          view: 'details'
        }
      )
    );

    // add libs directories (not working)
    // this.settings.libs.forEach(function(lib){
    //   this.app.use(
    //     lib.dir,
    //     m.express.static(
    //       m.path.join(g.settings.appRoot, lib.path)
    //     )
    //   );
    // }, this);

    // instead we add a bootstrap directory manually
    this.app.use(
      '/bootstrap',
      m.express.static(
        m.path.join(g.settings.appRoot, this.settings.bootstrap)
      )
    );

    // and a jquery directory
    this.app.use(
      '/jquery',
      m.express.static(
        m.path.join(g.settings.appRoot, this.settings.jquery)
      )
    );


    // compress all files using gzip
    this.app.use(m.compression());

    // parse all request cookies
    this.app.use(m.cookieparser());

    // parse all urlencoded request body data
    // for example from "standard" HTML forms
    this.app.use(m.bodyparser.urlencoded({extended: false}));

    // listen on port 3000
    var me = this;
    this.app.listen(this.settings.port,  function() {
      console.log("Server listening on port "+me.settings.port);
    });
  }
}
