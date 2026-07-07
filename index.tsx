import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function App() {
  // State variable to store the current score
  const [score, setScore] = useState(0);

  // Function that runs when Start Game is pressed
  const startGame = () => {
    setScore(0);
    alert("Game Started!");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>🐦 Flappy Bird</Text>

      {/* Score Card */}
      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>Current Score</Text>
        <Text style={styles.score}>{score}</Text>
      </View>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={startGame}
      >
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Main screen
  container: {
    flex: 1,
    backgroundColor: "#EAF4FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  // Game title
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 40,
  },

  // White score box
  scoreCard: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    paddingVertical: 25,
    borderRadius: 15,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    elevation: 5,
    marginBottom: 40,
  },

  // Current Score text
  scoreLabel: {
    fontSize: 18,
    color: "#6B7280",
    marginBottom: 10,
  },

  // Score number
  score: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#22C55E",
  },

  // Start button
  button: {
    backgroundColor: "#22C55E",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },

  // Button text
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});