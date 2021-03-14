export function get4(fun) {
  return function (...args) {
    fun.call(null, ...args)
  }
}