const DEMO_PASSWORD = "224119";

function login(){
  const value = document.getElementById("password").value;
  if(value === DEMO_PASSWORD){
    document.getElementById("login").classList.add("hidden");
    document.getElementById("site").classList.remove("hidden");
    sessionStorage.setItem("hikayatna_logged_in","1");
  }else{
    document.getElementById("error").textContent="كلمة المرور غير صحيحة.";
  }
}

function logout(){
  sessionStorage.removeItem("hikayatna_logged_in");
  location.reload();
}

if(sessionStorage.getItem("hikayatna_logged_in")==="1"){
  document.getElementById("login").classList.add("hidden");
  document.getElementById("site").classList.remove("hidden");
}

document.getElementById("password").addEventListener("keydown",e=>{
  if(e.key==="Enter") login();
});
function showSecret(){
  document.getElementById("secretMessage").style.display = "block";
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

updateLoveCounter();
