export function isLogin(){
    const user = localStorage.getItem('user')
    const login = localStorage.getItem('login')
    if(user && login) {
        return true
    }
    else {
        return false
    }
}

export function isOtpLogin(){
    const user = localStorage.getItem('user')
    if(user) {
        return true
    }
    else {
        return false
    }
}