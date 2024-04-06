# TodoList
This is a simple todo list application built using React.js and styled with Tailwind CSS. The project adheres to the SOLID principles to ensure maintainability, flexibility, and scalability.

## SOLID Principles
### Single Responsibility Principle (SRP)
- Each component has a single responsibility:
  - AddTodo: Handles adding new todos.
  - TodoList: Manages the display and interaction of todos.
  - App: Manages todo state and passes data to child components.
### Open/Closed Principle (OCP)
- Components are open for extension but closed for modification:
  - New functionality (e.g., editing todos) is added by creating new components rather than modifying existing ones.
  - App can be extended with new features without altering its core functionality.
### Liskov Substitution Principle (LSP)
- Components can be substituted without affecting functionality:
  - AddTodo and TodoList can be replaced with alternative components for adding or displaying todos.
### Interface Segregation Principle (ISP)
- Components provide specific interfaces tailored to their use cases:
  - AddTodo and TodoList offer interfaces for adding/displaying todos, respectively.
  - App interacts with child components using their defined interfaces.
### Dependency Inversion Principle (DIP)
- High-level modules don't depend on low-level modules:
  - App injects dependencies (state, functions) into child components via props.
  - This decouples components, making them easier to reuse and test independently.

## Project Structure
The project is structured as follows:

    ```
    src/
    ├── components/
    │   ├── AddTodo.js     // Component for adding new todos
    │   └── TodoList.js    // Component for displaying todos
    └── App.js             // Main component managing todo state and rendering child components


## Getting Started

To run the todo list application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
