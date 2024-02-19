// 스플래시 스크린 클릭시 홈화면 보여주기
const splashScreen = document.getElementById("splashScreen");
const onBoarding = document.getElementById("onBoarding");
splashScreen.addEventListener("click", () => {
  splashScreen.classList.add("hidden");
  onBoarding.classList.remove("hidden");
});

// Page 이동

// 온보딩 화면에서 시작버튼 클릭시 home.html로 이동
function startBtn() {
  location.href = "pages/home.html";
}

// 홈화면에서 '맞춤형 운동 가이드 받아보기'버튼 클릭시 user-name.html로 이동
function recommendBtn() {
  location.href = "/pages/user-name.html";
}

// 이름 입력 후 '다음'버튼 클릭 시 user-age.html로 이동
function goToAge() {
  location.href = "/pages/user-age.html";
}

// user-age.html -> user-kneecap.html
function goKneecap() {
  location.href = "/pages/user-kneecap.html";
}

// user-kneecap.html -> user-surgery.html
function goSurgery() {
  location.href = "/pages/user-surgery.html";
}

// 뒤로가기
function goBack() {
  window.history.back();
}

const formLabel = document.getElementsByClassName("form-label");
const formRadioVal = document.querySelector(
  'input[type="radio"]:checked'
).value;
