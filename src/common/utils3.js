export function get3(fun) {
  return function (...args) {
    fun.call(null, ...args)
  }
}