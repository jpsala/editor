import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.getElementById('editor')?.focus();
    document.getElementById('editor')?.click();
    setTimeout(() => {
      document.getElementById('editor')?.focus();
      document.getElementById('editor')?.click();
  }, 400);
  })
  return (
      <textarea id="editor" autoFocus></textarea>
  );
}

export default App;
