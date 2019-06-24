const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const expressJwt = require("express-jwt");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/api/income", require("./routes/income"));
app.use("/api/expense", require("./routes/expense"));
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
});

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/user-auth-pixelwallet",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("database connection established");
    }
);

app.use("/expense", require("./routes/expense"));
app.use("/income", require("./routes/income"));
app.use("/auth", require("./routes/auth"));

app.use((err, req, res, next) => {
    console.error(err);
    return res.send({ message: err.message });
});

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
