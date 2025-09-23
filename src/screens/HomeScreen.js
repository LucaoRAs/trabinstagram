import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Titulo from '../components/titulo';
import Menu from '../components/menu';
import { colors } from '../theme';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Titulo />
      <View style={styles.content}>
        <Menu />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
});

