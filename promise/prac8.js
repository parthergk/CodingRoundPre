async function a() {
  return "A";
}

async function b() {
  throw new Error("B Failed");
}

async function main() {
  try {
    const result = await Promise.all([
      a(),
      b()
    ]);

    console.log(result);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

main();