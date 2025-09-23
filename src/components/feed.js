import React, { useState } from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import Stories from './stories';
import Foto from './foto';
import { postsData } from '../data';
import { colors } from '../theme';

export default function Feed() {
  const [posts, setPosts] = useState(postsData);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simular refresh com timeout
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderPost = ({ item }) => (
    <Foto post={item} />
  );

  const ListHeaderComponent = () => <Stories />;

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={ListHeaderComponent}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={colors.accent}
        />
      }
      showsVerticalScrollIndicator={false}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

