export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken) {
        return {Authorization: user.type + ' ' + user.accessToken};
    } else {
        return {};
    }
}

export const currentUser = () => {
    const user = localStorage.getItem('user');

    if (!user) {
        return null;
    }

    return JSON.parse(user);
}