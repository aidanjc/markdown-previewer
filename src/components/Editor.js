export default function Editor ({ editorText }) {
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
      >
        { editorText }
      </textarea>
    </div>
  );
}
