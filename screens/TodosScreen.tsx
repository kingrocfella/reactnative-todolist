import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Trash2, Edit2, CheckCircle, Plus } from 'react-native-feather';
import { useTodos } from '../contexts/TodoContext';

export interface Todo {
  id: string;
  name: string;
  isCompleted: boolean;
  description: string;
}

export const TodosScreen = ({ navigation }: { navigation: any }) => {
  const { todos, toggleTodo, deleteTodo } = useTodos();

  const handleEditTodo = (item: Todo) => {
    navigation.navigate('EditTodoScreen', { ...item });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerView}>
          <Text style={styles.titleText}>Todo List</Text>
          <TouchableOpacity
            testID="plus-button"
            onPress={() => navigation.navigate('EditTodoScreen')}
          >
            <Plus stroke="green" fill="#fff" width={30} height={30} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View testID={`todo-item-${item.id}`} style={styles.todoViewContainer}>
              {item.isCompleted && (
                <View testID={`check-circle-${item.id}`} style={styles.todoViewCheckCircle}>
                  <CheckCircle
                    stroke="green"
                    fill="#fff"
                    width={20}
                    height={20}
                  />
                </View>
              )}
              <View style={styles.todoItemContainer}>
                <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                  <Text
                    style={
                      item.isCompleted
                        ? [styles.todoItemText, styles.todoItemTextCompleted]
                        : styles.todoItemText
                    }
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={
                      item.isCompleted
                        ? [
                            styles.todoItemDescription,
                            styles.todoItemTextCompleted,
                          ]
                        : styles.todoItemDescription
                    }
                  >
                    {item.description}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.todoViewIcons}>
                <Edit2
                  testID={`edit-button-${item.id}`}
                  onPress={() => handleEditTodo(item)}
                  stroke={item.isCompleted ? 'gray' : 'blue'}
                  fill="#fff"
                  width={20}
                  height={20}
                  disabled={item.isCompleted}
                />
                <Trash2
                  testID={`delete-button-${item.id}`}
                  onPress={() => deleteTodo(item.id)}
                  stroke={item.isCompleted ? 'gray' : 'red'}
                  fill="#fff"
                  width={20}
                  height={20}
                  disabled={item.isCompleted}
                />
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  todoItemText: {
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: 'semibold',
  },
  todoItemTextCompleted: {
    textDecorationLine: 'line-through',
  },
  todoItemDescription: {
    paddingVertical: 5,
    color: 'gray',
  },
  todoItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '75%',
  },
  todoViewIcons: {
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    padding: 10,
  },
  todoViewCheckCircle: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  headerView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
