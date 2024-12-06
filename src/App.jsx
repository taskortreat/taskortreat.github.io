import { useState } from 'react';
import DocumentGenerator from './components/DocumentGenerator';

function App() {
  return (
    <div className="App">
      <h1>Task or Treat</h1>
      <p>Task or Treat is Halloween meets Giving Tuesday. Instead of going door to door for candy, you go door to door offering to do a task for someone or, if they prefer, give them a treat.</p>
      <p>Below is a generator for a note you can print out and give to whomever you want to do a Task or Treat for. The original ideas was that you could canvas your neighborhood, apartment building, etc. with notes and let people reach out to you.</p>
      <p>The benefits of giving are <a href="https://omny.fm/shows/a-slight-change-of-plans/get-happier-with-gretchen-rubin" target="_blank" rel="noopener noreferrer">well documented</a>, so do some good in the world and make yourself happier in the process.</p>
      <DocumentGenerator />
      If you like what we're doing, please consider <a href="https://buymeacoffee.com/looprock" target="_blank" rel="noopener noreferrer">donating</a>.
    </div>
  );
}

export default App; 
