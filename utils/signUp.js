export function signUpObject(firstName, lastName, email, password1, password2) {
  if (password1 === password2 && password1 != '') {
    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password1,
    };
  } else {
    console.log('passwords dont match');
  }
}
