const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTododById} = require("../controllers/getTodo");
const {updateTodo}=require('../controllers/updataTodo');
//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTododById);
router.put("updateTodo/:id",updateTodo);

module.exports = router;