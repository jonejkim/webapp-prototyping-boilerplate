
import {fillHelloString} from './test-library'

let x:number = 0

let secondDivChild = document.createTextNode(fillHelloString(x))
document.getElementById("secondDiv").appendChild(secondDivChild)

setInterval(function (){
    x++
    let helloString = fillHelloString(x)
    document.getElementById("secondDiv").removeChild(secondDivChild)
    secondDivChild = document.createTextNode(helloString)
    document.getElementById("secondDiv").appendChild(secondDivChild)

    console.assert(false, "This is the arbitrarily triggered exception for testing!!")
}, 1000)

let thirdDivChild = document.createTextNode('This is the third div: Now check in debugging console if debugger and source mappings are aligned properly. For example, by pressing F12 in Chrome of Firefox to open developer interface. If you launched this from VSCode debugging with F5, VSCode should be able to output in debugging console and breakpoint at error.')

document.getElementById('thirdDiv').appendChild(thirdDivChild)