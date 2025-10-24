import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Todo } from '../screens/TodosScreen';

interface TodoContextType {
  todos: Todo[];
  addTodo: (name: string, description: string) => void;
  updateTodo: (id: string, name: string, description: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      name: 'Learn React Native',
      description: 'Complete the React Native tutorial',
      isCompleted: false,
    },
    {
      id: '2',
      name: 'Build Todo App',
      description: 'Create a simple todo list application',
      isCompleted: true,
    },
  ]);

  const addTodo = (name: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      name,
      description,
      isCompleted: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const updateTodo = (id: string, name: string, description: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, name, description } : todo,
      ),
    );
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const value: TodoContextType = {
    todos,
    addTodo,
    updateTodo,
    toggleTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
