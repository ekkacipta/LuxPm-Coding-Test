function givvenNumber(N) {
    let splitedStringN = N.toString().split("")
    if(N < 0) {
        return Number(`-5${Math.abs(N).toString()}`)
    }
    for(let i = 0; i < splitedStringN.length; i++) {
        if(Number(splitedStringN[i]) < 5) {
            splitedStringN.splice(i, 0, "5")
            return Number(splitedStringN.join(""))
        }
    }
}

// example 1
console.log("example 1 =",givvenNumber(276))

// example 2
console.log("example 2 =",givvenNumber(-999))

// example 3
console.log("example 3 =",givvenNumber(0))

// example 4
console.log("example 4 =",givvenNumber(860))


