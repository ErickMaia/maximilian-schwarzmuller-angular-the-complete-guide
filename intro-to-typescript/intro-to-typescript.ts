let person: Person; 

//type infered is number
let age = 24; 

//so, trying to give it a string will result in error
//age = "lorem ipsum dolor sit amet"

//type infered is any
let ageAny; 

ageAny = 24
//so, we are allowed to give it a string
ageAny = "lorem ipsum dolor sit amet"

//an object type
type Person = {
    name: string,
    age: number
}

person = {
    name: "Erick", 
    age: 24
}

function Add(a: number, b: number){
    //the infered return type is number
    return a + b; 
}

//now we are explicitly declaring the return type
function Subtract(a: number, b: number): number{
    return a - b
}

//the infered return type is void
function sayHello(){
    console.log("Hello")
}

//generics

let arrayA:any[] = [] 

function AddAnyValueToArray(array: any[], value: any)
{
    return [value, ...array]
}

let arrayB = AddAnyValueToArray(arrayA, "new string value")

//using string function on a number member of the array would give us runtime error
arrayB[0].split('')

//the solution to this situation is the use of generics

function AddGenericValueToArray<T>(array: T[], value: T){
    return [value, ...array]
}

let arrayC: string[] = ["a", "b", "c"]

let arrayD = AddGenericValueToArray(arrayC, "new string value")

arrayD[0].split('') 

//interfaces and classes

interface Human{
    name: string
    age: number

    greet: () => void
}

class SoftwareDeveloper implements Human{
    name: string;
    age: number;
    githubAccount: string; 
    
    greet(){
        console.log("Hello world!")
    };
}