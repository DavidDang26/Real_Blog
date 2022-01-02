// const { init } = require("../../app/models/Blog");

// const loginButton = document.querySelector(".log-in");
const profileContainer = document.querySelector(".profile-picture");
const buttonLoginCtn = document.getElementById("login-button");
const logOutDrop = document.getElementById("logout-dropdown");
const logOutbtn = document.getElementById("logout-button");
// const checkUser = require('../../app/controllers/auth');
// console.log(checkUser);
// FB.getLoginStatus(function (response) {
//   statusChangeCallback(response);
// });
function initApp(){
    let data = JSON.parse(localStorage.getItem("user")); 
    console.log(data);//is a big string
    if (!data) return;
    const newImg = document.createElement("IMG");
    newImg.src = data.picture.data.url;
    profileContainer.appendChild(newImg);
    buttonLoginCtn.style.display = "none";
    profileContainer.style.display = "block";
    logOutDrop.style.display = "block";
}
initApp();
function statusChangeCallback(response) {
  // Called with the results from FB.getLoginStatus().
  console.log("statusChangeCallback");
  console.log(response); // The current login status of the person.
  if (response.status === "connected") {
    // Logged into your webpage and Facebook.
    testAPI();
  } else {
    // Not logged into your webpage or we are unable to tell.
    // buttonLoginCtn.style.display = "block";
    // profileContainer.style.display = "none";
    // logOutDrop.style.display = "none";
  }
}

function checkLoginState() {
  // Called when a person is finished with the Login Button.
  FB.getLoginStatus(function (response) {
    // See the onlogin handler
    statusChangeCallback(response);
  });
}
window.fbAsyncInit = function () {
  FB.init({
    appId: "3096958733897595",
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });

  FB.getLoginStatus(function (response) {
    // Called after the JS SDK has been initialized.
    statusChangeCallback(response); // Returns the login status.
  });
};
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function showUserUI(response) {}
function testAPI() {
  // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log("Welcome!  Fetching your information.... ");
  FB.api("me?fields=id,name,picture,email", function (response) {
    // checkUser(response);
    let data = JSON.parse(localStorage.getItem("user")); //is a big string
    if (!data) {
      data = response;
      setLocalStorage(response);
    }
    const newImg = document.createElement("IMG");
    newImg.src = data.picture.data.url;
    profileContainer.appendChild(newImg);
    buttonLoginCtn.style.display = "none";
    profileContainer.style.display = "block";
    logOutDrop.style.display = "block";
    const newUser ={
      id : data.id,
      name: data.name,
      email: data.email,
      image: data.picture.data.url,

    }
    ajaxPOST(newUser);
  });
}
function ajaxPOST (user) {
  // (A1) DATA

 
  // (A2) AJAX
  var xhr = new XMLHttpRequest();
xhr.open("POST", "/script", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(user));

  
}
//Log out
logOutbtn.addEventListener("click", function () {
  // FB.logout(function (response) {
  //   // Person is now logged out

  //   buttonLoginCtn.style.display = "block";
  //   profileContainer.style.display = "none";
  //   logOutDrop.style.display = "none";
  //   localStorage.removeItem("user");
  //   location.reload();
  // });
  localStorage.removeItem("user");
  location.reload();
  buttonLoginCtn.style.display = "block";
  profileContainer.style.display = "none";
  logOutDrop.style.display = "none";
});
function setLocalStorage(response) {
  localStorage.setItem("user", JSON.stringify(response));
}

// _setLocalStorage() {
//
// }
// _getLocalStorage() {
//   const data = JSON.parse(localStorage.getItem('workouts')); //is a big string
//   if(!data) return;
//   this.#workouts = data;
// }
// reset(){
//   localStorage.removeItem('workouts');
//   location.reload();
// }
// function checkLoginState() {
//   FB.getLoginStatus(function (response) {
//     alert('test')
//   });
// }
