export function get1(fun) {
  return function (...args) {
    fun.call(null, ...args)
  }
}