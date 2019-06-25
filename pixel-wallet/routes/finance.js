const express = require("express");
const financeRouter = express.Router();
const Finance = require("../models/finance");

financeRouter.get("/", (req, res, next) => {

    // Addition: include filtering criteria to the find so that it only finds 
    // Finance items with a 'user' property with the current user's id.
    Finance.find({user: req.user._id}, (err, finances) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        return res.send(finances);
    });
});

financeRouter.post("/", (req, res, next) => {
    const finance = new Finance(req.body);

    // Addition: include the user property to this new finance
    finance.user = req.user._id;
    finance.save(function (err, newFinance) {
        if (err) {
            res.status(500);
            return next(err);
        };
        return res.status(201).send(newFinance);
    });
});

financeRouter.get("/:financeId", (req, res, next) => {

    // Addition: Change to findOne and include the search criteria for users
    finance.findOne({_id: req.params.financeId, user: req.user._id}, (err, finance) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        if (!finance) {
            res.status(404);
            return next(new Error("No finances found."));
        };
        return res.send(finance);
    });
});

financeRouter.put("/:financeId", (req, res, next) => {

    // Addition: Change to findOneAndUpdate and include the query for users
    Finance.findOneAndUpdate(
        // Updated query to include user
        {_id: req.params.financeId, user: req.user._id},
        req.body,
        {new: true},
        (err, finance) => {
            if (err) {
                res.status(500)
                return next(err);
            };
            return res.send(finance);
        }
    );
});

financeRouter.delete("/:financeId", (req, res, next) => {

    // Addition: Change to findOneAndRemove and include the search criteria for users
    Finance.findOneAndRemove({_id: req.params.financeId, user: req.user._id}, (err, finance) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(finance);
    });
});

module.exports = financeRouter;