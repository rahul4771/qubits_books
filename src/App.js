import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./executableChapters/chapter1";
import Datascience from "./executableChapters/chapter2";
import SQL from "./executableChapters/chapter3";
import "./App.scss";
import * as Comlink from 'comlink/dist/esm/comlink'
import PythonWorker from 'worker-loader!./pythonWorker.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pythonWorker: null
    }
  }

  async componentDidMount() {
    const pythonWorker = Comlink.wrap(new PythonWorker())
    await pythonWorker.setup()
    this.setState({ pythonWorker })
  }
  render() {
    const { pythonWorker } = this.state
    return (
      <div className="App">
        <Router>
          <Routes>
          {pythonWorker == null ? ( <><Route path="/" element={<Introduction />} />
            <Route path="/chapter1" element={<Introduction />} />
            <Route path="/chapter2" element={<Datascience />} /></> ) : (
              <><Route path="/" element={<Introduction generator={pythonWorker.pythonCodeRun} />} />
            <Route path="/chapter1" element={<Introduction generator={pythonWorker.pythonCodeRun} />} />
            <Route path="/chapter2" element={<Datascience generator={pythonWorker.pythonCodeRun} />} /></>)}
            <Route path="/chapter3" element={<SQL />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
