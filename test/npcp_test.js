'use strict';

var config = require('../lib/npcp.js');

exports['npcp'] = {
  config: function(test) {
    test.expect(1);

    var expected = {
      "port": 3000,
      "connections": [{
        "host": "localhost:3001"
      }, {
        "host": "localhost:3002"
      }],
      "first": "1",
      "second": "2",
      "third": [{
        "child": "0"
      }, {
        "child": "1"
      }],
      "fourth": {
        "fifth": "some value",
        "sixth": {
          "seventh": "some other value",
          "eigth": "true"
        }
      }
    };

    test.deepEqual(config, expected, 'parsed config should match');
    test.done();
  },
};
