import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import quizData from '../constants/historia_patria_quiz.json';

const QUIZ_TIME = 30;

export default function HistoriaPatriaQuizScreen() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);
  const [finished, setFinished] = useState(false);
  const timer = useRef();
  const [timedOut, setTimedOut] = useState(false);

  const quiz = quizData[0];
  const total = quiz.questions.length;
  const question = quiz.questions[current];

  useEffect(() => {
    if (finished) return;
    setTimeLeft(QUIZ_TIME);
    setTimedOut(false);
    timer.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer.current);
          setTimedOut(true);
          setShowResult(true);
          setShowExplanation(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer.current);
  }, [current, finished]);

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    setShowExplanation(true);
    clearInterval(timer.current);
    if (idx === question.answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < total) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowResult(false);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setShowExplanation(false);
    setScore(0);
    setFinished(false);
    setTimeLeft(QUIZ_TIME);
    setTimedOut(false);
  };

  const progress = ((current + (showResult ? 1 : 0)) / total) * 100;
  const timerProgress = (timeLeft / QUIZ_TIME) * 100;

  if (finished) {
    const percent = Math.round((score / total) * 100);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <MaterialCommunityIcons name="trophy-outline" size={48} color="#219ebc" style={{ alignSelf: 'center', marginBottom: 12 }} />
          <Text style={styles.resultTitle}>¡Juego Completado!</Text>
          <Text style={styles.resultSubtitle}>Has terminado el quiz de Historia Patria</Text>
          <Text style={styles.resultPercent}>{percent}%</Text>
          <Text style={styles.resultScore}>{score} de {total} respuestas correctas</Text>
          <View style={styles.resultBarBg}>
            <View style={[styles.resultBar, { width: `${percent}%` }]} />
          </View>
          <View style={styles.resultButtonsRow}>
            <TouchableOpacity style={[styles.resultButton, { marginRight: 6 }]} onPress={handleRestart}>
              <MaterialCommunityIcons name="refresh" size={20} color="#219ebc" style={{ marginRight: 6 }} />
              <Text style={styles.resultButtonText}>Jugar de Nuevo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.resultButton, { marginLeft: 6 }]} onPress={() => router.replace('/games')}>
              <MaterialCommunityIcons name="arrow-left" size={20} color="#219ebc" style={{ marginRight: 6 }} />
              <Text style={styles.resultButtonText}>Volver a Juegos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header y categoría */}
      <View style={styles.quizHeader}>
        <TouchableOpacity onPress={() => router.back()} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="arrow-left" size={22} color="#22223b" />
          <Text style={styles.backText}>Volver</Text>
        </TouchableOpacity>
        <View style={styles.categoryBadge}><Text style={styles.categoryBadgeText}>{quiz.title}</Text></View>
      </View>
      {/* Barra de progreso y temporizador */}
      <View style={styles.progressBox}>
        <View style={styles.progressRow}>
          <Text style={styles.progressText}>Pregunta {current + 1} de {total}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name="clock-outline" size={18} color={timeLeft <= 5 ? '#e63946' : '#457b9d'} />
            <Text style={[styles.timerText, timeLeft <= 5 && { color: '#e63946' }]}>{timeLeft}s</Text>
          </View>
        </View>
        <View style={styles.timerBarBg}>
          <View style={[styles.timerBar, { width: `${timerProgress}%` }]} />
        </View>
      </View>
      {/* Pregunta y opciones */}
      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{question.question}</Text>
        {question.options.map((opt, idx) => {
          let btnStyle = styles.optionButton;
          let txtStyle = styles.optionText;
          let icon = null;
          if (showResult) {
            if (idx === question.answer) {
              btnStyle = styles.optionButtonCorrect;
              txtStyle = styles.optionTextCorrect;
              icon = <MaterialCommunityIcons name="check" size={18} color="#219e6b" style={{ marginRight: 6 }} />;
            } else if (selected === idx && selected !== question.answer) {
              btnStyle = styles.optionButtonWrong;
              txtStyle = styles.optionTextWrong;
              icon = <MaterialCommunityIcons name="close" size={18} color="#e63946" style={{ marginRight: 6 }} />;
            } else {
              btnStyle = styles.optionButtonDisabled;
              txtStyle = styles.optionTextDisabled;
            }
          }
          return (
            <TouchableOpacity
              key={idx}
              style={btnStyle}
              onPress={() => handleSelect(idx)}
              disabled={showResult || timedOut}
              activeOpacity={0.8}
            >
              {icon}
              <Text style={txtStyle}>{opt}</Text>
            </TouchableOpacity>
          );
        })}
        {/* Explicación */}
        {showExplanation && (
          <View style={styles.explanationBox}>
            <Text style={styles.explanationTitle}>Explicación:</Text>
            <Text style={styles.explanationText}>{question.explanation}</Text>
          </View>
        )}
      </View>
      {/* Puntuación actual y siguiente */}
      <View style={styles.scoreBox}>
        <Text style={styles.scoreLabel}>Puntuación actual</Text>
        <Text style={styles.scoreValue}>{score}/{total}</Text>
      </View>
      {showResult && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>{current + 1 === total ? 'Finalizar' : 'Siguiente pregunta'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    paddingTop: 36,
    paddingHorizontal: 0,
  },
  quizHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  backText: {
    color: '#22223b',
    fontSize: 16,
    marginLeft: 4,
  },
  categoryBadge: {
    backgroundColor: '#ffd600',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  categoryBadgeText: {
    color: '#22223b',
    fontWeight: 'bold',
    fontSize: 14,
  },
  progressBox: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressText: {
    color: '#457b9d',
    fontSize: 14,
    fontWeight: 'bold',
  },
  timerText: {
    color: '#457b9d',
    fontSize: 14,
    marginLeft: 2,
    fontWeight: 'bold',
  },
  timerBarBg: {
    backgroundColor: '#bde0fe',
    height: 6,
    borderRadius: 6,
    width: '100%',
    marginTop: 2,
  },
  timerBar: {
    backgroundColor: '#219ebc',
    height: 6,
    borderRadius: 6,
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#22223b',
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#bde0fe',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    color: '#22223b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionButtonCorrect: {
    backgroundColor: '#b7f7d8',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTextCorrect: {
    color: '#219e6b',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionButtonWrong: {
    backgroundColor: '#ffd6d6',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTextWrong: {
    color: '#e63946',
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionButtonDisabled: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionTextDisabled: {
    color: '#bdbdbd',
    fontSize: 16,
    fontWeight: 'bold',
  },
  explanationBox: {
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    padding: 10,
    marginTop: 8,
  },
  explanationTitle: {
    fontWeight: 'bold',
    color: '#457b9d',
    fontSize: 14,
    marginBottom: 2,
  },
  explanationText: {
    color: '#22223b',
    fontSize: 14,
  },
  scoreBox: {
    backgroundColor: '#fff',
    borderRadius: 14,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  scoreLabel: {
    color: '#457b9d',
    fontSize: 15,
    fontWeight: 'bold',
  },
  scoreValue: {
    color: '#22223b',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#219ebc',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 18,
  },
  nextButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    backgroundColor: '#fff',
    borderRadius: 18,
    margin: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  resultTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#22223b',
    marginBottom: 6,
    textAlign: 'center',
  },
  resultSubtitle: {
    color: '#457b9d',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 12,
  },
  resultPercent: {
    color: '#219ebc',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 2,
  },
  resultScore: {
    color: '#22223b',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  resultBarBg: {
    backgroundColor: '#bde0fe',
    height: 8,
    borderRadius: 8,
    width: '100%',
    marginBottom: 16,
  },
  resultBar: {
    backgroundColor: '#219ebc',
    height: 8,
    borderRadius: 8,
  },
  resultButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    width: '100%',
  },
  resultButton: {
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    minWidth: 0,
  },
  resultButtonText: {
    color: '#219ebc',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
