const express = require("express");
const app = express();
const carDB = require("./db/cars");
const bodyParser = require("body-parser");
const { ResData } = require("./modules/classes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/cars", async (req, res) => {
  const [carId] = await carDB.createCar(req.body);
  const result = await carDB.getCarById(carId);
  const resData = new ResData("New car added", result, 201);
  res.status(201).json(resData);
});

app.get("/cars", async (req, res) => {
  const result = await carDB.getAllCars();
  if (result.length == 0) {
    const resData = new ResData("There havn't been car data", null, 400);
    return res.status(400).json(resData);
  }
  const resData = new ResData("All cars were given", result, 200);
  res.status(200).json(resData);
});

app.get("/cars/:carId", async (req, res) => {
  const carId = req.params.carId;
  const result = await carDB.getCarById(carId);
  if (result.length == 0) {
    const resData = new ResData("There isn't the car with this id", null, 400);
    return res.status(400).json(resData);
  }
  const resData = new ResData(
    `The car with id=${carId} was given`,
    result,
    200
  );
  res.status(200).json(resData);
});

app.patch("/cars/:carId", async (req, res) => {
  const carId = req.params.carId;
  const updatedCarsCount = await carDB.updateCar(carId, req.body);
  //   console.log(updatedCarsCount, 'cars updated');
  if (updatedCarsCount == 0) {
    const resData = new ResData("There isn't the car with this id", null, 400);
    return res.status(400).json(resData);
  }
  const result = await carDB.getCarById(carId);
  const resData = new ResData(
    `The car with id=${carId} has been updated`,
    result,
    200
  );
  res.status(200).json(resData);
});

app.delete("/cars/:carId", async (req, res) => {
  const carId = req.params.carId;
  const result = await carDB.getCarById(carId);
  const deletedCarsCount = await carDB.deleteCar(req.params.carId);
  //   console.log(deletedCarsCount, 'cars deleted');
  if (deletedCarsCount == 0) {
    const resData = new ResData("There isn't the car with this id", null, 400);
    return res.status(400).json(resData);
  }
  const resData = new ResData(
    `The car with id=${carId} has been deleted`,
    result,
    200
  );
  res.status(200).json(resData);
});

app.all("*", (req, res) => {
  const resData = new ResData("Not Found Error", null, 404);
  res.status(404).json({ message: "Page not found" });
});

const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
