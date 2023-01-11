const firstBox = document.querySelector(".text-one");
const secondBox = document.querySelector(".text-two");
const threeBox = document.querySelector(".text-three");
const Button = document.querySelectorAll(".btn");
const messageOne = document.querySelector(".textone");
const messageTwo = document.querySelector(".texttwo");
const messageThree = document.querySelector(".textthree");



Button.forEach( (button) => {
    button.addEventListener("click", () => {
     console.log("try again!");
    
          
    if(button.classList.contains("one")){
        messageOne.classList.toggle("open");
        messageTwo.classList.add("close");
        messageThree.classList.add("close");  
        console.log("YESSS!!!!");
    };
    if(button.classList.contains("two")){
        messageTwo.classList.toggle("open");
        messageOne.classList.add("close");
        messageThree.classList.add("close");
        console.log("YESSSS!!!!");
    }
    if(button.classList.contains("three")){
        messageThree.classList.toggle("open");
        messageOne.classList.add("close");
        messageTwo.classList.add("close");
        console.log("YESSSSS!!!!");
    }
    })

})














