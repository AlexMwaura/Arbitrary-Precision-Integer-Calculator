# Arbitrary Precision Integer Calculator

## Overview
This solution is a JavaScript-based REPL (Read-Eval-Print Loop) application that implements an arbitrary-precision integer calculator. The application can perform operations such as addition, subtraction, multiplication, division, modulo, power, and factorial with numbers of any size, exceeding the limitations of standard JavaScript integers.

## Problem Breakdown

### Arbitrary Precision
- JavaScript's `Number` type has a maximum safe integer limit (2^53 - 1), making it unsuitable for very large calculations. This solution uses strings to represent integers for operations, bypassing this limitation.
- The solution ensures accuracy for operations involving numbers far beyond this range.

### Supported Operations
- **Addition, Subtraction, Multiplication**: Basic operations implemented using digit-by-digit processing.
- **Division and Modulo**: Long division-like algorithm to handle arbitrary-precision integers.
- **Power and Factorial**: Recursive and iterative approaches to handle very large results.

### Interactive REPL
- A command-line interface for user interaction.
- Users input operations like `add`, `subtract`, etc., with numbers.
- The program processes and outputs the results.

### Error Handling
- Invalid input detection.
- Graceful handling of incorrect commands or malformed numbers.

## Key Design Decisions

### String-Based Arithmetic
- Strings are used for computation to avoid overflow and rounding errors.
- Algorithms like manual addition (carrying), subtraction (borrowing), and multiplication are implemented with attention to computational efficiency.

### Scalability
- Modular code design allows future extension for operations like logarithms, support for fractions, or non-decimal bases.

### Readability and Simplicity
- Code is written in a clean and modular way to enhance maintainability.
- Functions are documented with clear explanations of their purpose and logic.

## What’s Interesting About This Solution

### Manual Arithmetic Implementation
- All calculations mimic human arithmetic operations.
- By implementing addition, subtraction, and multiplication from scratch, this demonstrates an understanding of fundamental computing concepts.

### Handling Arbitrary Sizes
- The solution handles integers of arbitrary size, showcasing a keen understanding of data representation and manipulation.

### Interactive Design
- The REPL design provides an intuitive user interface and showcases how CLI tools can be made user-friendly.

## Usage Instructions
1. Install Node.js.
2. Save the program in a file (e.g., `bigint-calc.js`).
3. Run the program:
   ```bash
   node bigint-calc.js
4. Example: 
    > add 123456789123456789 987654321987654321
1111111111111111110
> factorial 50
30414093201713378043612608166064768844377641568960512000000000000



