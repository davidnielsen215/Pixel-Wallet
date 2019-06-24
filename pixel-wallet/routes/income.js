const express = require("express");
const incomeRouter = express.Router();
const Income = require("../models/income");

incomeRouter.get("/", (req, res, next) => {

    // Addition: include filtering criteria to the find so that it only finds 
    // Income items with a 'user' property with the current user's id.
    income.find({user: req.user._id}, (err, incomes) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        return res.send(incomes);
    });
});

incomeRouter.post("/", (req, res, next) => {
    const income = new Income(req.body);

    // Addition: include the user property to this new income
    income.user = req.user._id;
    income.save(function (err, newIncome) {
        if (err) {
            res.status(500);
            return next(err);
        };
        return res.status(201).send(newIncome);
    });
});

incomeRouter.get("/:incomeId", (req, res, next) => {

    // Addition: Change to findOne and include the search criteria for users
    Income.findOne({_id: req.params.IncomeId, user: req.user._id}, (err, income) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        if (!income) {
            res.status(404);
            return next(new Error("No incomes found."));
        };
        return res.send(income)
    });
});

incomeRouter.put("/:incomeId", (req, res, next) => {

    // Addition: Change to findOneAndUpdate and include the query for users
    Income.findOneAndUpdate(
        // Updated query to include user
        {_id: req.params.incomeId, user: req.user._id},
        req.body,
        {new: true},
        (err, income) => {
            if (err) {
                res.status(500)
                return next(err);
            };
            return res.send(income);
        }
    );
});

incomeRouter.delete("/:incomeId", (req, res, next) => {

    // Addition: Change to findOneAndRemove and include the search criteria for users
    Income.findOneAndRemove({_id: req.params.incomeId, user: req.user._id}, (err, income) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(income);
    });
});

module.exports = incomeRouter;