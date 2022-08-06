export default function Editor () {
  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <h2>Editor</h2>
      </div>
      <textarea 
        name='editor' 
        rows='10'
        cols='80'
      />
    </div>
  );
}
