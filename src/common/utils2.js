export function get2(fun) {
  return function (...args) {
    fun.call(null, ...args)
  }
}