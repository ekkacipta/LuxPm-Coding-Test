function anagram(s, t) {
    return s.split("").sort().join("") == t.split("").sort().join("")
    
}


// example 1
console.log("example 1 = ",anagram("anagram", "nagaram"))

// example 2
console.log("example 2 =",anagram("rat", "car"))











