# COMMUNI Hometask - Infinite Number Board

This project is a React application that demonstrates an infinite scrolling number board, built as part of a task for COMMUNI. The board contains 10 columns and infinite rows, displaying all possible numbers with unique interactions and color-coded visuals based on number properties and user interactions.

## Project Overview

The infinite board has the following functionality:

1. **Infinite Scrolling**: The board infinitely scrolls to reveal numbers across multiple rows, with a fixed number of 10 columns.
2. **Color Coding**:
   - Prime numbers are highlighted with a **red background** and **white text**.
   - Non-prime numbers have a **white background** with **black text**.
3. **Interaction**:
   - When a user clicks on a number, all numbers that share a common divisor with the clicked number are highlighted with a **blue background** and **white text**.
   - Releasing the click resets the board colors back to their initial state.

## Technologies Used

- **React** with **TypeScript**
- **Vite** for fast development and build
- **Tailwind CSS** for styling
- **CSS Modules** for custom styles
- **Infinite Scroll Component** for handling infinite data loading

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Shaul1Kr/COMMUNI
   ```
2. Navigate into the project directory:
   ```bash
   cd client
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173` to view the application.

## Implementation Details

1. **Infinite Scroll**: The board starts with a defined initial number count, then fetches more numbers as the user scrolls.
2. **Prime Number Identification**: A helper function checks if each number is prime and updates styling accordingly.
3. **Common Divisor Check**: When a number is clicked, all numbers with a common divisor are highlighted in blue. The board resets upon releasing the click.
4. **Tailwind CSS for Styling**: Tailwind classes are applied to define colors and layout styles dynamically.

### Code Highlights

```typescript
const isPrime = useCallback((num: number) => {
  // Checks if a number is prime and updates the prime number set
}, []);

const hasCommonDivider = useCallback(
  (currentNumber: number, selectNumber: number | undefined) => {
    // Determines if two numbers share a common divisor
  },
  []
);
```

## Features

- **Infinite Scrolling Board**: Keeps loading numbers as the user scrolls.
- **Interactive Color Changes**: Clicking a number highlights related numbers with Tailwind CSS classes.
- **Optimized Prime Calculation**: A cache is used to optimize prime calculations for faster performance.

## Future Improvements

- Implement additional interaction features.
- Optimize performance for very large datasets.
- Add tests for prime checking and divisor functions.

## License

This project is licensed under the MIT License.
