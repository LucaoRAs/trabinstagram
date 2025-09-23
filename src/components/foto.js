import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, typography } from '../theme';

const { width } = Dimensions.get('window');

export default function Foto({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likesCount);
  const [showFullCaption, setShowFullCaption] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const toggleCaption = () => {
    setShowFullCaption(!showFullCaption);
  };

  const getDisplayCaption = () => {
    if (showFullCaption || post.caption.length <= 120) {
      return post.caption;
    }
    return post.caption.substring(0, 120) + '...';
  };

  const getLikesText = () => {
    if (likesCount === 0) {
      return 'Seja o primeiro a curtir';
    }
    if (likesCount === 1) {
      return `Curtido por ${post.likedBy}`;
    }
    return `Curtido por ${post.likedBy} e outras ${likesCount} pessoas`;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{post.user}</Text>
        </View>
        <TouchableOpacity hitSlop={8}>
          <Ionicons name="ellipsis-horizontal" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image 
        source={{ uri: post.image }} 
        style={styles.image}
        resizeMode="cover"
      />

      {/* Actions */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity 
            onPress={handleLike}
            hitSlop={8}
            accessibilityLabel={isLiked ? 'Descurtir' : 'Curtir'}
          >
            <Ionicons 
              name={isLiked ? "heart" : "heart-outline"} 
              size={24} 
              color={isLiked ? colors.liked : colors.primary} 
            />
          </TouchableOpacity>
          
          <TouchableOpacity hitSlop={8}>
            <Ionicons name="chatbubble-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
          
          <TouchableOpacity hitSlop={8}>
            <Ionicons name="paper-plane-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity hitSlop={8}>
          <Ionicons name="bookmark-outline" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <View style={styles.likes}>
        <Text style={styles.likesText}>{getLikesText()}</Text>
      </View>

      {/* Caption */}
      <View style={styles.caption}>
        <Text style={styles.captionText}>
          <Text style={styles.captionUsername}>{post.user} </Text>
          {getDisplayCaption()}
        </Text>
        {post.caption.length > 120 && (
          <TouchableOpacity onPress={toggleCaption}>
            <Text style={styles.moreText}>
              {showFullCaption ? 'menos' : 'mais'}
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Comments */}
      {post.comments.length > 0 && (
        <View style={styles.comments}>
          <TouchableOpacity>
            <Text style={styles.commentsText}>
              Ver todos os {post.comments.length} comentários
            </Text>
          </TouchableOpacity>
          
          {post.comments.slice(0, 2).map((comment, index) => (
            <View key={index} style={styles.comment}>
              <Text style={styles.commentText}>
                <Text style={styles.commentUsername}>{comment.user} </Text>
                {comment.text}
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Time */}
      <View style={styles.time}>
        <Text style={styles.timeText}>{post.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    marginBottom: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: spacing.md,
  },
  username: {
    ...typography.bold,
  },
  image: {
    width: width,
    height: width,
    aspectRatio: 1,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likes: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xs,
  },
  likesText: {
    ...typography.bold,
  },
  caption: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xs,
  },
  captionText: {
    ...typography.regular,
    lineHeight: 18,
  },
  captionUsername: {
    ...typography.bold,
  },
  moreText: {
    ...typography.small,
    color: colors.secondary,
  },
  comments: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xs,
  },
  commentsText: {
    ...typography.small,
    color: colors.secondary,
    marginBottom: spacing.xs,
  },
  comment: {
    marginBottom: spacing.xs,
  },
  commentText: {
    ...typography.regular,
    lineHeight: 16,
  },
  commentUsername: {
    ...typography.bold,
  },
  time: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  timeText: {
    ...typography.small,
    color: colors.secondary,
  },
});

