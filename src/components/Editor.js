export default function Editor ({ editorText, onEditorTextChange }) {
  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <h2>Editor</h2>
      </div>
      <textarea 
        id='editor'
        name='editor' 
        rows='10'
        cols='80'
        onChange={(e) => onEditorTextChange(e.target.value)}
      >
        { editorText }
      </textarea>
    </div>
  );
}
