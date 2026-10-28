const express = require("express");
const { dirname } = require("path");
const morgan = require("morgan");

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

const AppError = require('./utils/appError');

app.use(morgan("dev"));


app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// MIDDLEWARES //
app.use((req,res,next) => {
    console.log("Hwllow from the mw.");
    next();
});

app.use((req,res,next) => {
    req.requestTime = new Date().toISOString();
    next();
})

/////////////////////////////////////////////////////////////

// app.get("/api/v1/tours", getAllTours);
// app.get('/api/v1/tours/:id', getSelectedTour);
// app.post("/api/v1/tours", createTour);
// app.patch("api/v1/tours/:id", updateTour);
// app.delete('api/v1/tours/:id', deleteTour);

///////////////////////////////////////////////////////////////



app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

app.all('/{*splat}', (req,res,next) => {

    next(new AppError(`Can't find ${req.orignialUrl} on this server`, 404));
});


app.use((err, req,res,next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error'
    
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
})

module.exports = app;