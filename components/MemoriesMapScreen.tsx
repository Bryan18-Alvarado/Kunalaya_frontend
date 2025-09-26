import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const categories = [
  { name: 'Todos', count: 89 },
  { name: 'Leyendas', count: 23 },
  { name: 'Tradiciones', count: 18 },
  { name: 'Festivales', count: 15 },
  { name: 'Artesanías', count: 12 },
  { name: 'Recetas', count: 11 },
  { name: 'Música', count: 10 },
];

const places = [
  {
    id: '1',
    title: 'Casa donde nació Rubén Darío',
    description: 'Lugar histórico donde nació el príncipe de las letras castellanas',
    category: 'Historia',
    likes: 45,
    views: 234,
    coordinate: { latitude: 12.6306, longitude: -87.1306 },
  },
  {
    id: '2',
    title: 'Mercado de Artesanías de Masaya',
    description: 'Centro tradicional de artesanías nicaragüenses con más de 100 años de historia',
    category: 'Artesanías',
    likes: 38,
    views: 189,
    coordinate: { latitude: 11.9744, longitude: -86.0942 },
  },
  {
    id: '3',
    title: 'La Leyenda del Cadejo en León',
    description: 'Una historia ancestral que mi abuela me contaba sobre el perro mágico que protege a los viajeros nocturnos...',
    category: 'Leyendas',
    likes: 24,
    views: 156,
    coordinate: { latitude: 12.4345, longitude: -86.8781 },
  },
  {
    id: '4',
    title: 'Festival de San Jerónimo',
    description: 'Celebración tradicional con música, bailes y gastronomía típica de Masaya.',
    category: 'Festivales',
    likes: 31,
    views: 98,
    coordinate: { latitude: 11.9744, longitude: -86.0942 },
  },
  {
    id: '5',
    title: 'Receta de Nacatamal',
    description: 'Plato típico nicaragüense preparado con maíz, carne y especias, envuelto en hoja de plátano.',
    category: 'Recetas',
    likes: 19,
    views: 77,
    coordinate: { latitude: 12.1364, longitude: -86.2514 },
  },
  {
    id: '6',
    title: 'Música de Marimba',
    description: 'La marimba es un instrumento emblemático de la música folclórica nicaragüense.',
    category: 'Música',
    likes: 15,
    views: 54,
    coordinate: { latitude: 12.1550, longitude: -86.2631 },
  },
  {
    id: '7',
    title: 'Artesanía de Hamacas de Masatepe',
    description: 'Las hamacas tejidas a mano son una tradición artesanal de Masatepe.',
    category: 'Artesanías',
    likes: 22,
    views: 112,
    coordinate: { latitude: 11.9100, longitude: -86.1450 },
  },
];

export default function MemoriesMapScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);

  const filteredPlaces = places.filter(
    p => (selectedCategory === 'Todos' || p.category === selectedCategory) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <FlatList
      style={styles.container}
      data={filteredPlaces}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <>
          {/* Header estático igual a EventosScreen */}
          <View style={styles.header}>
            <View style={styles.headerRow}>
              <Image source={require('../assets/images/kunalaya-logo.png')} style={{ width: 100, height: 36, resizeMode: 'contain' }} />
              <View style={{ flex: 1 }} />
              <MaterialCommunityIcons name="account-outline" size={24} color="#22223b" style={{ marginRight: 8 }} />
              <MaterialCommunityIcons name="menu" size={24} color="#22223b" />
            </View>
          </View>
          <View style={styles.headerTextBox}>
            <Text style={styles.title}>Mapa de Memorias</Text>
            <Text style={styles.subtitle}>Explora lugares con historia y tradiciones geolocalizadas</Text>
          </View>

          {/* Botones principales estilo relatos */}
          <View style={styles.mainButtons}>
            <TouchableOpacity style={styles.activeButton}>
              <MaterialCommunityIcons name="map-marker-radius" size={20} color="#fff" />
              <Text style={styles.activeButtonText}>Mapa</Text>
            </TouchableOpacity>
            <View style={{ width: 5 }} />
            <TouchableOpacity style={styles.inactiveButton}>
              <MaterialCommunityIcons name="format-list-bulleted" size={20} color="#219ebc" />
              <Text style={styles.inactiveButtonText}>Lista</Text>
            </TouchableOpacity>
            <View style={{ width: 5 }} />
            <TouchableOpacity style={styles.addButton}>
              <MaterialCommunityIcons name="plus" size={10} color="#fff" />
              <Text style={styles.addButtonText}>Agregar Lugar</Text>
            </TouchableOpacity>
          </View>

          {/* Buscador y filtros idéntico a relatos */}
          <View style={styles.searchCard}>
            <View style={styles.searchRow}>
              <MaterialCommunityIcons name="magnify" size={22} color="#bdbdbd" style={{ marginRight: 6 }} />
              <TextInput
                style={styles.searchInput}
                placeholder="Buscar lugares, historias, ubicaciones..."
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

          {/* Categorías */}
          <View style={styles.categoriesPanel}>
            {categories.map(cat => (
              <TouchableOpacity
                key={cat.name}
                style={cat.name === selectedCategory ? styles.categoryActive : styles.category}
                onPress={() => setSelectedCategory(cat.name)}
              >
                <Text style={cat.name === selectedCategory ? styles.categoryTextActive : styles.categoryText}>{cat.name}</Text>
                <Text style={cat.name === selectedCategory ? styles.categoryCountActive : styles.categoryCount}>{cat.count}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Mapa interactivo */}
          <View style={styles.mapCard}>
            <Text style={styles.mapTitle}>Mapa Interactivo de Nicaragua</Text>
            <Text style={styles.mapSubtitle}>Mapa con {places.length} lugares con memorias culturales</Text>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 12.8654,
                  longitude: -85.2072,
                  latitudeDelta: 3.5,
                  longitudeDelta: 3.5,
                }}
              >
                {filteredPlaces.map(place => (
                  <Marker
                    key={place.id}
                    coordinate={place.coordinate}
                    onPress={() => setSelectedPlace(place.id)}
                  >
                    <MaterialCommunityIcons
                      name="map-marker"
                      size={32}
                      color={selectedPlace === place.id ? '#FFA500' : '#0077B6'}
                    />
                  </Marker>
                ))}
              </MapView>
              {/* Leyenda */}
              <View style={styles.legendBox}>
                <Text style={styles.legendTitle}>Leyenda</Text>
                <View style={styles.legendItem}>
                  <MaterialCommunityIcons name="map-marker" size={20} color="#0077B6" />
                  <Text style={styles.legendText}>Lugar con memoria</Text>
                </View>
                <View style={styles.legendItem}>
                  <MaterialCommunityIcons name="map-marker" size={20} color="#FFA500" />
                  <Text style={styles.legendText}>Lugar seleccionado</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Lugares encontrados header */}
          <View style={styles.foundPlacesCard}>
            <Text style={styles.foundPlacesTitle}>Lugares Encontrados</Text>
            <Text style={styles.foundPlacesSubtitle}>{filteredPlaces.length} lugares con memorias culturales</Text>
          </View>
        </>
      }
      renderItem={({ item }) => (
        <View style={styles.placeCard}>
          <View style={styles.placeIconBox}>
            <MaterialCommunityIcons name="map-marker" size={28} color="#0077B6" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.placeTitle}>{item.title}</Text>
            <Text style={styles.placeDescription}>{item.description}</Text>
            <View style={styles.placeCategoryBox}>
              <Text style={styles.placeCategory}>{item.category}</Text>
            </View>
            <View style={styles.placeStatsBox}>
              <MaterialCommunityIcons name="heart-outline" size={18} color="#e99518ff" />
              <Text style={styles.placeStat}>{item.likes}</Text>
              <MaterialCommunityIcons name="eye-outline" size={18} color="#426e75ff" style={{ marginLeft: 12 }} />
              <Text style={styles.placeStat}>{item.views}</Text>
            </View>
          </View>
        </View>
      )}
      contentContainerStyle={{ paddingBottom: 32 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8ecae6',
    flex: 1,
    paddingTop: 16,
  },
  header: {
    paddingTop: Platform.OS === 'android' ? 20 : 44,
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
  headerTextBox: {
    alignItems: 'center',
    marginBottom: 8,
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
  mainButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginBottom: 12,
    marginTop: 2,
    width: '100%',
    maxWidth: 200,
    alignSelf: 'center',
  },
  activeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 6,
  },
  activeButtonText: {
    marginLeft: 6,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
  inactiveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#219ebc',
    marginRight: 6,
  },
  inactiveButtonText: {
    marginLeft: 6,
    fontWeight: 'bold',
    color: '#219ebc',
    fontSize: 15,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fb8500',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  addButtonText: {
    marginLeft: 6,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },
  mainButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 12,
  },
  activeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0077B6',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inactiveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#0077B6',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1B4965',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    marginLeft: 6,
    fontWeight: 'bold',
    color: '#fff',
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
  categoriesPanel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
    maxWidth: 370,
    alignSelf: 'center',
  },
  category: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 3,
    alignItems: 'center',
    minWidth: 70,
    elevation: 0,
  },
  categoryActive: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 3,
    alignItems: 'center',
    minWidth: 70,
    elevation: 0,
  },
  categoryText: {
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  categoryTextActive: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
  categoryCount: {
    color: '#457b9d',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryCountActive: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mapCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  mapTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1B4965',
    marginBottom: 2,
  },
  mapSubtitle: {
    fontSize: 13,
    color: '#1B4965',
    marginBottom: 8,
  },
  mapContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#8FD3F4',
    marginBottom: 8,
  },
  map: {
    width: '100%',
    height: 220,
  },
  legendBox: {
    position: 'absolute',
    left: 12,
    top: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  legendTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 4,
    color: '#1B4965',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  legendText: {
    marginLeft: 6,
    fontSize: 12,
    color: '#1B4965',
  },
  foundPlacesCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  foundPlacesTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#1B4965',
    marginBottom: 2,
  },
  foundPlacesSubtitle: {
    fontSize: 13,
    color: '#1B4965',
    marginBottom: 8,
  },
  placeCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 14,
    alignItems: 'center',
    width: '100%',
    maxWidth: 370,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  placeIconBox: {
    marginRight: 12,
    backgroundColor: '#e0f7fa',
    borderRadius: 16,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  placeTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#22223b',
    marginBottom: 2,
  },
  placeDescription: {
    color: '#22223b',
    fontSize: 13,
    marginBottom: 8,
  },
  placeCategoryBox: {
    backgroundColor: '#e0f7fa',
    color: '#457b9d',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  placeCategory: {
    color: '#457b9d',
    fontWeight: 'bold',
    fontSize: 12,
  },
  placeAuthorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  placeAuthor: {
    fontWeight: 'bold',
    color: '#22223b',
    fontSize: 13,
  },
  placeLocation: {
    color: '#457b9d',
    fontSize: 12,
  },
  placeTime: {
    color: '#bdbdbd',
    fontSize: 11,
    marginLeft: 'auto',
  },
  placeTagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  placeTag: {
    backgroundColor: '#e0f7fa',
    color: '#219ebc',
    fontSize: 11,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 2,
  },
  placeStatsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  placeStat: {
    color: '#22223b',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 2,
  },
});
