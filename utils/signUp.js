export function signUpObject(firstName, lastName, email, password1, password2) {
  if (password1 === password2 && password1 != '') {
    let buildObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password1,
    };
    return JSON.stringify(buildObj);
  } else {
    console.log('passwords dont match');
  }
}
