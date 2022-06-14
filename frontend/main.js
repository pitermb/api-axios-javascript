const url = "http://localhost:5500/api";

const newUser = {
  name: "Piter",
  avatar: "https://avatars.githubusercontent.com/u/68957875?v=4",
  city: "Blumenau",
};

const upUser = {
  name: "Piter parker",
  avatar: "https://avatars.githubusercontent.com/u/68957875?v=4",
  city: "Blumenau - SC",
};

function getUser() {
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      renderResult.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}

getUser();

function addNewUser() {
  axios
    .post(url, newUser)
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => console.log(error));
}

function updateUser() {
  axios
    .put(`${url}/3`, upUser)
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => console.log(error));
}

function deleteUser() {
  axios
    .delete(`${url}/5`)
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => console.log(error));
}

function getOneUser() {
  axios
    .get(`${url}/2`)
    .then((response) => {
      const data = response.data;
      renderResult.textContent = JSON.stringify(data);
    })
    .catch((error) => console.log(error));
}