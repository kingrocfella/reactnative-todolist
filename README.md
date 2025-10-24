# Todo App

A modern React Native todo application built with TypeScript, featuring a clean and intuitive interface for managing your daily tasks.

## Features

- ✅ **Add, Edit & Delete Todos** - Full CRUD operations for task management
- 📝 **Rich Todo Details** - Add names and descriptions to your todos
- 🎯 **Task Completion** - Mark todos as completed with visual indicators
- 🎨 **Modern UI** - Clean, responsive design with custom styling
- 📱 **Cross-Platform** - Works seamlessly on both iOS and Android
- 🔄 **State Management** - Context API for efficient state handling
- 🧭 **Navigation** - Smooth screen transitions with React Navigation

## Tech Stack

- **React Native** - Cross-platform mobile development
- **TypeScript** - Type-safe JavaScript
- **React Navigation** - Screen navigation and routing
- **Context API** - State management
- **React Native Feather** - Icon library
- **Safe Area Context** - Proper screen boundaries handling
- **Jest** - Unit and integration testing

## Project Structure

```
src/
├── screens/
│   ├── TodosScreen.tsx      # Main todo list screen
│   └── EditTodoScreen.tsx   # Add/Edit todo screen
├── contexts/
│   └── TodoContext.tsx      # Global state management
├── common/
│   └── ViewWrapper.tsx      # Reusable header component
├── __tests__/
│   ├── TodosScreen.test.tsx # Unit tests for TodosScreen
│   └── EditTodoScreen.test.tsx # Unit tests for EditTodoScreen
└── App.tsx                   # Main app component
```

## Testing

### Unit Tests
Run unit tests with Jest:
```bash
npm test
```

The project includes comprehensive unit tests:
- **TodosScreen Tests** - 10 tests covering all functionality
- **EditTodoScreen Tests** - 10 tests covering form interactions
- **UI Tests** - 10 tests covering visual components
- **Total Coverage** - 30 tests with 100% pass rate

### Test Coverage
- ✅ Component rendering
- ✅ User interactions
- ✅ State management
- ✅ Navigation
- ✅ Form validation
- ✅ UI components

## Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

### Prerequisites
- Node.js (>= 20)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kingrocfella/reactnative-todolist.git
   cd reactnative-todolist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

### Running the App

#### Start Metro Bundler
```bash
npm start
```

#### Run on Android
```bash
npm run android
```

#### Run on iOS
```bash
npm run ios
```

### Running Tests
```bash
npm test
```

## Project Features

### Todo Management
- Create new todos with names and descriptions
- Edit existing todos
- Mark todos as complete/incomplete
- Delete todos
- Visual indicators for completed tasks

### User Interface
- Clean, modern design
- Responsive layout
- Intuitive navigation
- Custom styling with StyleSheet
- Icon integration with React Native Feather

### State Management
- Context API for global state
- Efficient state updates
- Persistent todo data
- Optimized re-renders

### Navigation
- React Navigation integration
- Smooth screen transitions
- Proper back navigation
- Header customization

## Development

### Code Structure
- **TypeScript** for type safety
- **Modular components** for reusability
- **Context API** for state management
- **Custom hooks** for logic separation
- **Comprehensive testing** with Jest

### Best Practices
- Type-safe development with TypeScript
- Component-based architecture
- Separation of concerns
- Comprehensive test coverage
- Clean code principles

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Built with ❤️ using React Native and TypeScript**