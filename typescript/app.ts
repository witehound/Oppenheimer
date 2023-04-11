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
type user = {
    name: string,
    number: number,
    status ?: boolean
}

let userTwo : user = {
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


// returning void
let funcReturnVoid = ( num : number )  : void => {
    num * 2
}

// Argument types 
let funcTakeArgType = ( num : number )  : number => {
    return num
}

// Using type aliases
let funcReturnType = ( user : user) : user => {
    return  user
}

// Function signatures
type functionSignatures = (user: user) => user

let testFunctionSignatures: functionSignatures = (user : user) => {
    return user
}

//Intrfaces
interface IUser  {
    name: string,
    number: number,
    status ?: boolean
}


//Extends
interface IStudent extends IUser {
    id : number
}

let student: IStudent = {
    name: "iman",
    number: 12,
    id : 2777
}

//Genrics
interface IAuthor {
    id: number,
    name : string
}

interface ICategory {
    id: number,
    title : string
}

interface IPost {
    id: number,
    title: string,
    desc: string, 
    extra : IAuthor[] | ICategory[]
}

interface IPostWithGenerics<T> {
    id: number,
    title: string,
    desc: string, 
    extra : T
}
