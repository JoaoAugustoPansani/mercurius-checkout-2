export const isEmailValid = (email: string) => {
  const emailRegex = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

  if (email.match(emailRegex)) {
    return true;
  } else {
    return false;
  }
};
