let a=100;
let b=100;

console.log("the value is",a+b);
console.log("the value is",a-b);
console.log("the value is",a*b);
console.log("the value is",a/b);
console.log("the value is",a%b);

b=100;
console.log("the value of a",a);//100
console.log("the value of b",b);//100

console.log("the value of a after a++",a++);//post incremenet//100
console.log("the value of a in nextline",a);//101
console.log("the value of b after ++b",++b);//101//pre increment
console.log("the value of b in next line",b);//101

console.log("the value of a after a--",a--);//post decrement//101
console.log("the value of a in nextline",a);//100
console.log("the value of b after --b", --b);//100//pre decrement
console.log("the value of b in next line", b);//100