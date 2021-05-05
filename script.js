// DOM Elements
const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const middleContentMainPage = document.querySelector(".middle-content");
const btnTopMainPage = document.querySelector(".btn-top");
const newsFeedPage = document.querySelector(".news-feed-page");
const loginModal = document.querySelector(".login-modal");
const modalX = document.querySelector(".login-modal i");
const loginFormBtn = document.querySelector(".login-form-btn");
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
    loginModal.style.display = "block";
  }
});

// Login page

modalX.addEventListener("click", () => {
  loginModal.style.display = "none";
});

loginFormBtn.addEventListener("click", () => {
  const loginUserInfo = document.querySelector(".login-user-info");
  const loginPassword = document.querySelector(".login-password");
  if (loginUserInfo.value !== "" && loginPassword.value !== "") {
    loginPage.style.display = "none";
    newsFeedPage.style.display = "block";
  } else {
    loginModal.style.display = "block";
  }
});
