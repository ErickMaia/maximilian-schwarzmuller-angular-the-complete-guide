
//Fake auth service from lesson 147 on
export class AuthService{
    logeddIn = false

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.logeddIn)
                }, 800 )
            }
        )
        return promise
    }

    login(){
        this.logeddIn = true
    }

    logout(){
        this.logeddIn = false
    }
}