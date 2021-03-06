import './App.css';
import { Uploader } from './Uploader.js';
import { useState } from 'react';
import { Results } from './Results.js';


const style = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}

function App() {
  // State for IGC and XCTSK uploads
  const [igc, setIgc] = useState();
  const [tsk, setTsk] = useState();

  // Uploader views
  const igcUploader = Uploader({
    message: "Upload igc file",
    file: igc,
    fileSetter: setIgc,
  });
  const xctskUploader = Uploader({
    message: "Upload xctsk",
    file: tsk,
    fileSetter: setTsk,
    inUrl: true,
  });

  // Component for uploading the files
  let pageURL = new URL(window.location);
  pageURL.hash = "";
  let content = <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
    <h1><a href={pageURL.toString()} style={{ color: 'white' }}>Paraglider Task Checker</a></h1>
    <div style={style}>
      {igcUploader}
      {xctskUploader}
    </div>
  </div>;

  // Component for showing the results given the files
  if (tsk != null && igc != null) {
    content = <Results tsk={tsk} igc={igc} />;
  }


  return (

    <div className="App">
      <header className="App-header">
        {content}
      </header>
    </div>
  );
}

export default App;
