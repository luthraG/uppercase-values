var NODE_RATIFY = require('node-ratify');

function toUppercaseValues(obj, deep) {
    var retObj;
    if (NODE_RATIFY.isObject(obj)) {
        retObj = {};

        // Get the object keys
        var objKeys = Object.keys(Object(obj));

        for (var idx = 0; idx < objKeys.length; idx++) {
            if (deep && NODE_RATIFY.isObject(obj[objKeys[idx]])) {
                retObj[objKeys[idx]] = toUppercaseValues(obj[objKeys[idx]], deep);
            } else {
                retObj[objKeys[idx]] = NODE_RATIFY.isString(obj[objKeys[idx]]) ? obj[objKeys[idx]].toUpperCase() : obj[objKeys[idx]];
            }
        }
    } else {
        retObj = obj;
    }

    return retObj;
}

exports = module.exports = {
    toUpperCaseValues      : function (obj, opts) {
        if (!opts || !NODE_RATIFY.isObject(opts))
            opts = {
                deep : false
            };

        var retObj,
            deep = opts['deep'];

        retObj = toUppercaseValues(obj, deep);

        return retObj;
    }
};