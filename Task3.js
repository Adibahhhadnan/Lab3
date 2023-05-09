// task 1
let product = {
    productName: "Biscut",
    quantity: 50,
    price: 25.00
  };
  
  console.log("Product Name: " + product.productName);
  console.log("Quantity: " + product.quantity);
  console.log("Price: " + product.price);
  
  // task 2
  function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
  }
  
  Book.prototype.price = 20.50;
  
  let myBook = new Book("front-end for beginner", "Dr Rabiei");
  
  console.log("Book Name: " + myBook.bookName);
  console.log("Author Name: " + myBook.authorName);
  console.log("Price: " + myBook.price);
  
  
  //task 3
  let employee = {
    employeeName: "Rabiatul binti Sulaiman",
    employeeId: 16012,
    salary: 8000
  };
  
  let manager = Object.create(employee);
  manager.managerName = "Adibah";
  manager.branch = "Tanah Merah";
  
  console.log("Employee Name: " + manager.employeeName);
  console.log("Employee ID: " + manager.employeeId);
  console.log("Salary: " + manager.salary);
  console.log("Manager Name: " + manager.managerName);
  console.log("Branch: " + manager.branch);
  