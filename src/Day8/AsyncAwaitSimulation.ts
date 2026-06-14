// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.
type User = {
  id: number;
  name: string;
};
async function getUserData(id: number): Promise<User> {
  return await new Promise((resolved) => {
    setTimeout(() => {
      const obj: User = {
        id: id,
        name: "test user",
      };
      resolved(obj);
    }, 5000);
  });
}
async function run() {
  const data = await getUserData(1);
  console.log(data);
}
