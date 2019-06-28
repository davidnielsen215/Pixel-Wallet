const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const financeSchema = new Schema({
    // Add a reference to the user to whom this expense belongs
    title: {
        type: String,
        // required: true
    },
    amount: {
        type: String
    },
    type: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});


module.exports = mongoose.model("Finance", financeSchema); 