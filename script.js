const DEMO_PASSWORD = "1234";

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
