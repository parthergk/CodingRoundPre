async function getUser() {
  return { id: 1, name: "Gaurav" };
}

async function getPosts() {
  return ["Post 1", "Post 2"];
}

async function main() {

  const [user, post] = await Promise.all([getUser(), getPosts()]);

  console.log({user, post});
  
}
main()