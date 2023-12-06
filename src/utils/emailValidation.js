/* eslint-disable no-useless-escape */
export const emailValidation = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(email)) {
    return true;
  }
};
