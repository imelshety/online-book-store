 export const BASE_URL = "https://upskilling-egypt.com:3007/api";
 export const BASE_AUTH = `${BASE_URL}/auth`;

export const AUTH_URLS = {
    login : `${BASE_AUTH}/login`,
    register : `${BASE_AUTH}/register`,
    changePassword : `${BASE_AUTH}/change-password`,
    forgotPassword : `${BASE_AUTH}/forgot-password`,
    resetPassword : `${BASE_AUTH}/reset-password`,
    logout : `${BASE_AUTH}/logout`,
}