console.log('Without npcp... :-(');
console.log('process.env.npm_package_config_port', process.env.npm_package_config_port);
console.log('process.env.npm_package_config_connections_0_host', process.env.npm_package_config_connections_0_host);
console.log('process.env.npm_package_config_connections_1_host', process.env.npm_package_config_connections_1_host);

console.log('---');

var config = require('./lib/npcp');
console.log('With npcp... :-D');
console.log('config.port', config.port);
config.connections.forEach(function(connection, index){
  console.log('config.connections[' + index + ']', connection.host);
});