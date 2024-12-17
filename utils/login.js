export function loginObject(email, password) {
  let buildObj = {
    email: email,
    password: password,
  };
  return JSON.stringify(buildObj);
}
