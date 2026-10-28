const express = require("express");
const tourController = require('../controllers/tourController');

const tourRouter = express.Router();

router.param('id', (req,res,next, val) => {
    console.log(`Tour ID is ${val}`);
    next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`),
);

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
