myNum = 5;
myString = "Hello Universe";
myArr = [1,2,3,4];
myObj = { name:'Bill'};
anythingVariable = "Hey";
anythingVariable = 25; 
arrayOne = [true, false, true, true]; 
arrayTwo = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };
// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
