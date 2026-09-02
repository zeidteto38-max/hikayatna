const DEMO_PASSWORD = "224119";

function login(){
  const password = document.getElementById("password");
  const loginBox = document.getElementById("login");
  const site = document.getElementById("site");
  const error = document.getElementById("error");

  if(password.value === DEMO_PASSWORD){
    loginBox.classList.add("hidden");
    site.classList.remove("hidden");
    sessionStorage.setItem("hikayatna_logged_in","1");
  }else{
    error.textContent = "كلمة المرور غير صحيحة.";
  }
}

function logout(){
  sessionStorage.removeItem("hikayatna_logged_in");
  location.reload();

  function showSecret(){
  const message = document.getElementById("secretMessage");

  if(message){
    message.innerHTML = "وجودك في حياتي هو كل حياتي ❤️";
    message.classList.add("show-secret");
  }
  }
  


function updateLoveCounter(){
  const start = new Date(2024, 1, 14);
  const now = new Date();

  const diff = now - start;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const counter = document.getElementById("loveCounter");

  if(counter){
    counter.textContent = `عدّى على حكايتنا ${days} يوم ❤️`;
  }
}

function openPhoto(imageName){
  const modal = document.getElementById("photoModal");
  const bigPhoto = document.getElementById("bigPhoto");

  if(modal && bigPhoto){
    bigPhoto.src = imageName;
    modal.style.display = "flex";
  }
}

function closePhoto(){
  const modal = document.getElementById("photoModal");

  if(modal){
    modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function(){

  if(sessionStorage.getItem("hikayatna_logged_in") === "1"){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("site").classList.remove("hidden");
  }

  const password = document.getElementById("password");

  if(password){
    password.addEventListener("keydown", function(e){
      if(e.key === "Enter"){
        login();
      }
    });
  }

  updateLoveCounter();
});
