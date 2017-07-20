let outputTarget = document.getElementById("output-target")
console.log("Hello, world!");

var section = document.getElementsByClassName("article-section");
console.log(section)

for (i = 0; i < section.length; i++){
	section[i].addEventListener("click", function(){
		outputTarget.innerHTML = `You clicked on the ${event.target.innerHTML} section`
	})
}

var h1 = document.getElementById("page-title");
console.log(h1)
h1.addEventListener("mouseover", function(){
	console.log("mouseover")
	outputTarget.innerHTML =`"You moved your mouse over the header"` 
});
h1.addEventListener("mouseout", function(){
	console.log("mouseout")
	outputTarget.innerHTML = `"You left me"`
});
	

var input = document.getElementById("keypress-input");
console.log(input)
input.addEventListener("keyup", function(){
	console.log("keyup")
	outputTarget.innerHTML = input.value
})

let blue = document.getElementById("add-color");
blue.addEventListener("click",function(){
	console.log("click")
	document.getElementById("guinea-pig").classList.add("blue")
	
})

let hulkify = document.getElementById("make-large");
hulkify.addEventListener("click",function(){
	console.log("click")
	document.getElementById("make-large").classList.add("hulkify")
})

let capture = document.getElementById("add-border");
capture.addEventListener("click",function(){
	console.log("click")
	document.getElementById("add-border").classList.add("capture")
})

let round = document.getElementById("add-rounding");
round.addEventListener("click",function(){
	console.log("click")
	document.getElementById("add-rounding").classList.add("round")
})