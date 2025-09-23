import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { colors, spacing, typography } from '../theme';

export default function Story({ story, onPress }) {
  const getBorderColor = () => {
    if (story.isOwn) {
      return colors.border;
    }
    if (story.isViewed) {
      return colors.border;
    }
    return colors.storyGradient.start;
  };

  const getBorderWidth = () => {
    if (story.isOwn || story.isViewed) {
      return 2;
    }
    return 3;
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => onPress && onPress(story)}
      activeOpacity={0.7}
    >
      <View style={[
        styles.avatarContainer,
        { 
          borderColor: getBorderColor(),
          borderWidth: getBorderWidth(),
        }
      ]}>
        <Image source={{ uri: story.avatar }} style={styles.avatar} />
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {story.username}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: spacing.lg,
    width: 70,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  username: {
    ...typography.small,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
});

