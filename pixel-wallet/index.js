const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const expressJwt = require("express-jwt");
const path = require("path")

app.use(express.static(path.join(__dirname, "client", "build")))
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({secret: process.env.SECRET}));
app.use("/api/finance", require("./routes/finance"));
app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        // express-jwt gives the 401 status to the err object for us
        res.status(err.status);
    }
    return res.send({ message: err.message });
});

mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/user-auth-pixelwallet",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("database connection established");
    }
);

app.use("/finance", require("./routes/finance"));
app.use("/auth", require("./routes/auth"));

app.use((err, req, res, next) => {
    console.error(err);
    return res.send({ message: err.message });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
