import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Story from './story';
import { storiesData } from '../data';
import { colors, spacing } from '../theme';

export default function Stories() {
  const [stories, setStories] = useState(storiesData);

  const handleStoryPress = (story) => {
    if (!story.isOwn && !story.isViewed) {
      setStories(prevStories => 
        prevStories.map(s => 
          s.id === story.id ? { ...s, isViewed: true } : s
        )
      );
    }
  };

  const renderStory = ({ item }) => (
    <Story story={item} onPress={handleStoryPress} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={renderStory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  contentContainer: {
    paddingHorizontal: spacing.lg,
  },
});

