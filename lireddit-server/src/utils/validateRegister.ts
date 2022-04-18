import { UsernamePasswordInput } from "./UsernamePasswordInput";

const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Dude it's not an email ! ",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "Nah bro don't put an @ ! ",
      },
    ];
  }
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "length must be greater than 2 ",
      },
    ];
  }
  if (options.password.length <= 2) {
    return [
      {
        field: "password",
        message: "length must be greater than 3 ",
      },
    ];
  }
  return null;
};

export default validateRegister;
