const fs = require("fs");
const Tour = require("./../models/tourModel");

exports.checkId = (req, res, next, val) => {
    console.log(`tour id is: ${val}`);
  if (req.params.id > Tour.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing price or name",
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: "success",
    results: Tour.length,
    data: {
      Tour,
    },
  });
};



//////////////////////////////////////////////////////////
exports.getSelectedTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const selectedtour = Tour.find((el) => el.id === id);

//   if (!selectedtour) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }
    // No longer required.  

res.status(200).json({
    status: "success",
    data: {
      selectedtour,
    },
  });
};
///////////////////////////////////////////////////////////

exports.createTour = (req, res) => {
  const newId = Tour[Tour.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  Tour.push(newTour);
  fs.writeFile();
};

////////////////////////////////////////////////////////////

exports.updateTour = (req, res) => {
//   if (req.params.id * 1 > Tour.length) {
//     res.status(200).json({
//       status: "fail",
//       message: "Invalid ID",
//     });
//   }
// check is no longer required here now that we have the params middleware.

  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated Tour Here>",
    },
  });
};

//////////////////////////////////////////////////////////////
exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
