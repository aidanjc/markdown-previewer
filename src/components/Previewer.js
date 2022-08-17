export default function Previewer ({ previewText }) {
  return (
    <div className='preview-container'>
      <div className='preview-header'>
        <h2>Previewer</h2>
      </div>
      <div 
        id='preview'
        className='preview-content'
        dangerouslySetInnerHTML={{ __html: previewText }}
      />
    </div>
  );
}
