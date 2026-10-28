const Tour = require("./../models/tourModel");

// exports.checkId = (req, res, next, val) => {
//     console.log(`tour id is: ${val}`);
//   if (req.params.id > Tour.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid id",
//     });
//   }
//   next();
// };  No longer needed.

// exports.checkBody = (req, res, next) => {
//   if (!req.body.name || !req.body.price) {
//     return res.status(400).json({
//       status: "fail",
//       message: "Missing price or name",
//     });
//   }
//   next();
// };

exports.getAllTours = async (req, res) => {
  // console.log(req.requestTime);
  try {
    const tours = await Tour.find(); // since we pass no parameters, it returns all of them.

    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//////////////////////////////////////////////////////////
exports.getSelectedTour = async (req, res) => {
  // console.log(req.params);
  // const id = req.params.id * 1;

  // const selectedtour = tours.find((el) => el.id === id);

  //   if (!selectedtour) {
  //     return res.status(404).json({
  //       status: "fail",
  //       message: "Invalid ID",
  //     });
  //   }
  // No longer required.

  try {
    const selectedTour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        selectedTour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
///////////////////////////////////////////////////////////

exports.createTour = async (req, res) => {
  // const newTour = new Tour({})
  // newTour.save() --OLD METHOD--

  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent.",
    });
  }
};

////////////////////////////////////////////////////////////

exports.updateTour = async (req, res) => {
  //   if (req.params.id * 1 > Tour.length) {
  //     res.status(200).json({
  //       status: "fail",
  //       message: "Invalid ID",
  //     });
  //   }
  // check is no longer required here now that we have the params middleware.

  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent.",
    });
  }
};

//////////////////////////////////////////////////////////////
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: "successfully deleted.",
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
