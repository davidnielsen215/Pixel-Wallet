const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const financeSchema = new Schema({
    // Add a reference to the user to whom this expense belongs
    expenses: {
        type: Array,
        required: true
    },
    incomes: {
        type: Array
    },
});


module.exports = mongoose.model("Finance", financeSchema); 