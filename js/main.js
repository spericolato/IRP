//service button adding & removing

const service = document.querySelectorAll(".serDiv");
const contBtn = document.createElement("button");

contBtn.innerHTML = "Contact!"
contBtn.setAttribute("class","onCnt")

service.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.appendChild(contBtn)
        contBtn.addEventListener("click",()=>{
             window.open("popup.html","","width=400px height = 500px")
        })
    })
    element.addEventListener("mouseleave",()=>{
        element.removeChild(contBtn)
    })
});

var inpBtn = document.querySelector(".inpBtn")

//PopUp photos 

const photos = document.querySelectorAll(".image");

photos.forEach(item =>{
    item.addEventListener("click",()=>{
        window.open(item.getAttribute("src"))
    })
})

//burger nav

var burgur = document.querySelector(".burgur");
var sideNav = document.querySelector(".sideNav");

burgur.addEventListener("click",()=>{
    let position = sideNav.getAttribute("style")

    if(position == "left: 60%;"){
        sideNav.style.left = "0%"
    }
    else{
        sideNav.style.left = "60%"
    }
})


// send Email
var userName = document.getElementById("Name");
var email = document.getElementById("EmailAddr");
var content = document.getElementById("mailUs");
var submit = document.getElementById("pushIt");

function sendMail(name,mail,text){
    if(userName.value == "" || email.value == "" || content.value == ""){

        swal("Opps", "une chaîne de caractères est vide!", "warning");

        userName.value == "";
        email.value == "";
        content.value == "";
    }
    else{
        swal("Merci!", "Courrier a été envoyé!", "success");

        emailjs.send("service_o5z2z3y","template_a778ul3",{
        from_name: `${name.value}: ${mail.value}`,
        to_name: "IRRI PRO",
        message: text.value,
        });
    }

    
}

 submit.addEventListener("click",()=>{
    sendMail(userName,email,content)
})

// veiws system

var counter = document.getElementById("count");

update()

function update(){
    fetch("https://api.countapi.xyz/update/irripro/irp?amount=1").then(res => res.json()).then(res => {
        counter.innerHTML = res.value
    })
}