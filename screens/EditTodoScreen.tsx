import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Todo } from './TodosScreen';
import { useTodos } from '../contexts/TodoContext';
import ViewWrapper from '../common/ViewWrapper';

interface EditTodoScreenProps {
  navigation: any;
  route: {
    params?: {
      id?: string;
    };
  };
}

export const EditTodoScreen: React.FC<EditTodoScreenProps> = ({
  navigation,
  route,
}) => {
  const { todos, updateTodo, addTodo } = useTodos();
  const [editedTodo, setEditedTodo] = useState<Todo>({
    id: '',
    name: '',
    description: '',
    isCompleted: false,
  });
  const { id } = route.params || {};
  const foundTodo = todos.find(todo => todo.id === id);

  useEffect(() => {
    if (foundTodo) {
      setEditedTodo(foundTodo);
    }
  }, [foundTodo]);

  const handleSave = () => {
    if (id) {
      updateTodo(id, editedTodo.name, editedTodo.description);
    } else {
      addTodo(editedTodo.name, editedTodo.description);
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ViewWrapper title={id ? 'Update Todo' : 'Add Todo'} />
      <Text style={styles.label}>Todo Name</Text>
      <TextInput
        style={[styles.inputContainer, styles.textInput]}
        placeholder="Todo Name"
        value={editedTodo.name}
        onChangeText={text => setEditedTodo({ ...editedTodo, name: text })}
      />
      <Text style={styles.label}>Todo Description</Text>
      <TextInput
        style={[styles.inputContainer, styles.descriptionContainer]}
        placeholder="Todo Description"
        value={editedTodo.description}
        onChangeText={text =>
          setEditedTodo({ ...editedTodo, description: text })
        }
        multiline={true}
        maxLength={100}
      />
      <Text style={styles.descriptionLength}>
        {editedTodo.description?.length || 0}/100
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>{id ? 'Update Todo' : 'Add Todo'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  inputContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  textInput: {
    marginBottom: 20,
  },
  descriptionContainer: {
    height: 80,
  },
  label: {
    fontSize: 15,
    fontWeight: 'semibold',
    marginBottom: 10,
  },
  descriptionLength: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'right',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
