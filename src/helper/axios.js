//! Make Timeout function and return promise
const timeOut = function (second) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${second} second`))
    }, second * 1000)
  })
}

export { timeOut }
