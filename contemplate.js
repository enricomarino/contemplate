// contemplate.js
// JavaScript pico template engine library
//
// inspired by Microtemplatez
// Copyright 2011 Addy Osmani
//
// Copyright 2011 Enrico Marino
// MIT license

!function (name, definition) {
    if (typeof module != 'undefined') module.exports = definition()
    else if (typeof define == 'function' && define.amd) define(name, definition)
    else this[name] = definition()
}('contemplate', function (context, undefined) {

    return function (tmpl, data) {
        return tmpl.replace(/{{\s*([a-z0-9_][\.a-z0-9_]*)\s*}}/gi, function (tag, k) {
            for (var p = k.split("."), len = p.length, i = 0, temp = data; i < len; i += 1) {
                temp = temp[p[i]];
            }
            return temp;
        });
    };

}(this));