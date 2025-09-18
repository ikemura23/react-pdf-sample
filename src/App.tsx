import "./App.css";
import PdfViewer from "./components/PdfViewer";

function App() {
  return (
    <>
      <div className="app-header">
        <h1>宅配業務専用地図表示システム</h1>
      </div>

      <div className="content">
        <PdfViewer file="/test.pdf" />
      </div>
    </>
  );
}

export default App;
