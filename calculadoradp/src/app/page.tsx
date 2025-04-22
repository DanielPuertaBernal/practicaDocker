'use client';
import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      const entry = `${input} = ${result}`;
      setHistory((prev) => [entry, ...prev]);
      setInput(result.toString());
    } catch (error) {
      alert('Expresión inválida');
    }
  };

  return (
    <main className="calculator-container">
      <h1>Calculadora</h1>
      <input type="text" value={input} readOnly className="display" />
      <div className="buttons">
        {'1234567890+-*/.'.split('').map((char) => (
          <button key={char} onClick={() => handleClick(char)}>{char}</button>
        ))}
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
      <div className="history">
        <h2>Historial</h2>
        <ul>
          {history.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
