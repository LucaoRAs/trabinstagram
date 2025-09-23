import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

export default function Titulo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram</Text>
      
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} hitSlop={8}>
          <Ionicons name="add-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton} hitSlop={8}>
          <Ionicons name="heart-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton} hitSlop={8}>
          <Ionicons name="paper-plane-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'sans-serif-medium',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: spacing.lg,
    padding: spacing.xs,
  },
});
