import React, { useState } from "react";


function App() {
  const [flashcards, setFlashcards] = useState(sample_flashcards)
  return (
    <h1> Hello, let us study for your civics exam!</h1>
  );
}

  const sample_flashcards = [
  {
    id: 1,
    question: 'Question one?',
    answer: 'a',
    options: [
      'a',
      'b',
      'c',
      'd'
    ]
  },
  {
    id: 2,
    question: 'Question two?',
    answer: 'd',
    options: [
      'a',
      'b',
      'c',
      'd'
    ]
  }
]
export default App;
