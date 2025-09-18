import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const categories = [
  { label: 'Todos', count: 1247 },
  { label: 'Leyendas', count: 234 },
  { label: 'Recetas', count: 189 },
  { label: 'Tradiciones', count: 156 },
  { label: 'Artesanías', count: 98 },
  { label: 'Música', count: 87 },
  { label: 'Festivales', count: 76 },
];

const stories = [
  {
    id: '1',
    category: 'Leyendas',
    title: 'La Leyenda del Cadejo en León',
    description: 'Una historia ancestral que mi abuela me contaba sobre el perro mágico que protege a los viajeros nocturnos...',
    author: 'María González',
    location: 'León, Nicaragua',
    time: 'hace 2 horas',
    tags: ['#leyenda', '#león', '#cadejo', '+1'],
    likes: 24,
    comments: 8,
    views: 156,
  },
  {
    id: '2',
    category: 'Recetas',
    title: 'Receta Tradicional: Nacatamal de mi Abuela',
    description: 'La receta secreta que ha pasado por cinco generaciones en mi familia, con todos los trucos y secretos...',
    author: 'Carlos Mendoza',
    location: 'Masaya, Nicaragua',
    time: 'hace 5 horas',
    tags: ['#nacatamal', '#receta', '#masaya', '+1'],
    likes: 31,
    comments: 12,
    views: 203,
  },
  {
    id: '3',
    category: 'Festivales',
    title: 'Festividad de Santo Domingo en Managua',
    description: 'Testimonio audiovisual de las celebraciones patronales más importantes de la capital...',
    author: 'Ana Rodríguez',
    location: 'Managua, Nicaragua',
    time: 'hace 1 día',
    tags: ['#santo domingo', '#managua', '#festividad', '+1'],
    likes: 18,
    comments: 6,
    views: 98,
  },
  {
    id: '4',
    category: 'Música',
    title: 'Canción de Cuna Nicaragüense',
    description: 'Grabación de una canción de cuna tradicional que mi bisabuela cantaba, preservando la melodía original...',
    author: 'Roberto Flores',
    location: 'Granada, Nicaragua',
    time: 'hace 2 días',
    tags: ['#canción de cuna', '#granada', '#música tradicional', '+1'],
    likes: 15,
    comments: 4,
    views: 67,
  },
];

export default function CommunityStoriesScreen() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <View style={styles.logoCircle}>
            <MaterialCommunityIcons name="alpha-k-circle" size={32} color="#fb8500" />
          </View>
          <Text style={styles.headerTitle}>Kunalaya</Text>
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
        {stories.filter(s => selectedCategory === 'Todos' || s.category === selectedCategory).map((story) => (
          <View key={story.id} style={styles.storyCard}>
            <View style={styles.storyCardHeader}>
              <Text style={styles.storyCategory}>{story.category}</Text>
              <MaterialCommunityIcons name="file-document-outline" size={18} color="#bdbdbd" />
            </View>
            <Text style={styles.storyTitle}>{story.title}</Text>
            <Text style={styles.storyDescription}>{story.description}</Text>
            <View style={styles.storyAuthorRow}>
              <MaterialCommunityIcons name="account-circle" size={22} color="#bdbdbd" style={{ marginRight: 4 }} />
              <View>
                <Text style={styles.storyAuthor}>{story.author}</Text>
                <Text style={styles.storyLocation}>{story.location}</Text>
              </View>
              <View style={{ flex: 1 }} />
              <Text style={styles.storyTime}>{story.time}</Text>
            </View>
            <View style={styles.storyTagsRow}>
              {story.tags.map((tag, idx) => (
                <Text key={idx} style={styles.storyTag}>{tag}</Text>
              ))}
            </View>
            <View style={styles.storyStatsRow}>
              <MaterialCommunityIcons name="heart-outline" size={18} color="#fb8500" style={{ marginRight: 8 }} />
              <Text style={styles.storyStat}>{story.likes}</Text>
              <MaterialCommunityIcons name="comment-outline" size={18} color="#219ebc" style={{ marginLeft: 12, marginRight: 8 }} />
              <Text style={styles.storyStat}>{story.comments}</Text>
              <MaterialCommunityIcons name="eye-outline" size={18} color="#457b9d" style={{ marginLeft: 12, marginRight: 8 }} />
              <Text style={styles.storyStat}>{story.views}</Text>
              <View style={{ flex: 1 }} />
              <MaterialCommunityIcons name="share-variant" size={18} color="#bdbdbd" />
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.loadMoreButton}>
          <Text style={styles.loadMoreText}>Cargar más relatos</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="home" size={22} color="#219ebc" />
          <Text style={styles.navTextActive}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="book-open-variant" size={22} color="#bdbdbd" />
          <Text style={styles.navText}>Relatos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="map-marker" size={22} color="#bdbdbd" />
          <Text style={styles.navText}>Mapa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="calendar" size={22} color="#bdbdbd" />
          <Text style={styles.navText}>Eventos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="library" size={22} color="#bdbdbd" />
          <Text style={styles.navText}>Biblioteca</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
  },
  header: {
    paddingTop: Platform.OS === 'android' ? 36 : 44,
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
