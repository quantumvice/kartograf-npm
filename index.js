//getting the absolute directory of where the app is called from.
//this helped a lot: https://stackoverflow.com/a/43960876
//has the trailing slash
var dir = require.main.paths[0].split('node_modules')[0];

var fs = require('fs');
if (!fs.existsSync(dir + 'kartograf/plugins/')) {
    console.log('Setting up Kartograf!');
    
    //here we download the stuff from the server
    console.log('Everything downloaded. Please restart your server!');
} else {
    module.exports = {};
    module.exports.dir = dir;
    /**
     * Used only to load Kartograf plugins. For Node modules use require()
     * 
     * @param id string ID of module
     * return any
     */
    module.exports.inject = (id) => {
        return require(dir + 'kartograf/plugins/' + id);
    };
    module.exports.app = module.exports.inject('app');
}