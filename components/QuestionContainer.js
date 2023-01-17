import React, { useEffect, useState, useRef } from "react";
import { AnswerContainer } from "@/components";
import { useRouter } from "next/router";

export default function QuestionContainer({ questions, route }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [generatingResults, setGeneratingResults] = useState(false);

  let totalQuestions = questions.length;
  let currentQuestion = questions[currentIndex];
  let correctAnswer = questions[currentIndex]
    ? questions[currentIndex].correct
    : " ";

  const router = useRouter();

  function handleAnswer(answer) {
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
      setResults((prev) => prev + 1);
    }
    setLoading(true);
    setCurrentIndex((prev) => prev + 1);
  }

  useEffect(() => {
    let timer;

    if (currentIndex === totalQuestions) {
      setGeneratingResults(true);
      timer = setTimeout(() => {
        router.push(`/disease/${route}/results-${results}-${totalQuestions}`);
      }, 2000);
    }

    if (loading) {
      timer = setTimeout(() => {
        if (loading) {
          setLoading(false);
        }
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [loading, currentIndex, results, route, router, totalQuestions]);

  if (generatingResults) {
    return (
      <div className="question-wrapper">
        <div className="questionContainer">
          <p>Generating Results...</p>
          <div className="loading"></div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="question-wrapper">
        <div className="questionContainer">
          <p>Loading...</p>
          <div className="loading"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="question-wrapper">
      <div className="questionContainer">
        <h3>{currentQuestion.question}</h3>
        {currentQuestion.answers.map((answer, i) => (
          <AnswerContainer key={i} value={answer} handleAnswer={handleAnswer} />
        ))}
      </div>
    </div>
  );
}
