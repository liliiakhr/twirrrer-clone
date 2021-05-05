// DOM Elements
const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const middleContentMainPage = document.querySelector(".middle-content");
const btnTopMainPage = document.querySelector(".btn-top");
const newsFeedPage = document.querySelector(".news-feed-page");
// **************************
// **************************
// Main page
const goToLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
};

middleContentMainPage.addEventListener("click", (e) => {
  if (e.target.classList[1] === "main-btn") {
    goToLoginPage();
  }
  console.log(e.target.classList[1]);
});

btnTopMainPage.addEventListener("click", () => {
  const inputUserInfo = document.querySelector(".user-info");
  const inputPassword = document.querySelector(".password");
  if (inputUserInfo.value !== "" && inputPassword.value !== "") {
    mainPage.style.display = "none";
    newsFeedPage.style.display = "block";
  } else {
    goToLoginPage();
  }
});
