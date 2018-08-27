var square = x => x*x

console.log(square(9))

var user = {
    name: "Purush",
    sayHello : () =>{
        console.log(arguments)
        console.log(`Hi ${this.name}`)
    },
    say(){
        console.log(arguments)
        console.log(`Hi ${this.name}`)
    }
}

user.sayHello(1,2,3);