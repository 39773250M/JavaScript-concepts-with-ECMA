import { Component } from '@angular/core';

@Component({
  selector: 'app-array-operation',
  standalone: true,
  imports: [],
  templateUrl: './array-operation.component.html',
  styleUrl: './array-operation.component.scss'
})
export class ArrayOperationComponent {

   arrayoperations() {
    let fruits = [];

// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
fruits.push("apple", "banana", "orange");

// 3. Remove the first fruit from the array.
fruits.shift();

// 4. Add "grape" to the end of the array.
fruits.push("grape");

// 5. Update the second fruit in the array to "pear".
fruits[1] = "pear";

// 6. Print the final "fruits" array after performing the above operations.
console.log(fruits);
  }
}
