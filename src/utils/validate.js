// 判断是否是外链
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path);
}

// 判断用户名是否正确
export function validUsername(str) {
    const VALID_MAP = ['admin', 'editor'];
    return VALID_MAP.indexOf(str.trim()) >= 0;
}

// 判断URL是否正确
export function validURL(url) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
}

// 判断是否是小写
export function validLowerCase(str) {
    const reg = /^[a-z]+$/;
    return reg.test(str);
}

// 判断是否是大写
export function validUpperCase(str) {
    const reg = /^[A-Z]+$/;
    return reg.test(str);
}

// 判断是否是字母
export function validAlphabets(str) {
    const reg = /^[A-Za-z]+$/;
    return reg.test(str);
}

// 判断是否是有效的邮箱
export function validEmail(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

// 判断是否是字符串
export function isString(str) {
    if (typeof str === 'string' || str instanceof String) {
        return true;
    }
    return false;
}

// 判断是否是数组
export function isArray(arg) {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return Array.isArray(arg);
}