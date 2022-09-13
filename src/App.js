import { useState } from 'react';
import { marked } from 'marked';
import Editor from './components/Editor.js';
import Previewer from './components/Previewer.js';

const placeholder = `# Welcome to my React Markdown Previewer!
## Preview your Markdown by writing it into the Editor!

![Cat Photo](https://images.unsplash.com/photo-1477349585464-d181ff510abb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)

> Photo by [Dan Gold](https://unsplash.com/photos/f8nTaC227lo) on [Unsplash](https://unsplash.com/)

Here's a list of cat breeds:
* Ragdoll
* Scottish Fold
* Siamese

In *Markdown* you can write inline code: \`<p>Meow!</p>\` 

You can also write code blocks:
\`\`\`
<!DOCTYPE html>
<html>
  <head>
    <title>Cat Photos</title>
  </head>
  <body>
    <h1>Cat Photos</h1>
  </body>
</html>
\`\`\`

Even tables: 

| Name          | Breed         | Age   |
| ------------- |:-------------:| -----:|
| Muffin        | Ragamuffin    |    10 |
| Tiger         | Bengal        |     6 |
| Poe           | Bombay        |     4 |

**Finally**, here's a link to my [GitHub](https://github.com/aidanjc)
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
        previewText={
          marked.parse(editorText)
        } 
      />
    </div>
  );
}
