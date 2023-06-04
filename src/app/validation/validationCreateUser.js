const validationCreateUser = (value) => {
    let error = {};

    if (!value.name) {
        error.name = "Debe colocar su nombre";
    }

    if (!value.email) {
        error.email = "Debe colocar su correo";
    }

    if (!value.password) {
        error.password = "Debe colocar su contraseña";
    } else if (value.password.length < 6) {
        error.password = "Debe colocar al menos 6 caracteres";
    }

    return error;
};

export default validationCreateUser;
