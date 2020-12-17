export const debounce = (func, timeOut) => {
  let timeOutCounter

  return (...args) => {
    timeOutCounter && clearTimeout(timeOutCounter);
    timeOutCounter = setTimeout(() => {
      timeOutCounter = null
      func(...args)
    }, timeOut)
  }
}