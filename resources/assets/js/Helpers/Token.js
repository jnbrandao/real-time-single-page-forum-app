class Token{
    
    
    
    /**
     * Decode payload
     * @param {*} payload 
     */
    decode(payload){
        return JSON.parse(atob(payload))
    }
    /**
     * Get payload function
     * @param {*} token 
     */
    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }
    /**
     * Verify if the token is valid
     * @param {*} token 
     */
    isValid(token){
        const payload = this.payload(token)
        if (payload) {
            if (payload.iss == "http://localhost:8000/api/auth/login" || "http://localhost:8000/api/auth/signup") {
                return true 
            } else {
              return false  
            } 
        }
        return false
    }
    
}

export default Token = new Token()