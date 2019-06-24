const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const incomeSchema = new Schema({
    // Add a reference to the user to whom this Income belongs
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});


module.exports = mongoose.model("Income", incomeSchema); 