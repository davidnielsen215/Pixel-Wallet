const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const expenseSchema = new Schema({
    // Add a reference to the user to whom this expense belongs
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});


module.exports = mongoose.model("Expense", expenseSchema); 