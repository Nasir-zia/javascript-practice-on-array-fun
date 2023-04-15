var a= 0;
var b= 1;
console.log(a);
console.log(b);

for(var i=0; i<=10; i++){
    var temp =a+b;
    console.log(temp);
    a=b;
    b=temp;

}
