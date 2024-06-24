// Import necessary modules and functions
const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const {
    
    handleSign_Up
} = require('../controllers/user');
// Middleware for parsing request body
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));

// // Routes
// router.get("/", handleIndexFile);
// router.get("/sign_up", handleSignUp);
// router.get("/forgot", handleForgotPassword);
// router.get("/emailverification", handleemailverification);

router.post("/", handleSign_Up);



module.exports = router;