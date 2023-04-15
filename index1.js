
// delete from array
var array =["a","b","c","c","d"];
delete array [3];
console.log(array)

// reverse array
var string = ("hello")

var hello = string.split('').reverse();

console.log(hello);

// adding in array
var array =["a","b","c","c","d"];
 array.push("g");

 console.log(array)


// getter
 var private={

    Name : "Nasir",
    lastname :"zia" ,
    rollnumber : 27,
    get getName(){
        return this.Name
    }
    }
    console.log(private.getName)


// setter

 var private={

    Name : "Nasir",
    lastname :"zia" ,
    rollnumber : 27,
    set setName(n){
        this.Name=n
    }
    }
    private.setName = "Nasir zia"
    console.log(private)



     let a = ("hello world");
     let letter = a.charAt(1)
    console.log(letter);


    // integer
        var b =2;

        if(b%1==0){
            console.log("integer")
        }
        else{
            console.log("number is not a integer")
        }
        // function
    function param1(a,b){
            var c =  a+b;
            return c;
    }
            function param2(a,b){
                var c =  a+b;
                return c;
                   
            }
    console.log(param1(2,2))
    console.log(param2(3,5))