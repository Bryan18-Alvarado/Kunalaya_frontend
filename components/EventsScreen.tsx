import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
  'Todos', 'Religioso', 'Gastronómico', 'Artesanal', 'Cultural', 'Musical', 'Danza'
];

const events = [
  {
    id: '1',
    title: 'Festival de Santo Domingo',
    description: 'Celebración tradicional en honor al santo patrono de Managua',
    date: '31 de julio de 2024',
    time: '09:00',
    location: 'Managua, Nicaragua',
    participants: 1500,
    category: 'Religioso',
    organizer: 'Alcaldía de Managua',
  },
  {
    id: '2',
    title: 'Feria Nacional del Maíz',
    description: 'Exposición de productos derivados del maíz y gastronomía tradicional',
    date: '14 de septiembre de 2024',
    time: '08:00',
    location: 'Masaya, Nicaragua',
    participants: 800,
    category: 'Gastronómico',
    organizer: 'Cooperativa de Productores',
  },
  {
    id: '3',
    title: 'Encuentro de Artesanos',
    description: 'Muestra de artesanías tradicionales nicaragüenses',
    date: '11 de octubre de 2024',
    time: '10:00',
    location: 'Granada, Nicaragua',
    participants: 300,
    category: 'Artesanal',
    organizer: 'Casa de los Tres Mundos',
  },
  {
    id: '4',
    title: 'Noche de Leyendas',
    description: 'Narración de leyendas y mitos nicaragüenses bajo las estrellas',
    date: '1 de noviembre de 2024',
    time: '19:00',
    location: 'León, Nicaragua',
    participants: 200,
    category: 'Cultural',
    organizer: 'Centro Cultural León',
  },
];

export default function EventsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [search, setSearch] = useState('');

  const filteredEvents = events.filter(
    e => (selectedCategory === 'Todos' || e.category === selectedCategory) &&
      (e.title.toLowerCase().includes(search.toLowerCase()) || e.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 90 }}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerRow}>

            <Image source={require('../assets/images/kunalaya-logo.png')} style={{ width: 100, height: 36, resizeMode: 'contain' }} />


          <View style={{ flex: 1 }} />
          <MaterialCommunityIcons name="account-outline" size={24} color="#22223b" style={{ marginRight: 8 }} />
          <MaterialCommunityIcons name="menu" size={24} color="#22223b" />
        </View>
      </View>
      <View style={styles.headerTextBox}>
        <Text style={styles.title}>Calendario Cultural</Text>
        <Text style={styles.subtitle}>Descubre y participa en eventos tradicionales de Nicaragua</Text>
      </View>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>+  Crear Evento</Text>
      </TouchableOpacity>
      {/* Estadísticas */}
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Eventos Activos</Text>
          <Text style={styles.statValue}>24</Text>
          <MaterialCommunityIcons name="calendar" size={28} color="#219ebc" style={styles.statIcon} />
        </View>
        <View style={[styles.statCard, { borderColor: '#fb8500' }] }>
          <Text style={styles.statLabel}>Este Mes</Text>
          <Text style={[styles.statValue, { color: '#fb8500' }]}>8</Text>
          <MaterialCommunityIcons name="clock-outline" size={28} color="#fb8500" style={styles.statIcon} />
        </View>
      </View>
      <View style={styles.statsRow}>
        <View style={[styles.statCard, { borderColor: '#fb8500' }] }>
          <Text style={styles.statLabel}>Participantes</Text>
          <Text style={[styles.statValue, { color: '#fb8500' }]}>2.8K</Text>
          <MaterialCommunityIcons name="account-group" size={28} color="#fb8500" style={styles.statIcon} />
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Comunidades</Text>
          <Text style={styles.statValue}>15</Text>
          <MaterialCommunityIcons name="map-marker" size={28} color="#219ebc" style={styles.statIcon} />
        </View>
      </View>
      {/* Buscador y filtros estilo Relatos */}
      <View style={styles.searchCard}>
        <View style={styles.searchRow}>
          <MaterialCommunityIcons name="magnify" size={22} color="#bdbdbd" style={{ marginRight: 6 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar eventos, organizadores, lugares..."
            placeholderTextColor="#bdbdbd"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterDropdown}>
            <Text style={styles.filterDropdownText}>{selectedCategory}</Text>
            <MaterialCommunityIcons name="chevron-down" size={18} color="#bdbdbd" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <MaterialCommunityIcons name="filter-variant" size={18} color="#219ebc" />
            <Text style={styles.filterButtonText}>Filtros</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.categoriesRow}>
        {/* Simulación de conteos, reemplaza con datos reales si tienes */}
        {[
          { label: 'Todos', count: 1247 },
          { label: 'Leyendas', count: 234 },
          { label: 'Recetas', count: 189 },
          { label: 'Tradiciones', count: 156 },
          { label: 'Artesanías', count: 98 },
          { label: 'Música', count: 87 },
          { label: 'Festivales', count: 76 },
        ].map(cat => (
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
      {/* Filtros extra */}
      <View style={styles.extraFiltersRow}>
        <TouchableOpacity style={styles.extraFilterButton}>
          <MaterialCommunityIcons name="filter-variant" size={22} color="#219ebc" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.extraFilterButton}>
          <MaterialCommunityIcons name="calendar" size={22} color="#219ebc" />
        </TouchableOpacity>
      </View>
      {/* Cards de eventos */}
      {filteredEvents.map(event => (
        <View key={event.id} style={styles.eventCard}>
          <View style={styles.eventCardHeader}>
            <Text style={[styles.eventCategory, styles[`categoryColor${event.category}`] || styles.eventCategory]}>{event.category}</Text>
          </View>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventDescription}>{event.description}</Text>
          <View style={styles.eventInfoRow}>
            <MaterialCommunityIcons name="calendar" size={18} color="#219ebc" style={{ marginRight: 4 }} />
            <Text style={styles.eventInfoText}>{event.date}</Text>
            <MaterialCommunityIcons name="clock-outline" size={18} color="#fb8500" style={{ marginLeft: 12, marginRight: 4 }} />
            <Text style={styles.eventInfoText}>{event.time}</Text>
          </View>
          <View style={styles.eventInfoRow}>
            <MaterialCommunityIcons name="map-marker" size={18} color="#219ebc" style={{ marginRight: 4 }} />
            <Text style={styles.eventInfoText}>{event.location}</Text>
            <MaterialCommunityIcons name="account-group" size={18} color="#fb8500" style={{ marginLeft: 12, marginRight: 4 }} />
            <Text style={styles.eventInfoText}>{event.participants} participantes</Text>
          </View>
          <Text style={styles.eventOrganizer}>Organizado por: {event.organizer}</Text>
          <View style={styles.eventActionsRow}>
            <TouchableOpacity style={styles.participateButton}>
              <Text style={styles.participateButtonText}>Participar</Text>
            </TouchableOpacity>
            <MaterialCommunityIcons name="heart-outline" size={22} color="#fb8500" style={{ marginLeft: 12 }} />
            <MaterialCommunityIcons name="share-variant" size={22} color="#219ebc" style={{ marginLeft: 12 }} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  createButton: {
    backgroundColor: '#fb8500',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 12,
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  createButtonText: {
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
  extraFiltersRow: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 8,
    gap: 8,
  },
  extraFilterButton: {
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    width: '92%',
    maxWidth: 370,
    alignSelf: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  eventCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    justifyContent: 'flex-end',
  },
  eventCategory: {
    backgroundColor: '#e0f7fa',
    color: '#219ebc',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 2,
  },
  eventDescription: {
    color: '#22223b',
    fontSize: 13,
    marginBottom: 8,
  },
  eventInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  eventInfoText: {
    color: '#457b9d',
    fontSize: 13,
    marginRight: 8,
  },
  eventOrganizer: {
    color: '#457b9d',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 8,
  },
  eventActionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  participateButton: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  participateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
