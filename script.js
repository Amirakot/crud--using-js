let add=document.querySelector(".add");
let usname=document.querySelector(".name");
let email=document.querySelector(".email");
let mobile=document.querySelector(".mobile");
let password=document.querySelector(".password");
let register=document.querySelector(".register");
let info=document.querySelector('.info')


//  let data=new Object();

function validate(){
  if(usname.value==''){
    alert('username must');
    return false;
  }
   if (email.value == "") {
     alert ("email must");
       return false;
   }
   if(mobile.value==''){
    alert('mobile must');
      return false;
   }
   if(password.value==''){
    alert('password must');
      return false;
   }
  return true;
}
function showdata(){
   let user = [];
 if (localStorage.getItem("users") == null) {
   user = [];
 } else {
   user = JSON.parse(localStorage.getItem("users"));
   // console.log(localStorage.setItem("users", JSON.stringify(user)));
 }
 
  info.innerHTML= user.map(function (e, i) {
    return `<tr>
<td>${i + 1}</td>
      <td>${e.name}</td>
      <td>${e.email}</td>
    <td>${e.mobile}</td>
    <td>${e.password}</td>   
      <td>
      <button onclick=edit(${i}) data-bs-toggle="modal" data-bs-target="#exampleModal" id="update" class="btn btn-success">edit</button>
     <button onclick=deletedata(${i}) class="btn btn-danger">delete</button>
      </td>
      </tr>
      `;
  });
 


}
document.onload=showdata();
 register.addEventListener("click",function(){
 
    // data={'id':1,"name":`${usname.value}`,"email":`${email.value}`,"mobile":`${mobile.value}`,"password":`${password.value}`};
 
if(validate()==true){
  if (localStorage.getItem("users") == null) {
    user = [];
  } else {
    user = JSON.parse(localStorage.getItem("users"));
    // console.log(localStorage.setItem("users", JSON.stringify(user)));
  }
    // console.log(data)

user.push({
'name':`${usname.value}`,
 "email": `${email.value}`,
 'mobile':`${mobile.value}`,
  "password":  `${password.value}`,
})
    
localStorage.setItem('users',JSON.stringify(user))     
showdata();
usname.value="";
email.value="";
mobile.value="";
password.value="";
    // if(local3
    // }


}

})
 document.querySelector("#update").style.display = "none";
 register.style.display = "block";
function deletedata(index) {
  let user;
  if (localStorage.getItem("users") == null) {
    user = [];
  } else {
    user = JSON.parse(localStorage.getItem("users"));
    // console.log(localStorage.setItem("users", JSON.stringify(user)));
  }
  user.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(user));
  showdata();
}
function edit(index){
   let user;
   if (localStorage.getItem("users") == null) {
     user = [];
   } else {
     user = JSON.parse(localStorage.getItem("users"));
     // console.log(localStorage.setItem("users", JSON.stringify(user)));
   }
   usname.value = user[index].name;
   email.value = user[index].email;
   mobile.value = user[index].mobile;
   password.value = user[index].password;
document.querySelector("#update").addEventListener('click',function () {
  if (validate() == true) {
    user[index].name = usname.value;
    user[index].email = email.value;
    user[index].mobile = mobile.value;
    user[index].password = password.value;
    localStorage.setItem("users", JSON.stringify(user));
    showdata();

  }
 
});
 document.querySelector("#update").style.display = "block";
 register.style.display = "none";

  }




