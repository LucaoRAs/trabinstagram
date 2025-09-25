import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../theme';

export default function Titulo() {
  return (
    <View style={styles.container}>
      {/* Logo do Instagram vindo da pasta public */}
      <Image 
        source={{ uri: 'images/IG logo.png' }} 
        style={styles.logo} 
        resizeMode="contain"
      />

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
  logo: {
    width: 120,
    height: 40,
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
