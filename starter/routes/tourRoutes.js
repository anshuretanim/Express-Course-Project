const express = require("express");
const tourController = require('../controllers/tourController');

const tourRouter = express.Router();

tourRouter.param('id', tourController.checkId);

tourRouter
.route("/")
.get(tourController.getAllTours)
.post(tourController.checkBody ,tourController.createTour);

tourRouter
  .route("/:id")
  .get(tourController.getSelectedTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = tourRouter;
