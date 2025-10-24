import * as React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodosScreen } from './screens/TodosScreen';
import { EditTodoScreen } from './screens/EditTodoScreen';
import { TodoProvider } from './contexts/TodoContext';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TodoProvider>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="TodosScreen">
            <Stack.Screen
              name="TodosScreen"
              component={TodosScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditTodoScreen"
              component={EditTodoScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </TodoProvider>
  );
}

export default App;
