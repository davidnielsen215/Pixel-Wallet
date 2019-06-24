const express = require("express");
const expenseRouter = express.Router();
const Expense = require("../models/expense");

expenseRouter.get("/", (req, res, next) => {

    // Addition: include filtering criteria to the find so that it only finds 
    // Expense items with a 'user' property with the current user's id.
    Expense.find({user: req.user._id}, (err, expenses) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        return res.send(expenses);
    });
});

expenseRouter.post("/", (req, res, next) => {
    const expense = new Expense(req.body);

    // Addition: include the user property to this new expense
    expense.user = req.user._id;
    expense.save(function (err, newExpense) {
        if (err) {
            res.status(500);
            return next(err);
        };
        return res.status(201).send(newExpense);
    });
});

expenseRouter.get("/:expenseId", (req, res, next) => {

    // Addition: Change to findOne and include the search criteria for users
    Expense.findOne({_id: req.params.expenseId, user: req.user._id}, (err, expense) => {
        if (err) {
            res.status(500);
            return next(err);
        };
        if (!expense) {
            res.status(404);
            return next(new Error("No expenses item found."));
        };
        return res.send(expense);
    });
});

expenseRouter.put("/:expenseId", (req, res, next) => {

    // Addition: Change to findOneAndUpdate and include the query for users
    Expense.findOneAndUpdate(
        // Updated query to include user
        {_id: req.params.expenseId, user: req.user._id},
        req.body,
        {new: true},
        (err, expense) => {
            if (err) {
                res.status(500)
                return next(err);
            };
            return res.send(expense);
        }
    );
});

expenseRouter.delete("/:expenseId", (req, res, next) => {

    // Addition: Change to findOneAndRemove and include the search criteria for users
    Expense.findOneAndRemove({_id: req.params.expenseId, user: req.user._id}, (err, expense) => {
        if (err) {
            res.status(500);
            return next(err);
        }
        return res.send(expense);
    });
});

module.exports = expenseRouter;