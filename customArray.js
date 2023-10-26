function CustomArray() {
    // Create the size property based on the number of arguments
    this.size = arguments.length;
  
    // Add key-value pairs to the Array object
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
  }
  
  // Define the custom methods using the prototype property
  CustomArray.prototype.push = function (element) {
    // Add an element at the end
    this[this.size] = element;
    this.size++;
  };
  
  CustomArray.prototype.pop = function () {
    // Remove an element from the end
    if (this.size > 0) {
      delete this[this.size - 1];
      this.size--;
    }
  };
  
  CustomArray.prototype.top = function () {
    // Return the element at the last index
    if (this.size > 0) {
      return this[this.size - 1];
    }
  };
  
  CustomArray.prototype.print = function () {
    // Print the elements in a single line
    let elements = [];
    for (let i = 0; i < this.size; i++) {
      elements.push(this[i]);
    }
    console.log('[' + elements.join(',') + ']');
  };
  
  CustomArray.prototype.printReverse = function () {
    // Print the elements in a single line in reverse order
    let elements = [];
    for (let i = this.size - 1; i >= 0; i--) {
      elements.push(this[i]);
    }
    console.log('[' + elements.join(',') + ']');
  };
  
  CustomArray.prototype.getSize = function () {
    // Return the length of the stack
    return this.size;
  };
  
  // Example usage:
  const myArray = new CustomArray(1, 2, 3);
  myArray.push(4);
  myArray.pop();
  myArray.print(); // Should print [1,2,3]
  myArray.printReverse(); // Should print [3,2,1]
  console.log(myArray.getSize()); // Should return 3
  console.log(myArray.top()); // Should return 3