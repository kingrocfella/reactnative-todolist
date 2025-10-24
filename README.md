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
└── App.tsx                   # Main app component
```

This is a [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see the todolist app running in the Android Emulator, iOS Simulator, or your connected device.
