
/*! 
 * contemplate
 * JavaScript pico template engine
 * Copyright (c) 2011 Enrico Marino <enrico.marino@email.com>
 * MIT license
 */

!(function (exports) {

  var regexp = /{{\s*([a-z0-9_][\.a-z0-9_]*)\s*}}/gi;

  /**
   * Contemplate
   *
   * @param {String} template template
   * @param {Object} data data
   * @return {String} 
   * @api private
   */

  exports.contemplate = function (template, data) {
    return template.replace(regexp, function (tag, key) { 
      return find(data, key); 
    });
  };

  /**
   * Library version.
   */

  contemplate.version = '0.0.2';


  /**
   * Find the property of 'data' located in 'path'
   *
   * @param {Object} data data
   * @param {String} path path of the property to find
   * @return the property of 'data' located in 'path' 
   * @api private
   */

  contemplate.find = function (data, path) {
    var temp = data;

    path.split('.').forEach(function (part) { 
      temp = temp[part]; 
    });

    return temp;
  }

}(this));
