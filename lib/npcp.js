/*
 * npcp
 * https://github.com/erickrdch/npcp
 *
 * Copyright (c) 2013 Erick Ruiz de Chavez
 * Licensed under the MIT license.
 */

'use strict';

module.exports = (function() {
  var i, path, value, isArray, tmp, current, config = {};

  // Read environment variables
  for (i in process.env) {
    // Only process NPM Package Configs
    if (i.indexOf('npm_package_config_') === 0) {

      // Remove useless text and split the name in a more useful "path"
      path = i.replace('npm_package_config_', '').split('_');

      // Value to store
      value = process.env[i];

      // Reference to current level in the path
      tmp = config;

      while (current = path.shift()) {

        // If the current level seems a number we must be inside an Array
        if (!isNaN(parseInt(current, 10))) {
          current = parseInt(current, 10);
        }

        // Try to gess if current level is an Array based on first child key
        isArray = path.length > 0 && !isNaN(parseInt(path[0], 10));

        // If the current level does not exist, create a new item in the
        // config object
        if (!tmp[current]) {
          // If current level has at least 1 child, guess our type (Array or
          // Object); if no more children, then set the value.
          if (path.length > 0) {
            tmp[current] = isArray ? [] : {};
          } else {
            tmp[current] = value;
          }
        }

        // Set the current level refference to the next child in the path
        tmp = tmp[current];
      }
    }
  }

  return config;
}());
