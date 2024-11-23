export const validateInput = (type: 'email' | 'password' | 'fullName' | 'phone', value: string) => {
    const regex = {
      email: /^[a-zA-Z]+[a-zA-Z0-9]*[-.+_]?[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]+\.?[a-z]*$/,
      password: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/,
      fullName: /^[a-zA-Z]{2,}$/,
      phone: /^([+]\d{2})?\d{10}$/
    };
    return regex[type].test(value);
  };