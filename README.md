# Bank Alert - Financial Message React App

## Project Overview

This project is a minimalistic React application designed to display a financial message based on a user's available funds and a specified price. The application is structured with three main components:

### 1. App.js

- Main entry point rendering the `AppProps` component.
- Applies basic styling using Tailwind CSS classes to center the content on the screen.

### 2. AppProps.js

- Imports the `Message` component and a data object from `appData.js`.
- Calculates the `calculatedAmountLeft` based on the user's available money and the specified price.
- Passes the calculated values as props to the `Message` component.

### 3. Message.js

- Accepts props (`moneyAvailable`, `price`, `name`, `calculatedAmountLeft`) and renders a message.
- The message content varies based on whether the user has enough money to cover the specified price.
- Utilizes Tailwind CSS classes for styling, creating a simple and visually appealing message box.

### 4. appData.js

- Exports a data object containing information about the user's financial details, such as `moneyAvailable`, `price`, and `name`.

## Technologies Used

- **React:**
  - Used for building the user interface and creating reusable components.
- **Tailwind CSS:**
  - Employed for styling, providing a utility-first approach to quickly design and structure the components.
