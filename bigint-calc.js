// Define a class for Arbitrary Precision Integer
class BigIntCalc {
    constructor(value = "0") {
      this.value = BigIntCalc.validateInput(value);
    }
  
    // Validate the input to ensure it is a valid number
    static validateInput(value) {
      if (!/^-?\d+$/.test(value)) {
        throw new Error("Invalid number format. Only integers are supported.");
      }
      return value;
    }
  
    // Addition
    add(other) {
      const result = (BigInt(this.value) + BigInt(other.value)).toString();
      return new BigIntCalc(result);
    }
  
    // Subtraction
    subtract(other) {
      const result = (BigInt(this.value) - BigInt(other.value)).toString();
      return new BigIntCalc(result);
    }
  
    // Multiplication
    multiply(other) {
      const result = (BigInt(this.value) * BigInt(other.value)).toString();
      return new BigIntCalc(result);
    }
  
    // Division
    divide(other) {
      if (other.value === "0") throw new Error("Division by zero is not allowed.");
      const result = (BigInt(this.value) / BigInt(other.value)).toString();
      return new BigIntCalc(result);
    }
  
    // Modulo
    modulo(other) {
      if (other.value === "0") throw new Error("Modulo by zero is not allowed.");
      const result = (BigInt(this.value) % BigInt(other.value)).toString();
      return new BigIntCalc(result);
    }
  
    // Exponentiation
    power(exp) {
      if (!/^\d+$/.test(exp.value) || exp.value.startsWith("-")) {
        throw new Error("Exponent must be a non-negative integer.");
      }
      const result = (BigInt(this.value) ** BigInt(exp.value)).toString();
      return new BigIntCalc(result);
    }
  
    // Factorial
    factorial() {
      if (this.value.startsWith("-")) throw new Error("Factorial is not defined for negative numbers.");
      let result = BigInt(1);
      for (let i = BigInt(1); i <= BigInt(this.value); i++) {
        result *= i;
      }
      return new BigIntCalc(result.toString());
    }
  }
  
  // REPL (Read-Eval-Print Loop)
  function startREPL() {
    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    console.log("Welcome to Alex's Arbitrary Precision Integer Calculator!");
    console.log("Supported operations: add, subtract, multiply, divide, modulo, power, factorial, exit");
    
    rl.setPrompt("> ");
    rl.prompt();
  
    rl.on("line", (line) => {
      const input = line.trim().split(" ");
      const command = input[0];
      try {
        switch (command) {
          case "add":
            console.log(
              new BigIntCalc(input[1]).add(new BigIntCalc(input[2])).value
            );
            break;
          case "subtract":
            console.log(
              new BigIntCalc(input[1]).subtract(new BigIntCalc(input[2])).value
            );
            break;
          case "multiply":
            console.log(
              new BigIntCalc(input[1]).multiply(new BigIntCalc(input[2])).value
            );
            break;
          case "divide":
            console.log(
              new BigIntCalc(input[1]).divide(new BigIntCalc(input[2])).value
            );
            break;
          case "modulo":
            console.log(
              new BigIntCalc(input[1]).modulo(new BigIntCalc(input[2])).value
            );
            break;
          case "power":
            console.log(
              new BigIntCalc(input[1]).power(new BigIntCalc(input[2])).value
            );
            break;
          case "factorial":
            console.log(new BigIntCalc(input[1]).factorial().value);
            break;
          case "exit":
            console.log("Goodbye!");
            rl.close();
            break;
          default:
            console.log("Unknown command. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
      rl.prompt();
    });
  
    rl.on("close", () => process.exit(0));
  }
  
  // Start the REPL
  startREPL();
  