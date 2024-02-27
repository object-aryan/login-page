const eye=document.querySelector("#lock");
eye.addEventListener("click",()=>{
   const password=document.querySelector("#password");
   if(password.type=="password")
   {
      password.type="text";
      
   }
   else
   password.type ="password";
})

console.log(password);
// eye.addEventListener("click",()=>{
// if()
// })