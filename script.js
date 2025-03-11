/*function one(){
    var a=10;
    console.log(a);
    function two(){
        var b=20;
        function three(){
            var c=100;
        }
        
        three()
        console.log(c);
    }
    two()
}
one()*/
function abc(){
    const a=10;
    {
         a="hello";
        console.log(a);
    }
    console.log(a);
}
abc()
