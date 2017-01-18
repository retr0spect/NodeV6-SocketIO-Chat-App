/**
 * Created by Aditya on 1/17/2017.
 */

var isRealString = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};
