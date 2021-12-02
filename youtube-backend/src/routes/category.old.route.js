const express = require("express");
const {getCategories, getCategory, updateCategory, createCategories, deleteCategory} = require("../controllers/category.controller");


const router = express.Router();

router
     .route("/",)
     .get(getCategories)
     .post(createCategories);


router
     .route('/:id')
     .get(getCategory).put(updateCategory).delete(deleteCategory);


module.exports = router;