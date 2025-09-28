import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const games = [
  {
    title: 'Tradiciones Nicaragüenses',
    difficulty: 'Fácil',
    questions: 10,
    description: 'Descubre las costumbres y tradiciones de nuestro pueblo',
    icon: 'party-popper',
    color: '#219ebc',
    badgeColor: '#b7f7d8',
    badgeTextColor: '#219e6b',
  },
  {
    title: 'Historia Patria',
    difficulty: 'Medio',
    questions: 10,
    description: 'Conoce los héroes y momentos importantes de Nicaragua',
    icon: 'bank',
    color: '#457b9d',
    badgeColor: '#fff3b0',
    badgeTextColor: '#bfa100',
  },
  {
    title: 'Cultura Popular',
    difficulty: 'Fácil',
    questions: 12,
    description: 'Explora la música, danza y arte nicaragüense',
    icon: 'palette',
    color: '#fb8500',
    badgeColor: '#b7f7d8',
    badgeTextColor: '#219e6b',
  },
  {
    title: 'Geografía Nacional',
    difficulty: 'Medio',
    questions: 20,
    description: 'Recorre los departamentos y lugares emblemáticos',
    icon: 'map',
    color: '#219ebc',
    badgeColor: '#fff3b0',
    badgeTextColor: '#bfa100',
  },
  {
    title: 'Leyendas y Mitos',
    difficulty: 'Difícil',
    questions: 8,
    description: 'Sumérgete en las historias fantásticas de Nicaragua',
    icon: 'emoticon-devil-outline',
    color: '#e63946',
    badgeColor: '#ffd6d6',
    badgeTextColor: '#e63946',
  },
  {
    title: 'Gastronomía Típica',
    difficulty: 'Fácil',
    questions: 10,
    description: 'Aprende sobre los platos tradicionales nicaragüenses',
    icon: 'silverware-fork-knife',
    color: '#219ebc',
    badgeColor: '#b7f7d8',
    badgeTextColor: '#219e6b',
  },
] as const;

const achievements = [
  {
    title: '¡Experto en Tradiciones!',
    description: 'Completaste el quiz de tradiciones con 100% de aciertos',
    icon: 'check-circle-outline',
    color: '#219e6b',
    bg: '#e6fff2',
  },
  {
    title: 'Racha de 5 días',
    description: 'Has jugado todos los días esta semana',
    icon: 'star-outline',
    color: '#457b9d',
    bg: '#e6f0ff',
  },
  {
    title: 'Explorador Cultural',
    description: 'Alcanzaste el nivel Explorador Cultural',
    icon: 'trophy-outline',
    color: '#ffb703',
    bg: '#fffbe6',
  },
] as const;

export default function GamesScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        {/* Header estático con logo */}
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Image source={require('../assets/images/kunalaya-logo.png')} style={{ width: 100, height: 36, resizeMode: 'contain' }} />
            <View style={{ flex: 1 }} />
            <MaterialCommunityIcons name="account-outline" size={24} color="#22223b" style={{ marginRight: 8 }} />
            <MaterialCommunityIcons name="menu" size={24} color="#22223b" />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Juegos Culturales</Text>
          <Text style={styles.subtitle}>Aprende sobre la identidad, soberanía y valores patrios de Nicaragua a través de divertidos juegos educativos</Text>
          {/* Tarjeta de progreso */}
          <View style={styles.progressCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <MaterialCommunityIcons name="trophy-outline" size={28} color="#fb8500" style={{ marginRight: 8 }} />
              <Text style={styles.progressTitle}>Explorador Cultural</Text>
              <View style={{ flex: 1 }} />
              <Text style={styles.streakNumber}>5</Text>
              <Text style={styles.streakLabel}>Racha actual</Text>
            </View>
            <View style={styles.progressStatsRow}>
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={styles.progressStatNumber}>12</Text>
                <Text style={styles.progressStatLabel}>Juegos completados</Text>
              </View>
              <View style={{ alignItems: 'center', flex: 1 }}>
                <Text style={styles.progressStatNumber}>89%</Text>
                <Text style={styles.progressStatLabel}>Respuestas correctas</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                  {[1,2,3,4].map(i => (
                    <MaterialCommunityIcons key={i} name="star" size={20} color="#fb8500" />
                  ))}
                  <MaterialCommunityIcons name="star-outline" size={20} color="#fb8500" />
                </View>
                <Text style={styles.levelLabel}>Nivel actual</Text>
              </View>
            </View>
          </View>
          {/* Lista de juegos */}
          {games.map((game, idx) => (
            <View key={idx} style={styles.gameCard}>
              <View style={styles.gameCardHeader}>
                <MaterialCommunityIcons name={game.icon} size={28} color={game.color} style={{ marginRight: 8 }} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.gameTitle} numberOfLines={2} ellipsizeMode="tail">{game.title}</Text>
                  <View style={styles.gameCardHeaderRow}>
                    <View style={[styles.difficultyBadge, { backgroundColor: game.badgeColor }]}> 
                      <Text style={[styles.difficultyText, { color: game.badgeTextColor }]}>{game.difficulty}</Text>
                    </View>
                    <Text style={styles.questionsText}>{game.questions} preguntas</Text>
                  </View>
                </View>
              </View>
              <Text style={styles.gameDescription}>{game.description}</Text>
              <TouchableOpacity
                style={styles.playButton}
                onPress={() => {
                  if (idx === 0) router.push('/tradiciones-quiz');
                  else if (idx === 1) router.push('/historia-patria-quiz');
                  else if (idx === 2) router.push('/cultura-popular-quiz');
                  // Aquí puedes agregar navegación a otros quizzes en el futuro
                }}
              >
                <MaterialCommunityIcons name="play" size={18} color="#fff" style={{ marginRight: 6 }} />
                <Text style={styles.playButtonText}>Jugar Ahora</Text>
              </TouchableOpacity>
            </View>
          ))}
          {/* Logros recientes */}
          <View style={styles.achievementsCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <MaterialCommunityIcons name="trophy-outline" size={22} color="#fb8500" style={{ marginRight: 6 }} />
              <Text style={styles.achievementsTitle}>Logros Recientes</Text>
            </View>
            {achievements.map((ach, idx) => (
              <View key={idx} style={[styles.achievementRow, { backgroundColor: ach.bg }]}> 
                <MaterialCommunityIcons name={ach.icon} size={20} color={ach.color} style={{ marginRight: 8 }} />
                <View>
                  <Text style={[styles.achievementTitle, { color: ach.color }]}>{ach.title}</Text>
                  <Text style={styles.achievementDesc}>{ach.description}</Text>
                </View>
              </View>
            ))}
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
  header: {
    paddingTop: 36,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: '#8ecae6',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 90,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#22223b',
    marginTop: 8,
    marginBottom: 2,
    textAlign: 'center',
  },
  subtitle: {
    color: '#457b9d',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '400',
  },
  progressCard: {
    backgroundColor: '#e0f7fa',
    borderRadius: 16,
    padding: 18,
    width: '100%',
    maxWidth: 370,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  progressTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#22223b',
    marginRight: 8,
  },
  streakNumber: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#219ebc',
    marginRight: 4,
  },
  streakLabel: {
    fontSize: 12,
    color: '#457b9d',
    marginLeft: 2,
  },
  progressStatsRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  progressStatNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#22223b',
  },
  progressStatLabel: {
    fontSize: 12,
    color: '#457b9d',
    textAlign: 'center',
  },
  levelLabel: {
    fontSize: 12,
    color: '#457b9d',
    marginLeft: 6,
  },
  gameCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    width: '100%',
    maxWidth: 370,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  gameCardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
    width: '100%',
  },
  gameCardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    flexWrap: 'wrap',
  },
  gameTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#22223b',
    marginBottom: 2,
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  difficultyBadge: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  difficultyText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  questionsText: {
    color: '#bdbdbd',
    fontSize: 12,
    marginLeft: 2,
    marginBottom: 2,
  },
  gameDescription: {
    color: '#22223b',
    fontSize: 13,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  playButton: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  playButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  achievementsCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    width: '100%',
    maxWidth: 370,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  achievementsTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#22223b',
  },
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  achievementTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  achievementDesc: {
    fontSize: 13,
    color: '#22223b',
  },
});
