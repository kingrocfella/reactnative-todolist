import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'react-native-feather';

export default function ViewWrapper({ title }: { title: string }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {navigation.canGoBack() && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft stroke="black" fill="black" width={24} height={24} />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});
