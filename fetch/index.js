const userBlock = document.querySelector(".user");
const loading = document.querySelector(".loading");
const login = document.querySelector(".login");
const id = document.querySelector(".id");
const avatar = document.querySelector(".avatar");
const github = document.querySelector(".github");

userBlock.classList.add("none");
loading.classList.remove("none");

async function getUsers(name) {
  let user = fetch(`https://api.github.com/users/${name}`).then(
    successResponse => {
      if (successResponse.status != 200) {
        return null;
      } else {
        return successResponse.json();
      }
    },
    failResponse => {
      return null;
    }
  );

  let results = await user;
  userBlock.classList.remove("none");
  loading.classList.add("none");
  console.log(results);
  return results;
}

getUsers("gagharutyunyan").then(res => {
  login.textContent = `Логин ${res.login}`;
  id.textContent = `ID ${res.id}`;
  avatar.src = res.avatar_url;
  github.href = res.url;
});
