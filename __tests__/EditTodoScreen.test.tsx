import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { EditTodoScreen } from '../screens/EditTodoScreen';

// Mock the navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

// Mock the TodoContext
const mockTodos = [
  {
    id: '1',
    name: 'Test Todo 1',
    description: 'Test Description 1',
    isCompleted: false,
  },
  {
    id: '2',
    name: 'Test Todo 2',
    description: 'Test Description 2',
    isCompleted: true,
  },
];

const mockContextValue = {
  todos: mockTodos,
  toggleTodo: jest.fn(),
  deleteTodo: jest.fn(),
  addTodo: jest.fn(),
  updateTodo: jest.fn(),
};

// Mock the useTodos hook
jest.mock('../contexts/TodoContext', () => ({
  useTodos: () => mockContextValue,
}));

// Mock ViewWrapper
jest.mock('../common/ViewWrapper', () => {
  return function MockViewWrapper({ title }: { title: string }) {
    return <div>{title}</div>;
  };
});

// Mock SafeAreaView
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: 'SafeAreaView',
}));

describe('EditTodoScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('1. Renders the screen for adding new todo', () => {
    const route = { params: {} };
    const { getByText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    expect(getByText('Add Todo')).toBeTruthy();
  });

  test('2. Shows "Add Todo" title for new todo', () => {
    const route = { params: {} };
    const { getByText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    expect(getByText('Add Todo')).toBeTruthy();
  });

  test('3. Shows "Update Todo" title for existing todo', () => {
    const route = { params: { id: '1' } };
    const { getByText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    expect(getByText('Update Todo')).toBeTruthy();
  });

  test('4. Renders todo name input field', () => {
    const route = { params: {} };
    const { getByPlaceholderText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    expect(getByPlaceholderText('Todo Name')).toBeTruthy();
  });

  test('5. Renders todo description input field', () => {
    const route = { params: {} };
    const { getByPlaceholderText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    expect(getByPlaceholderText('Todo Description')).toBeTruthy();
  });

  test('6. Renders save button', () => {
    const route = { params: {} };
    const { getByText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    expect(getByText('Add Todo')).toBeTruthy();
  });

  test('7. Shows "Update Todo" button for existing todo', () => {
    const route = { params: { id: '1' } };
    const { getByText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    expect(getByText('Update Todo')).toBeTruthy();
  });

  test('8. Updates todo name when typing in name field', () => {
    const route = { params: {} };
    const { getByPlaceholderText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    const nameInput = getByPlaceholderText('Todo Name');
    fireEvent.changeText(nameInput, 'New Todo Name');
    
    expect(nameInput.props.value).toBe('New Todo Name');
  });

  test('9. Updates todo description when typing in description field', () => {
    const route = { params: {} };
    const { getByPlaceholderText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    const descriptionInput = getByPlaceholderText('Todo Description');
    fireEvent.changeText(descriptionInput, 'New Description');
    
    expect(descriptionInput.props.value).toBe('New Description');
  });

  test('10. Calls addTodo when saving new todo', () => {
    const route = { params: {} };
    const { getByText, getByPlaceholderText } = render(
      <EditTodoScreen navigation={mockNavigation} route={route} />
    );
    
    // Fill in the form
    const nameInput = getByPlaceholderText('Todo Name');
    const descriptionInput = getByPlaceholderText('Todo Description');
    fireEvent.changeText(nameInput, 'New Todo');
    fireEvent.changeText(descriptionInput, 'New Description');
    
    // Press save button
    const saveButton = getByText('Add Todo');
    fireEvent.press(saveButton);
    
    expect(mockContextValue.addTodo).toHaveBeenCalledWith('New Todo', 'New Description');
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
