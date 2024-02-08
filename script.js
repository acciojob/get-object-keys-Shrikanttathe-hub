// Create the student object
const student = {
  name: 'John Doe'
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Example usage
const keysArray = student.getKeys();
console.log(keysArray);
