import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
  'Todos', 'Gastronomía', 'Medicina Tradicional', 'Artesanías', 'Leyendas', 'Danza', 'Arquitectura', 'Música'
];
const types = [
  'Todos', 'Receta', 'Conocimiento', 'Técnica', 'Cuento', 'Instructivo'
];
const sabers = [
  {
    id: '1',
    title: 'Construcción de Ranchos de Palma',
    description: 'Técnicas ancestrales para construir viviendas tradicionales con materiales locales',
    author: 'Don Miguel Flores',
    location: 'Río San Juan',
    date: '17 mar 2024',
    category: 'Arquitectura',
    tags: ['construcción', 'palma', 'vivienda'],
    downloads: 67,
    views: 543,
    likes: 156,
    type: 'Técnica',
  },
  {
    id: '2',
    title: 'Danza del Güegüense',
    description: 'Pasos y significado de la danza tradicional nicaragüense patrimonio de la humanidad',
    author: 'Grupo Folklórico Diriangén',
    location: 'Diriamba',
    date: '11 mar 2024',
    category: 'Danza',
    tags: ['danza', 'patrimonio', 'cultura'],
    downloads: 201,
    views: 2100,
    likes: 312,
    type: 'Conocimiento',
  },
  {
    id: '3',
    title: 'Elaboración de Quesillo',
    description: 'Receta tradicional para preparar quesillo nicaragüense con ingredientes locales.',
    author: 'Doña Rosa García',
    location: 'La Paz Centro',
    date: '05 feb 2024',
    category: 'Gastronomía',
    tags: ['quesillo', 'receta', 'gastronomía'],
    downloads: 89,
    views: 780,
    likes: 210,
    type: 'Receta',
  },
  {
    id: '4',
    title: 'Remedios Naturales para el Resfriado',
    description: 'Conocimientos populares sobre plantas medicinales para aliviar el resfriado.',
    author: 'Dr. Ernesto López',
    location: 'Estelí',
    date: '22 ene 2024',
    category: 'Medicina Tradicional',
    tags: ['remedios', 'plantas', 'salud'],
    downloads: 54,
    views: 430,
    likes: 98,
    type: 'Conocimiento',
  },
];

export default function BibliotecaScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedType, setSelectedType] = useState('Todos');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Más Recientes');

  const filteredSabers = sabers.filter(
    s => (selectedCategory === 'Todos' || s.category === selectedCategory) &&
      (selectedType === 'Todos' || s.type === selectedType) &&
      (s.title.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Image source={require('../assets/images/kunalaya-logo.png')} style={{ width: 100, height: 36, resizeMode: 'contain' }} />
          <View style={{ flex: 1 }} />
          <MaterialCommunityIcons name="account-outline" size={24} color="#22223b" style={{ marginRight: 8 }} />
          <MaterialCommunityIcons name="menu" size={24} color="#22223b" />
        </View>
      </View>
      <Text style={styles.title}>Biblioteca de Saberes</Text>
      <Text style={styles.subtitle}>Conocimientos tradicionales y populares de Nicaragua</Text>
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>+  Compartir Saber</Text>
      </TouchableOpacity>
      {/* Estadísticas */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Total Saberes</Text>
          <Text style={styles.statValue}>156</Text>
          <MaterialCommunityIcons name="book-open-variant" size={28} color="#219ebc" style={styles.statIcon} />
        </View>
        <View style={[styles.statCard, { borderColor: '#fb8500' }] }>
          <Text style={styles.statLabel}>Más Populares</Text>
          <Text style={[styles.statValue, { color: '#fb8500' }]}>24</Text>
          <MaterialCommunityIcons name="heart-outline" size={28} color="#fb8500" style={styles.statIcon} />
        </View>
      </View>
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { borderColor: '#fb8500' }] }>
          <Text style={styles.statLabel}>Descargas</Text>
          <Text style={[styles.statValue, { color: '#fb8500' }]}>1.2K</Text>
          <MaterialCommunityIcons name="download" size={28} color="#fb8500" style={styles.statIcon} />
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Visualizaciones</Text>
          <Text style={styles.statValue}>8.9K</Text>
          <MaterialCommunityIcons name="eye-outline" size={28} color="#219ebc" style={styles.statIcon} />
        </View>
      </View>
      {/* Buscador y filtros */}
      <View style={styles.searchCard}>
        <View style={styles.searchRow}>
          <MaterialCommunityIcons name="magnify" size={22} color="#bdbdbd" style={{ marginRight: 6 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar saberes, recetas, técnicas..."
            placeholderTextColor="#bdbdbd"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity style={styles.filterDropdown}>
          <Text style={styles.filterDropdownText}>{sort}</Text>
          <MaterialCommunityIcons name="chevron-down" size={18} color="#bdbdbd" />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionLabel}>Categorías:</Text>
      <View style={styles.categoriesRow}>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.categoryTab, selectedCategory === cat && styles.categoryTabActive]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[styles.categoryTabText, selectedCategory === cat && styles.categoryTabTextActive]}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.sectionLabel}>Tipos:</Text>
      <View style={styles.categoriesRow}>
        {types.map(type => (
          <TouchableOpacity
            key={type}
            style={[styles.categoryTab, selectedType === type && styles.categoryTabActive, type === 'Todos' && styles.typeTabTodos]}
            onPress={() => setSelectedType(type)}
          >
            <Text style={[styles.categoryTabText, selectedType === type && styles.categoryTabTextActive, type === 'Todos' && styles.typeTabTextTodos]}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Cards de saberes */}
      {filteredSabers.map(saber => (
        <View key={saber.id} style={styles.saberCard}>
          <View style={styles.saberCardHeader}>
            <MaterialCommunityIcons name="book-open-variant" size={28} color="#219ebc" style={{ marginRight: 6 }} />
            <Text style={[styles.saberCategory, saber.category === 'Arquitectura' && styles.saberCategoryArquitectura, saber.category === 'Danza' && styles.saberCategoryDanza]}>{saber.category}</Text>
          </View>
          <Text style={styles.saberTitle}>{saber.title}</Text>
          <Text style={styles.saberDescription}>{saber.description}</Text>
          <View style={styles.saberInfoColumn}>
            <View style={styles.saberInfoRowSingle}>
              <MaterialCommunityIcons name="account-circle" size={18} color="#219ebc" style={styles.saberInfoIconSingle} />
              <Text style={styles.saberInfoTextSingle}>{saber.author}</Text>
            </View>
            <View style={styles.saberInfoRowSingle}>
              <MaterialCommunityIcons name="map-marker" size={18} color="#fb8500" style={styles.saberInfoIconSingle} />
              <Text style={styles.saberInfoTextSingle}>{saber.location}</Text>
            </View>
            <View style={styles.saberInfoRowSingle}>
              <MaterialCommunityIcons name="calendar" size={18} color="#457b9d" style={styles.saberInfoIconSingle} />
              <Text style={styles.saberInfoTextSingle}>{saber.date}</Text>
            </View>
          </View>

          <View style={styles.saberStatsRow}>
            <View style={styles.saberStatsIconsRow}>
              <MaterialCommunityIcons name="heart-outline" size={18} color="#fb8500" style={{ marginRight: 4 }} />
              <Text style={styles.saberStat}>{saber.likes}</Text>
              <MaterialCommunityIcons name="download" size={18} color="#219ebc" style={{ marginLeft: 10, marginRight: 4 }} />
              <Text style={styles.saberStat}>{saber.downloads}</Text>
              <MaterialCommunityIcons name="eye-outline" size={18} color="#457b9d" style={{ marginLeft: 10, marginRight: 4 }} />
              <Text style={styles.saberStat}>{saber.views}</Text>
            </View>
          </View>
          <View style={styles.saberActionsRowFinal}>
            <TouchableOpacity style={styles.saberButtonFinal}>
              <Text style={styles.saberButtonTextFinal}>Ver Completo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saberDownloadButtonFinal}>
              <MaterialCommunityIcons name="download" size={20} color="#219ebc" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  saberInfoColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginTop: 2,
    gap: 2,
  },
  saberStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 2,
  },
  saberStat: {
    color: '#22223b',
    fontSize: 15,
    fontWeight: '500',
    marginRight: 8,
  },
  saberInfoRowSingle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    minHeight: 22,
  },
  saberInfoIconSingle: {
    marginRight: 4,
    alignSelf: 'center',
  },
  saberInfoTextSingle: {
    color: '#22223b',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    alignSelf: 'center',
    paddingTop: 1,
  },
  container: {
    backgroundColor: '#8ecae6',
    flex: 1,
    paddingTop: 16,
  },
  header: {
    paddingTop: 20,
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
    backgroundColor: '#fb8500',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 10,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    flex: 1,
    marginRight: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderLeftWidth: 4,
    borderColor: '#219ebc',
  },
  statLabel: {
    color: '#457b9d',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#219ebc',
    marginBottom: 2,
  },
  statIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  searchCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    width: '92%',
    maxWidth: 370,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignSelf: 'center',
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
  filterDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 36,
    marginBottom: 8,
    width: '60%',
    alignSelf: 'flex-start',
  },
  filterDropdownText: {
    color: '#22223b',
    fontSize: 13,
    flex: 1,
  },
  sectionLabel: {
    color: '#457b9d',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 16,
    marginBottom: 4,
    marginTop: 8,
  },
  categoriesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 10,
    width: '100%',
    maxWidth: 370,
    marginLeft: 8,
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
  typeTabTodos: {
    backgroundColor: '#fb8500',
  },
  typeTabTextTodos: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saberCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    width: '100%',
    maxWidth: 350,
    alignSelf: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  saberStatsIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  saberCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    justifyContent: 'flex-start',
  },
  saberCategory: {
    backgroundColor: '#e0f7fa',
    color: '#219ebc',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
  },
  saberCategoryArquitectura: {
    backgroundColor: '#ffd166',
    color: '#22223b',
  },
  saberCategoryDanza: {
    backgroundColor: '#219ebc',
    color: '#fff',
  },
  saberTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 2,
  },
  saberDescription: {
    color: '#22223b',
    fontSize: 13,
    marginBottom: 8,
  },
  saberInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  saberInfoText: {
    color: '#457b9d',
    fontSize: 13,
    marginRight: 8,
  },
  saberActionsRowFinal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    width: '100%',
    gap: 16,
  },
  saberButtonFinal: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 0,
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
    minWidth: 120,
    maxWidth: 180,
  },
  saberButtonTextFinal: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  saberDownloadButtonFinal: {
    backgroundColor: '#f6f6f6',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
