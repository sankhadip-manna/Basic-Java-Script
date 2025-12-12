function User(email, pasword){
    this._email = email;
    this._pasword = pasword

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email= value
        }
        
    })
    Object.defineProperty(this,'pasword',{
        get : function(){
            return this._pasword.toUpperCase()
        },
        set : function(value){
            this._pasword = value
        }
        
    })
    
}
const sankha = new User("sankha@.AI","abced")
console.log(sankha.email)
console.log(sankha.pasword)

