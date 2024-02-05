import { Component } from '@angular/core';

@Component({
  selector: 'app-arrayofobj',
  standalone: true,
  imports: [],
  templateUrl: './arrayofobj.component.html',
  styleUrl: './arrayofobj.component.scss'
})
export class ArrayofobjComponent {


 araaryofobj() {
  // 1. Create an empty array called "cars".
let cars = [];

// 2. Add three car objects to the "cars" array.
let car1 = {
  make: "Toyota",
  model: "Camry",
  year: 2018
};
let car2 = {
  make: "Toyota",
  model: "Camry",
  year: 2018
};
let car3 = {
  make: "Toyota",
  model: "Camry",
  year: 2018
};
cars.push(car1, car2, car3);

// 3. Remove the first car object from the "cars" array.
cars.shift();

// 4. Add a new car object to the "cars" array.
let car4 = {
  make: "Honda",
  model: "Civic",
  year: 2020
};
cars.push(car4);

// 5. Update the "model" property of the second car object in the array to "Accord".
if (cars.length >= 2) {
  cars[1].model = "Accord";
}

// 6. Print the final "cars" array.
console.log(cars);
}

}
