import React, { useState } from "react";
import FlashcardList from './FlashcardList';


function App() {
  const [flashcards, setFlashcards] = useState(sample_flashcards)
  
  return (

    <FlashcardList flashcards={flashcards} />
    
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
