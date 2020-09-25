module.exports.registerUser = (inputs) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const namePattern = /^[a-zA-ZåäöÅÄÖ]+ [a-zA-ZåäöÅÄÖ]+$/;

  const validEmail = emailPattern.test(inputs.email);
  const validName = namePattern.test(inputs.name);

  if (
    validEmail === true &&
    validName === true &&
    inputs.password.length >= 6
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports.addComment = (input) => {
  if (input.length > 10) {
    return true;
  } else {
    return false;
  }
};
