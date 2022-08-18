import { useState } from 'react';
import { marked } from 'marked';
import Editor from './components/Editor.js';
import Previewer from './components/Previewer.js';

const placeholder = `# Welcome to my React Markdown Previewer!

`;


export default function App() {
  const [editorText, setEditorText] = useState(placeholder);

  return (
    <div className='container'>
      <h1>Markdown Previewer</h1>
      <Editor 
        className='editor' 
        editorText={editorText} 
        onEditorTextChange={setEditorText}
      />
      <Previewer 
        className='previewer'
        previewText={marked.parse(editorText)} 
      />
    </div>
  );
}
