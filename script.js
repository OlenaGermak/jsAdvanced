
var obj ={
    firstName:'',
    lastName:'',
    age:'',

    setName: function(name){
       this.firstName =name;
    },

    setLastName: function(LastName){
        this.lastName =LastName;
     },
     setAge: function(years){
        this.age =years;
     },
     getName: function(){
        return this.firstName
    },
   
     getLastName: function(){
        return this.lastName
    },
    
     getAge: function(){
         return this.age
     },
    hello: function(){
        alert(`Hello, my name is ${obj.getName()} ${obj.getLastName()} I'm ${obj.getAge()} year old`)
    }
}

obj.setName('Olena')
obj.setLastName('Germak')
obj.setAge('30')
obj.hello()
