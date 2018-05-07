var mysql = require("mysql"),
    inquirer = require('inquirer'),
    table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "1404517QPzm",
    database: "MOCK_DATA"
});

connection.connect(function(err){
    if(err) throw err;
    
});

//Function to start bamazon and display products
var displayProducts = function() {

    console.log("Welcome to Bamazon!");

    //Query DB
    connection.query("SELECT * FROM MOCK_DATA", function(err, res) {
        if (err) throw err;

        // Creates table
        var MOCK_DATA = new table({
            head: ["Item ID", "Product Name", "Department", "Price", "Stock Quantity"]
        });


        // Displays items 
        for (var i = 0; i < res.length; i++) {
            MOCK_DATA.push([res[i].item_id, res[i].product_name, res[i].department_name,
            res[i].price, res[i].stock_quantity
            ]);
        }
        console.log(MOCK_DATA.toString());

        // buy items
        inquirer.prompt([{
            name: "Item ID ",
            type: "input",
            message: "Chose a Item you would like to purchase?",
            validate: function(values ) {
                if (isNaN(values) === false) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        
        {
            name: "quantity",
            type: "input",
            message: "How many of this product would you like to buy?",
            validate: function(values) {
             if (isNaN(values) === false) {
                 return true;
             } else {
                 return false;
             }
            }
        }]).then(function(answers) {
            var chosenId = answers.itemId;
            var chosenQuantity = answers.quantity;
            // purchase(chosenId, chosenQuantity);
        });
    });
};

        displayProducts();


    
