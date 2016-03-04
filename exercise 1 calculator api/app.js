
app.use(bodyParser.urlencoded({extended: false}));

app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
    }

    req.calculator = calculatorRequest;

    next();
})

app.get("/api/calculator/*",function(req,res){
    var result = calcRes(req.calculator.operation, req.calculator.n1, req.calculator.n2);

    res.send("your Result is " + result);
})


app.listen(3000,function(){
    console.log("Server started, listening on: "+3000);
})


function calcRes (operation, number1, number2){
    switch (operation){
        case 'add':
            return number1 + number2;
            break;
        case 'substract':
            return number1 - number2;
            break;
        case 'multiply':
            return number1 * number2;
            break;
        case 'divide':
            return number1 / number2;
            break;
    }
};