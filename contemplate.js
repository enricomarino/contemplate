// inspired by Microtemplatez - Copyright 2011 Addy Osmani

var contemplate = function (context, undef) {

    return function (tmpl, data) {
        return tmpl.replace(/{{\s*([a-z0-9_][\.a-z0-9_]*)\s*}}/gi, function (tag, k) {
            for (var p = k.split("."), len = p.length, i = 0, temp = data; i < len; i += 1) {
                temp = temp[p[i]];
            }
            return temp;
        });
    };

}(this));