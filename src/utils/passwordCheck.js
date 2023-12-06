export const passWordCheck = (pass) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,16}$/;

  const isStrongPassword = passwordRegex.test(pass);

  if (!isStrongPassword) {
    return true;
  }
};
