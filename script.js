const username = document.querySelector("#username");
const repo = document.querySelector("#repo");

const urlLink = document.querySelector("#url-link");

if (localStorage.getItem("githubURL") !== null) {
  urlLink.value = localStorage.getItem("githubURL");
}

function send_data() {
  let isCorrect = false;
  if (username.value === "") {
      if (urlLink.value !== "") {
        localStorage.setItem("githubURL", urlLink.value);
        isCorrect = true;
      } else if (repo.value === "") {
        alert("Введите username и имя репозитория (или URL)!");
      } else {
        alert("Введите username (или URL)!");
      }
  } else if (repo.value === "") {
        alert("Введите имя репозитория (или URL)!");
  } else {
      localStorage.setItem("githubURL", `https://github.com/${username.value}/${repo.value}`);
      isCorrect = true;
  }

  if (isCorrect) {
    location.replace("./file-name.html")
  }
}

function open_github_commits() {
    window.open(`${localStorage.getItem('githubURL')}/commits/main`);
    location.replace('./sha.html');
}

function download_sha() {
  const sha = document.querySelector('#sha');
  const fileName = document.querySelector('#file-name');
  if (!(localStorage.getItem("SHA") === null || localStorage.getItem("fileName") === null)) {
    sha.value = localStorage.getItem("SHA");
    fileName.value = localStorage.getItem("fileName");
  }
  if (sha.value === "" || fileName.value === "") {
    alert("Поля не могут быть пустыми!");
  } else {
    localStorage.setItem("SHA", sha.value);
    localStorage.setItem("fileName", fileName.value);
  }
  window.open(`${localStorage.getItem("githubURL")}/raw/${localStorage.getItem("SHA")}/${localStorage.getItem("fileName")}`)
}
