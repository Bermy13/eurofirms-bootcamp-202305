/*Global */
const context = {
    set userId(value) {

        if (value) {
            sessionStorage.userId = value  
            
        }else{
            delete sessionStorage.userId     
        }
       
    },

    get userId() {
        if (sessionStorage.userId)
            return sessionStorage.userId

        return null
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)