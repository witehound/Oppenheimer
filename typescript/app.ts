// simple types
let variable = "hello"

let number: number;

let stringOrNumber: string | number;

//Arrays with types

let stringArray: string[];

let numberArray: number[];

let numberOrNumbrArray: number[] | string[];

//Objects with types

let userObject: {
    name: string,
    number: number,
    status : boolean
}

userObject = {
    name: "iman",
    number: 12,
    status : false
}

//Objects with types and optional types
let userObjectTwo: {
    name: string,
    number: number,
    status ?: boolean
}

userObjectTwo = {
    name: "iman",
    number: 12,
}

// Any keyword

let any: any

any = 12
any = "string"
any = false

//Functions
// returning a type 
let funcReturnString = () : string => {
    return "string"
}

// Argument types 
let funcTakeArgType = ( num : number )  : number => {
    return num
}

// returning void
let funcReturnVoid = ( num : number )  : void => {
    num * 2
}