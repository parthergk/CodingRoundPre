const user = {
  id: 1,
  name: "Gaurav",
  role: "Developer"
};

localStorage.setItem("user",JSON.stringify(user));

const data = localStorage.getItem("user");
console.log(JSON.parse(data));