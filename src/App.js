import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.getElementById('editor')?.focus();
    document.getElementById('editor')?.click();
    setTimeout(() => {
      document.getElementById('editor')?.focus();
      document.getElementById('editor')?.click();
      console.log('detalle', document.getElementById('editor'));      
  }, 400);
    console.log('heyyy');
  })
  return (
      <textarea id="editor" autoFocus></textarea>
  );
}

export default App;
