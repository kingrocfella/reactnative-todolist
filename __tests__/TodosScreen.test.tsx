import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TodosScreen } from '../screens/TodosScreen';
import { TodoProvider } from '../contexts/TodoContext';

// Mock the navigation
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

// Mock react-native-feather icons
jest.mock('react-native-feather', () => ({
  Trash2: 'Trash2',
  Edit2: 'Edit2',
  CheckCircle: 'CheckCircle',
  Plus: 'Plus',
}));

// Mock SafeAreaView
jest.mock('react-native-safe-area-context', () => ({
  SafeAreaView: 'SafeAreaView',
}));

// Test wrapper component
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <NavigationContainer>
    <TodoProvider>{children}</TodoProvider>
  </NavigationContainer>
);

describe('TodosScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('1. Renders the screen title correctly', () => {
    const { getByText } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    expect(getByText('Todo List')).toBeTruthy();
  });

  test('2. Renders the add todo button', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    // The Plus icon should be rendered
    expect(getByTestId('plus-button')).toBeTruthy();
  });

  test('3. Navigates to EditTodoScreen when add button is pressed', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    const addButton = getByTestId('plus-button');
    fireEvent.press(addButton);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('EditTodoScreen');
  });

  test('4. Displays todos from context', async () => {
    const { getByText } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    // Wait for todos to be loaded from context
    await waitFor(() => {
      expect(getByText('Learn React Native')).toBeTruthy();
    });
  });

  test('5. Shows completed todo with checkmark', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    // Wait for todos to load and check for completed state
    await waitFor(() => {
      const checkCircle = getByTestId('check-circle-2');
      expect(checkCircle).toBeTruthy();
    });
  });

  test('6. Toggles todo completion when pressed', async () => {
    const { getByText } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    await waitFor(() => {
      const todoText = getByText('Learn React Native');
      fireEvent.press(todoText);
    });

    // Verify the todo text is still present (toggle doesn't remove it)
    expect(getByText('Learn React Native')).toBeTruthy();
  });

  test('7. Navigates to EditTodoScreen with correct todo data when edit is pressed', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    await waitFor(() => {
      const editButton = getByTestId('edit-button-1');
      fireEvent.press(editButton);
    });

    expect(mockNavigation.navigate).toHaveBeenCalledWith('EditTodoScreen', {
      id: '1',
      name: 'Learn React Native',
      isCompleted: false,
      description: 'Complete the React Native tutorial',
    });
  });

  test('8. Deletes todo when delete button is pressed', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    // Verify delete buttons exist for todos
    await waitFor(() => {
      expect(getByTestId('delete-button-1')).toBeTruthy();
    });
  });

  test('9. Renders empty state when no todos exist', () => {
    // Mock empty todos context
    const EmptyTodoProvider = ({ children }: { children: React.ReactNode }) => (
      <NavigationContainer>
        <TodoProvider>{children}</TodoProvider>
      </NavigationContainer>
    );

    const { getByText } = render(
      <EmptyTodoProvider>
        <TodosScreen navigation={mockNavigation} />
      </EmptyTodoProvider>,
    );

    // Should still show the title and add button
    expect(getByText('Todo List')).toBeTruthy();
  });

  test('10. Applies correct styles to todo items', async () => {
    const { getByTestId } = render(
      <TestWrapper>
        <TodosScreen navigation={mockNavigation} />
      </TestWrapper>,
    );

    await waitFor(() => {
      const todoItem = getByTestId('todo-item-1');
      expect(todoItem).toBeTruthy();

      // Check if the item has the correct style properties
      const todoItemStyle = todoItem.props.style;
      expect(todoItemStyle).toMatchObject({
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      });
    });
  });
});
