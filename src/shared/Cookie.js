import jwtDecode from "jwt-decode";

const getCookie = (name) => {

    let value = document.cookie;

    let userinfo = jwtDecode(value)

    return userinfo.USER_NAME
};


const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
}

export { getCookie, deleteCookie };