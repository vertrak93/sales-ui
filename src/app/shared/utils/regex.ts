export const passwordRegex = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-\.]).{8,}$';
export const userRegex = '^[a-zA-Z0-9](?:[a-zA-Z0-9]|(?:\.(?=[a-zA-Z0-9]))|(?:_(?=[a-zA-Z0-9]))){4,28}[a-zA-Z0-9]$';
export const nameRegex = '^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+(\s[A-Za-zÑñÁÉÍÓÚáéíóúüÜ]+)*$';