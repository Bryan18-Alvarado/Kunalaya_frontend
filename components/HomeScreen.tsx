import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Image source={require('../assets/images/kunalaya-logo.png')} style={{ width: 100, height: 36, resizeMode: 'contain' }} />
            <View style={{ flex: 1 }} />
            <MaterialCommunityIcons name="account-outline" size={24} color="#22223b" style={{ marginRight: 8 }} />
            <MaterialCommunityIcons name="menu" size={24} color="#22223b" />
          </View>
        </View>

        <Text style={styles.title}>¡Bienvenido a Kunalaya!</Text>
        <Text style={styles.subtitle}>Descubre, comparte y preserva las tradiciones y saberes populares de Nicaragua</Text>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <MaterialCommunityIcons name="account-group" size={28} color="#219ebc" style={{ marginBottom: 2 }} />
            <Text style={styles.statNumber}>1,247</Text>
            <Text style={styles.statLabel}>Relatos Compartidos</Text>
          </View>
          <View style={styles.statCard}>
            <MaterialCommunityIcons name="map-marker" size={28} color="#fb8500" style={{ marginBottom: 2 }} />
            <Text style={styles.statNumber}>89</Text>
            <Text style={styles.statLabel}>Lugares Registrados</Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <MaterialCommunityIcons name="calendar" size={28} color="#ffb703" style={{ marginBottom: 2 }} />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Eventos Próximos</Text>
          </View>
          <View style={styles.statCard}>
            <MaterialCommunityIcons name="book-open-variant" size={28} color="#219ebc" style={{ marginBottom: 2 }} />
            <Text style={styles.statNumber}>456</Text>
            <Text style={styles.statLabel}>Saberes Populares</Text>
          </View>
        </View>
        <View style={styles.quickActionsCard}>
          <Text style={styles.quickActionsTitle}>+ Acciones Rápidas</Text>
          <Text style={styles.quickActionsSubtitle}>Comparte tu conocimiento con la comunidad</Text>
          <TouchableOpacity style={styles.shareButton}>
            <MaterialCommunityIcons name="account-group" size={20} color="#fff" style={{ marginRight: 6 }} />
            <Text style={styles.shareButtonText}>Compartir Relato</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonOrange}>
            <MaterialCommunityIcons name="map-marker" size={20} color="#fb8500" style={{ marginRight: 6 }} />
            <Text style={styles.actionButtonTextOrange}>Agregar Lugar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonYellow}>
            <MaterialCommunityIcons name="calendar" size={20} color="#ffb703" style={{ marginRight: 6 }} />
            <Text style={styles.actionButtonTextYellow}>Crear Evento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButtonBlue}>
            <MaterialCommunityIcons name="book-open-variant" size={20} color="#219ebc" style={{ marginRight: 6 }} />
            <Text style={styles.actionButtonTextBlue}>Añadir Saber</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Relatos Recientes</Text>
            <Text style={styles.sectionLink}>Ver todos</Text>
          </View>
          <View style={styles.storyList}>
            <View style={styles.storyItem}>
              <Text style={styles.storyTitle}>La Leyenda del Cadejo en León</Text>
              <Text style={styles.storyMeta}>Por María González • León, Nicaragua</Text>
              <View style={styles.storyStatsRow}>
                <MaterialCommunityIcons name="heart-outline" size={16} color="#fb8500" style={{ marginRight: 4 }} />
                <Text style={styles.storyStat}>24</Text>
                <MaterialCommunityIcons name="comment-outline" size={16} color="#219ebc" style={{ marginLeft: 8, marginRight: 4 }} />
                <Text style={styles.storyStat}>8</Text>
                <MaterialCommunityIcons name="eye-outline" size={16} color="#457b9d" style={{ marginLeft: 8, marginRight: 4 }} />
                <Text style={styles.storyStat}>156</Text>
                <Text style={styles.storyTime}>hace 2 horas</Text>
              </View>
            </View>
            <View style={styles.storyItem}>
              <Text style={styles.storyTitle}>Receta Tradicional: Nacatamal de mi Abuela</Text>
              <Text style={styles.storyMeta}>Por Carlos Mendoza • Masaya, Nicaragua</Text>
              <View style={styles.storyStatsRow}>
                <MaterialCommunityIcons name="heart-outline" size={16} color="#fb8500" style={{ marginRight: 4 }} />
                <Text style={styles.storyStat}>31</Text>
                <MaterialCommunityIcons name="comment-outline" size={16} color="#219ebc" style={{ marginLeft: 8, marginRight: 4 }} />
                <Text style={styles.storyStat}>12</Text>
                <MaterialCommunityIcons name="eye-outline" size={16} color="#457b9d" style={{ marginLeft: 8, marginRight: 4 }} />
                <Text style={styles.storyStat}>203</Text>
                <Text style={styles.storyTime}>hace 5 horas</Text>
              </View>
            </View>
            <View style={styles.storyItem}>
              <Text style={styles.storyTitle}>Festividad de Santo Domingo en Managua</Text>
              <Text style={styles.storyMeta}>Por Ana Rodríguez • Managua, Nicaragua</Text>
              <View style={styles.storyStatsRow}>
                <MaterialCommunityIcons name="heart-outline" size={16} color="#fb8500" style={{ marginRight: 4 }} />
                <Text style={styles.storyStat}>18</Text>
                <MaterialCommunityIcons name="comment-outline" size={16} color="#219ebc" style={{ marginLeft: 8, marginRight: 4 }} />
                <Text style={styles.storyStat}>6</Text>
                <MaterialCommunityIcons name="eye-outline" size={16} color="#457b9d" style={{ marginLeft: 8, marginRight: 4 }} />
                <Text style={styles.storyStat}>98</Text>
                <Text style={styles.storyTime}>hace 1 día</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.sectionCard}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Próximos Eventos</Text>
            <Text style={styles.sectionLink}>Ver calendario</Text>
          </View>
          <View style={styles.eventList}>
            <View style={styles.eventItem}>
              <Text style={styles.eventTitle}>Festival de Palo de Mayo</Text>
              <Text style={styles.eventMeta}>Bluefields</Text>
              <Text style={styles.eventTag}>Festividad</Text>
              <Text style={styles.eventDate}>30 abr</Text>
            </View>
            <View style={styles.eventItem}>
              <Text style={styles.eventTitle}>Feria de Artesanías</Text>
              <Text style={styles.eventMeta}>Granada</Text>
              <Text style={styles.eventTag}>Cultural</Text>
              <Text style={styles.eventDate}>14 abr</Text>
            </View>
            <View style={styles.eventItem}>
              <Text style={styles.eventTitle}>Encuentro de Cuentacuentos</Text>
              <Text style={styles.eventMeta}>Estelí</Text>
              <Text style={styles.eventTag}>Educativo</Text>
              <Text style={styles.eventDate}>19 abr</Text>
            </View>
          </View>
        </View>
        <View style={styles.quoteCard}>
          <MaterialCommunityIcons name="star-outline" size={24} color="#fb8500" style={{ marginBottom: 4 }} />
          <Text style={styles.quoteText}>
            "Las tradiciones no se heredan, se conquistan"
          </Text>
          <Text style={styles.quoteAuthor}>Proverbio popular nicaragüense</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
  },
  scrollContent: {
    paddingBottom: 90,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  header: {
    paddingTop: 36,
    paddingBottom: 8,
    paddingHorizontal: 4,
    backgroundColor: '#8ecae6',
    width: '100%',
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 8,
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    marginHorizontal: 6,
    alignItems: 'center',
    width: 150,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22223b',
    marginBottom: 2,
  },
  statLabel: {
    color: '#457b9d',
    fontSize: 13,
    textAlign: 'center',
  },
  quickActionsCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    width: '100%',
    maxWidth: 370,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignItems: 'center',
  },
  quickActionsTitle: {
    color: '#219ebc',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
    alignSelf: 'flex-start',
  },
  quickActionsSubtitle: {
    color: '#22223b',
    fontSize: 13,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  shareButton: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
    justifyContent: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  actionButtonOrange: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#fb8500',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
    justifyContent: 'center',
  },
  actionButtonTextOrange: {
    color: '#fb8500',
    fontWeight: 'bold',
    fontSize: 15,
  },
  actionButtonYellow: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#ffb703',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
    justifyContent: 'center',
  },
  actionButtonTextYellow: {
    color: '#ffb703',
    fontWeight: 'bold',
    fontSize: 15,
  },
  actionButtonBlue: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: '#219ebc',
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 8,
    justifyContent: 'center',
  },
  actionButtonTextBlue: {
    color: '#219ebc',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    width: '100%',
    maxWidth: 370,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  sectionTitle: {
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionLink: {
    color: '#219ebc',
    fontWeight: 'bold',
    fontSize: 13,
  },
  storyList: {
    marginBottom: 4,
  },
  storyItem: {
    marginBottom: 10,
  },
  storyTitle: {
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 14,
  },
  storyMeta: {
    color: '#457b9d',
    fontSize: 12,
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
  storyTime: {
    color: '#bdbdbd',
    fontSize: 11,
    marginLeft: 8,
  },
  eventList: {
    marginBottom: 4,
  },
  eventItem: {
    marginBottom: 10,
  },
  eventTitle: {
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 14,
  },
  eventMeta: {
    color: '#457b9d',
    fontSize: 12,
    marginBottom: 2,
  },
  eventTag: {
    backgroundColor: '#ffe5b4',
    color: '#fb8500',
    fontSize: 11,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 2,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
  },
  eventDate: {
    color: '#22223b',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  quoteCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    width: '100%',
    maxWidth: 370,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    alignItems: 'center',
  },
  quoteText: {
    color: '#22223b',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  quoteAuthor: {
    color: '#457b9d',
    fontSize: 13,
    textAlign: 'center',
  },
});
