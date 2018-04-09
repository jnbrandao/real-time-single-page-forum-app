class AppStorage {
    /**
     * Login
     */
    storeToken(token){
        localStorage.setItem('token' ,token)
    }

    storeUser(user){
        localStorage.setItem('user', user)
    }

    store(token, user){
        this.storeToken(token)
        this.storeUser(user)
    }

    /**
     * Remove localstorage token and user
     */

    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }

    /**
     * Get Token and User Info
     */

    getToken(){
        return localStorage.getItem('token')
    }

    getUser(){
        return localStorage.getItem('user')
    }
}

export default AppStorage = new AppStorage()