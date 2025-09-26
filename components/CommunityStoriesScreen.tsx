import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { Video } from 'expo-av';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';

const API_URL = "http://192.168.1.13:8000/relatos/api/v1/relatos/";

type Story = {
  id: number | string;
  category?: { name?: string; slug?: string };
  title?: string;
  content?: string;
  description?: string;
  author?: { username?: string } | string;
  localization?: { name?: string };
  location?: string;
  publication_date?: string;
  time?: string;
  tags?: string[];
  likes?: number;
  comments?: number;
  views?: number;
  rating?: number | null;
};

type Comment = {
  id: number | string;
  user?: { username?: string };
  content?: string;
  created_at?: string;
};

const categories = [
  { label: 'Todos', count: 1247 },
  { label: 'Leyendas', count: 234 },
  { label: 'Recetas', count: 189 },
  { label: 'Tradiciones', count: 156 },
  { label: 'Artesanías', count: 98 },
  { label: 'Música', count: 87 },
  { label: 'Festivales', count: 76 },
];

export default function CommunityStoriesScreen() {
  // Estado para rating temporal
  const [sendingRating, setSendingRating] = useState(false);
  const handleSendRating = (score: number, story: Story) => {
    if (!story) return;
    setSendingRating(true);
    fetch('http://192.168.1.13:8000/api/v1/ratings/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        post_id: story.id,
        user: userId,
        category: story.category?.id || 1,
        score: score,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setSendingRating(false);
        // Opcional: recargar la historia para actualizar el promedio
        handleOpenComments(story);
      })
      .catch(() => setSendingRating(false));
  };
  const [stories, setStories] = useState<Story[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Comments logic (in English)
  const [storyComments, setStoryComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [newComment, setNewComment] = useState('');
  const [sendingComment, setSendingComment] = useState(false);

  const handleOpenComments = (story: Story) => {
    setSelectedStory(story);
    setModalVisible(true);
    setLoadingComments(true);
    fetch(`http://192.168.1.13:8000/api/v1/comentarios/?post_id=${story.id}`)
      .then(res => res.json())
      .then(data => {
        setStoryComments(data);
        setLoadingComments(false);
        // Actualiza el número de comentarios en la story seleccionada
        story.comments = data.length;
        setStories(prevStories =>
          prevStories.map(s => s.id === story.id ? { ...s, comments: data.length } : s)
        );
      })
      .catch(() => setLoadingComments(false));
  };

  const handleSendComment = () => {
    if (!selectedStory) return;
    setSendingComment(true);
    fetch('http://192.168.1.13:8000/api/v1/comentarios/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        post_id: selectedStory.id,
        user: 1, // Replace with authenticated user id if available
        content: newComment,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setNewComment('');
        setSendingComment(false);
        handleOpenComments(selectedStory);
      })
      .catch(() => setSendingComment(false));
  };

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setStories(data);
      })
      .catch(error => setFetchError(error.message));
  }, []);

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) {
          throw new Error('Response is not JSON or server error');
        }
        return response.json();
      })
      .then(data => setStories(data))
      .catch(error => setFetchError(error.message));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          
        </View>
      </View>
        {/* Header estático igual a EventosScreen */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Image source={require('../assets/images/kunalaya-logo.png')} style={{ width: 100, height: 36, resizeMode: 'contain' }} />
            <View style={{ flex: 1 }} />
            <MaterialCommunityIcons name="account-outline" size={24} color="#22223b" style={{ marginRight: 8 }} />
            <MaterialCommunityIcons name="menu" size={24} color="#22223b" />
          </View>
        </View>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Relatos Comunitarios</Text>
        <Text style={styles.subtitle}>Descubre y comparte las historias que definen nuestra identidad</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>+  Compartir Relato</Text>
        </TouchableOpacity>
        <View style={styles.searchCard}>
          <View style={styles.searchRow}>
            <MaterialCommunityIcons name="magnify" size={22} color="#bdbdbd" style={{ marginRight: 6 }} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar relatos, autores, lugares..."
              placeholderTextColor="#bdbdbd"
              value={search}
              onChangeText={setSearch}
            />
          </View>
          <View style={styles.filterRow}>
            <TouchableOpacity style={styles.filterDropdown}>
              <Text style={styles.filterDropdownText}>Todos</Text>
              <MaterialCommunityIcons name="chevron-down" size={18} color="#bdbdbd" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <MaterialCommunityIcons name="filter-variant" size={18} color="#219ebc" />
              <Text style={styles.filterButtonText}>Filtros</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoriesRow}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat.label}
              style={[styles.categoryTab, selectedCategory === cat.label && styles.categoryTabActive]}
              onPress={() => setSelectedCategory(cat.label)}
            >
              <Text style={[styles.categoryTabText, selectedCategory === cat.label && styles.categoryTabTextActive]}>{cat.label}</Text>
              <Text style={[styles.categoryTabCount, selectedCategory === cat.label && styles.categoryTabTextActive]}>{cat.count}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {fetchError && (
          <Text style={{ color: 'red', marginBottom: 10 }}>{fetchError}</Text>
        )}
        {stories.length === 0 ? (
          <Text>No hay relatos disponibles.</Text>
        ) : (
          stories
            .filter(s => selectedCategory === 'Todos' || (typeof s.category === 'object' ? s.category.name : s.category) === selectedCategory)
            .map((story) => (
              <View key={story.id} style={styles.storyCard}>
                <View style={styles.storyCardHeader}>
                  <Text style={styles.storyCategory}>
                    {typeof story.category === 'object' ? story.category.name : story.category || ''}
                  </Text>
                  <MaterialCommunityIcons name="file-document-outline" size={18} color="#bdbdbd" />
                </View>
                <Text style={styles.storyTitle}>{story.title || story.content || story.description}</Text>
                <Text style={styles.storyDescription}>{story.content || story.description}</Text>
                <View style={styles.storyAuthorRow}>
                  <MaterialCommunityIcons name="account-circle" size={22} color="#bdbdbd" style={{ marginRight: 4 }} />
                  <View>
                    <Text style={styles.storyAuthor}>{typeof story.author === 'object' ? story.author.username : story.author || 'Unknown author'}</Text>
                    <Text style={styles.storyLocation}>{story.localization?.name || story.location || ''}</Text>
                  </View>
                  <View style={{ flex: 1 }} />
                  <Text style={styles.storyTime}>{story.publication_date || story.time || ''}</Text>
                </View>
                {/* Multimedia render */}
                {story.media && story.media.length > 0 && (
                  <View style={{ marginBottom: 10 }}>
                    {story.media.map((mediaItem, idx) => {
                      const fileUrl = "http://192.168.1.13:8000" + mediaItem.files;
                      if (mediaItem.types === 'image') {
                        return (
                          <Image
                            key={idx}
                            source={{ uri: fileUrl }}
                            style={{ width: '100%', height: 200, borderRadius: 12, marginBottom: 8 }}
                            resizeMode="cover"
                          />
                        );
                      }
                      if (mediaItem.types === 'video') {
                        return (
                          <Video
                            key={idx}
                            source={{ uri: fileUrl }}
                            style={{ width: '100%', height: 220, borderRadius: 12, marginBottom: 8 }}
                            useNativeControls
                            resizeMode="contain"
                          />
                        );
                      }
                      return null;
                    })}
                  </View>
                )}
                {/* Fin multimedia */}
                <View style={styles.storyStatsRow}>
                  {/* Rating: estrellas y promedio */}
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 8 }}>
                    {[1,2,3,4,5].map(star => (
                      <TouchableOpacity key={star} onPress={() => handleSendRating(star, story)} disabled={sendingRating}>
                        <MaterialCommunityIcons
                          name="star"
                          size={20}
                          color={star <= Math.round(story.rating || 0) ? "#fb8500" : "#ccc"}
                        />
                      </TouchableOpacity>
                    ))}
                    <Text style={{ marginLeft: 6, fontWeight: 'bold', color: '#22223b', fontSize: 13 }}>
                      {story.rating ? story.rating.toFixed(1) : ''}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => handleOpenComments(story)}
                  >
                    <MaterialCommunityIcons name="comment-outline" size={18} color="#219ebc" style={{ marginLeft: 12, marginRight: 8 }} />
                    <Text style={styles.storyStat}>{story.comments}</Text>
                  </TouchableOpacity>
                  <MaterialCommunityIcons name="eye-outline" size={18} color="#457b9d" style={{ marginLeft: 12, marginRight: 8 }} />
                  <Text style={styles.storyStat}>{story.views || 0}</Text>
                  <View style={{ flex: 1 }} />
                  <MaterialCommunityIcons name="share-variant" size={18} color="#bdbdbd" />
                </View>
              </View>
            ))
        )}
        <TouchableOpacity style={styles.loadMoreButton}>
          <Text style={styles.loadMoreText}>Cargar más relatos</Text>
        </TouchableOpacity>
      </ScrollView>
<Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
  <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 32 }}>
    <Text style={{ fontWeight: 'bold', fontSize: 22, marginLeft: 18, marginBottom: 12 }}>
      Comentarios
    </Text>
    <ScrollView style={{ flex: 1, paddingHorizontal: 18 }}>
      {loadingComments ? (
        <Text>Cargando comentarios...</Text>
      ) : storyComments.length > 0 ? (
        storyComments.map(comment => (
          <View key={comment.id} style={{ marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{comment.user?.username || 'Anónimo'}:</Text>
            <Text style={{ fontSize: 16 }}>{comment.content}</Text>
            <Text style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{comment.created_at}</Text>
          </View>
        ))
      ) : (
        <Text style={{ fontSize: 16, color: '#444' }}>No hay comentarios.</Text>
      )}
    </ScrollView>
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 18 }}>
      <TextInput
        value={newComment}
        onChangeText={setNewComment}
        placeholder="Escribe un comentario..."
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
          padding: 8,
          fontSize: 16,
          marginRight: 8,
        }}
      />
      <TouchableOpacity
        onPress={handleSendComment}
        style={{
          backgroundColor: '#219ebc',
          borderRadius: 8,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
        disabled={sendingComment || !newComment.trim()}
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
          {sendingComment ? 'Enviando...' : 'Enviar'}
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginBottom: 18 }}>
      <Text style={{ color: '#219ebc', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Cerrar</Text>
    </TouchableOpacity>
  </View>
</Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
  },
  header: {
    paddingTop: Platform.OS === 'android' ? 14 : 44,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: '#8ecae6',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#22223b',
  },
  scrollContent: {
    paddingBottom: 90,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22223b',
    marginTop: 8,
    marginBottom: 2,
    textAlign: 'center',
  },
  subtitle: {
    color: '#457b9d',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '400',
  },
  shareButton: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 12,
    width: '100%',
    maxWidth: 370,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  searchCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    width: '100%',
    maxWidth: 370,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    paddingHorizontal: 8,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#22223b',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 36,
    flex: 1,
    marginRight: 8,
  },
  filterDropdownText: {
    color: '#22223b',
    fontSize: 13,
    flex: 1,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 36,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  filterButtonText: {
    color: '#219ebc',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 4,
  },
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    maxWidth: 370,
  },
  categoryTab: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 3,
    alignItems: 'center',
    minWidth: 70,
  },
  categoryTabActive: {
    backgroundColor: '#219ebc',
  },
  categoryTabText: {
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 13,
  },
  categoryTabTextActive: {
    color: '#fff',
  },
  categoryTabCount: {
    color: '#457b9d',
    fontSize: 12,
    fontWeight: 'bold',
  },
  storyCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    width: '100%',
    maxWidth: 370,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  storyCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  storyCategory: {
    backgroundColor: '#e0f7fa',
    color: '#457b9d',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 2,
  },
  storyDescription: {
    color: '#22223b',
    fontSize: 13,
    marginBottom: 8,
  },
  storyAuthorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  storyAuthor: {
    fontWeight: 'bold',
    color: '#22223b',
    fontSize: 13,
  },
  storyLocation: {
    color: '#457b9d',
    fontSize: 12,
  },
  storyTime: {
    color: '#bdbdbd',
    fontSize: 11,
  },
  storyTagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  storyTag: {
    backgroundColor: '#e0f7fa',
    color: '#219ebc',
    fontSize: 11,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 2,
  },
  storyStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  storyStat: {
    color: '#22223b',
    fontSize: 12,
    fontWeight: 'bold',
  },
  loadMoreButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    maxWidth: 370,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  loadMoreText: {
    color: '#219ebc',
    fontWeight: 'bold',
    fontSize: 14,
  },
  bottomNav: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 8,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    color: '#bdbdbd',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 2,
  },
  navTextActive: {
    color: '#219ebc',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 2,
  },
});
