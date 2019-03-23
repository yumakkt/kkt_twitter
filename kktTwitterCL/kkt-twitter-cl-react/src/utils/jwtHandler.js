export const tokenToUser = token => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const tokenPayload = JSON.parse(window.atob(base64));
    return tokenPayload
}