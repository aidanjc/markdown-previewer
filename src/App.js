//import { useState } from 'react'
import Editor from './components/Editor.js'
import Previewer from './components/Previewer.js'

export default function App() {
  return (
    <div className='container'>
      <h1>Markdown Previewer</h1>
      <Editor className='editor' />
      <Previewer className='previewer'/>
    </div>
  );
}
