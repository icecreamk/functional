const toString = Object.prototype.toString

function getTag(val) {
    if (val == null) {
        return val === undefined ? '[object Undefined]' : '[object Null]'
    }
    return toString.call(val)
}
export {
    getTag
}