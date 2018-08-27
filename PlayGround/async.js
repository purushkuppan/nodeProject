console.log("Starting Async")

setTimeout(() => {
    console.log("inside 2000 Async")
}, 2000)

setTimeout(() => {
    console.log("inside 0 Async")
}, 0)


console.log("Ending Async")