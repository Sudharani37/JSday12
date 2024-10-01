let h3=document.createElement("h3")
h3.innerText="First code"
document.body.appendChild(h3)
let words = ["apple", "banana", "grape", "orange", "pear", "watermelon"]
let longWords = words.filter(word => word.length > 5)
let ul = document.createElement("ul")
longWords.forEach(word => {
  let li = document.createElement("li")
  li.innerText = word
  ul.appendChild(li)
})       
document.body.appendChild(ul)

let h31=document.createElement("h3")
h31.innerText="Second code"
document.body.appendChild(h31)
let capitalize= ["hello", "world", "javascript", "dom"]
let result=capitalize.map((words)=>words.toUpperCase())
paragraph=result.join(" ")
let Cpara=document.createElement("p")
Cpara.innerText=paragraph;
document.body.appendChild(Cpara)

let h32=document.createElement("h3")
h32.innerText="Third code"
document.body.appendChild(h32)
 let givenArr=["I", "am", "learning", "JavaScript", "today"]
 result=givenArr.join(" ")
 let div=document.createElement("div")
 div.innerText=result
 document.body.appendChild(div)

 let h33=document.createElement("h3")
h33.innerText="Fourth code"
document.body.appendChild(h33)
let rever=["dog", "cat", "bird", "fish"]
rever.map(a=>{a.split("").reverse().join("")
  let unli=document.createElement("ul")
  let lis=document.createElement("li")
  lis.innerText=a
  unli.appendChild(lis)
  document.body.appendChild(unli)
    })

let h34=document.createElement("h3")
h34.innerText="Fifth code"
document.body.appendChild(h34)
let vowels=["apple", "banana", "grape"]
vowels.map((a)=>{
  let count=a.match(/[aeiou]/gi).length
  let unl=document.createElement("ul")
  let li1=document.createElement("li")
  li1.innerText=a+`(${count}vowels)`
  unl.appendChild(li1)
  document.body.appendChild(unl)
})


 



