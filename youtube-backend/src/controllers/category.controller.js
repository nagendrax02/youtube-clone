const Category = require("../models/category.old.model");
const ErrorResponse = require("../utils/errorResponse.util");
const asyncHandler = require("../middleware/asyncHandler.middleware");



// @desc get categories
//@route  GET /categories
module.exports.getCategories = asyncHandler(async (req, res, next) => {
  const categories = await Category.find().lean().exec();
  return res.status(200).json({success: true, data: categories});

});

// @desc get categories
//@route  GET/categories/:id
module.exports.getCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {

    return next(new ErrorResponse(`NO category found with id ${req.params.id}`, 404));
    // return res.status(200).json({success:false, error:"invalid id"})
  }
  return res.status(200).json({success: true, category: category});

});

//create category
module.exports.createCategories = asyncHandler(async (req, res, next) => {

  const category = await Category.create(req.body);
  return res.status(200).json({success: true, data: category});
});

//update category
//PUT categories/:id
module.exports.updateCategory = asyncHandler(async (req, res, next) => {

  const category = await Category.findByIdAndUpdate(req.params.id, req.body);
  if (!category) {

    return next(new ErrorResponse(`NO category found with id ${req.params.id}`, 404));
    // return res.status(200).json({success:false, error:"invalid id"})
  }
  return res.status(200).json({success: true, data: category});

});

//Find by ID and delete
// DELETE /categories/:id
module.exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {

    return next(new ErrorResponse(`NO category found with id ${req.params.id}`, 404));
    // return res.status(200).json({success:false, error:"invalid id"})
  }
  return res.status(200).json({success: true, data: category});

});
