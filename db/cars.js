const knex = require("./knex");

function createCar(car) {
  return knex("cars").insert(car);
}

function getAllCars() {
  return knex.select("*").from("cars");
}

function getCarById(carId) {
  return knex.select("*").from("cars").where("id", carId);
}

function deleteCar(carId) {
  return knex("cars").where("id", carId).del();
}

function updateCar(id, car) {
  return knex("cars").where("id", id).update(car);
}

module.exports = {
  createCar,
  getAllCars,
  getCarById,
  deleteCar,
  updateCar,
};
