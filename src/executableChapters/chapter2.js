import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../layouts/chapter.css";
import "../layouts/font-awesome.css";
import { PYTHON_PANDAS_QUERY, PYTHON_SIMPLE_BAR_GRAPH, PYTHON_SIMPLE_LINE_GRAPH, PYTHON_SIMPLE_PIE_GRAPH} from "../contents/codeSnips";
import contents from "../contents/contentSnips";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/ext-language_tools";
import PropTypes from 'prop-types'

const Datascience = (props) => {
  const [pythonPandasQuery, setPythonPandasQuery] =
    useState(PYTHON_PANDAS_QUERY);
  const [pythonBarGraph, setPythonBarGraph] = useState(PYTHON_SIMPLE_BAR_GRAPH);
  const [pythonLineGraph, setPythonLineGraph] = useState(
    PYTHON_SIMPLE_LINE_GRAPH
  );
  const [pythonPieGraph, setPythonPieGraph] = useState(PYTHON_SIMPLE_PIE_GRAPH);
  const [output, setOutput] = useState(null);
  const [output1, setOutput1] = useState(null);
  const [output2, setOutput2] = useState(null);
  const [output3, setOutput3] = useState(null);
  const maxLinesAce = 50;
  
  const runPythonPandasQuery = async () => {
    setOutput("Running...");
    props
    .generator(pythonPandasQuery)
    .then((result) => {
      setOutput(result);
    })
    .catch((error) => {
      console.log(error)
    })
  };
  const runPythonBarGraph = async () => {
    setOutput1("Running...");
    props
    .generator(pythonBarGraph)
    .then((result) => {
      setOutput1(result);
    })
    .catch((error) => {
      console.log(error)
    })
  };
  const runPythonLineGraph = async () => {
    setOutput2("Running...");
    props
    .generator(pythonLineGraph)
    .then((result) => {
      setOutput2(result);
    })
    .catch((error) => {
      console.log(error)
    })
  };
  const runPythonPieGraph = async () => {
    setOutput3("Running...");
    props
    .generator(pythonPieGraph)
    .then((result) => {
      setOutput3(result);
    })
    .catch((error) => {
      console.log(error)
    })
  };
  return (
    <div id="content" className="content">
      <main>
        <h1 id="introduction-to-pandas">
          <a className="header" href="#introduction-to-pandas">
            {contents.chapter2.HEADING_4}
          </a>
        </h1>
        <p>{contents.chapter2.CONTENT_11}</p>
        <p>{contents.chapter2.CONTENT_12}</p>
        <pre className="playground language-python">
          <div className="buttons">
            <button
              onClick={runPythonPandasQuery}
              className="fa fa-play play-button"
              hidden=""
              title="Run this code"
              aria-label="Run this code"
            ></button>
          </div>
          <AceEditor
            mode="python"
            id="pythonPandasQuery"
            theme="kuroir"
            highlightActiveLine={false}
            value={pythonPandasQuery}
            maxLines={maxLinesAce}
            className="w-100 language-python hljs ace-dawn"
            showGutter={false}
            fontSize={16}
            onChange={(value) => setPythonPandasQuery(value)}
            name="pythonPandasQuery"
            editorProps={{ $blockScrolling: true }}
          />
          <div>
            {output && (
              <textarea
                name=""
                id="txt"
                className="resultTextareaStyle w-100"
                value={output}
                cols="91"
                readOnly
              ></textarea>
            )}
          </div>
        </pre>

        <h1 id="visualizing-data-using-matplotlib">
          <a className="header" href="#visualizing-data-using-matplotlib">
            {contents.chapter2.HEADING_5}
          </a>
        </h1>
        <p>{contents.chapter2.CONTENT_13}</p>
        <pre className="playground language-python">
          <div className="buttons">
            <button
              onClick={runPythonBarGraph}
              className="fa fa-play play-button"
              hidden=""
              title="Run this code"
              aria-label="Run this code"
            ></button>
          </div>
          <AceEditor
            mode="python"
            id="pythonBarGraph"
            theme="kuroir"
            highlightActiveLine={false}
            showGutter={false}
            fontSize={16}
            value={pythonBarGraph}
            maxLines={maxLinesAce}
            className="w-100 language-python hljs ace-dawn"
            onChange={(value) => setPythonBarGraph(value)}
            name="pythonBarGraph"
            editorProps={{ $blockScrolling: true }}
          />
          <div>
            {output1 && (
              <textarea
                name=""
                id="txt"
                className="resultTextareaStyle w-100"
                value={output1}
                cols="91"
                readOnly
              ></textarea>
            )}
          </div>
        </pre>
        <p>{contents.chapter2.CONTENT_14}</p>

        <pre className="playground language-python">
          <div className="buttons">
            <button
              onClick={runPythonLineGraph}
              className="fa fa-play play-button"
              hidden=""
              title="Run this code"
              aria-label="Run this code"
            ></button>
          </div>
          <AceEditor
            mode="python"
            id="pythonLineGraph"
            theme="kuroir"
            highlightActiveLine={false}
            value={pythonLineGraph}
            maxLines={maxLinesAce}
            className="w-100 language-python hljs ace-dawn"
            showGutter={false}
            fontSize={16}
            onChange={(value) => setPythonLineGraph(value)}
            name="pythonLineGraph"
            editorProps={{ $blockScrolling: true }}
          />
          <div>
            {output2 && (
              <textarea
                name=""
                id="txt"
                className="resultTextareaStyle w-100"
                value={output2}
                cols="91"
                readOnly
              ></textarea>
            )}
          </div>
        </pre>

        <p>{contents.chapter2.CONTENT_15}</p>

        <pre className="playground language-python">
          <div className="buttons">
            <button
              onClick={runPythonPieGraph}
              className="fa fa-play play-button"
              hidden=""
              title="Run this code"
              aria-label="Run this code"
            ></button>
          </div>
          <AceEditor
            mode="python"
            id="pythonPieGraph"
            theme="kuroir"
            highlightActiveLine={false}
            showGutter={false}
            fontSize={16}
            value={pythonPieGraph}
            maxLines={maxLinesAce}
            className="w-100 language-python hljs ace-dawn"
            onChange={(value) => setPythonPieGraph(value)}
            name="pythonPieGraph"
            editorProps={{ $blockScrolling: true }}
          />
          <div>
            {output3 && (
              <textarea
                name=""
                id="txt"
                className="resultTextareaStyle w-100"
                value={output3}
                cols="91"
                readOnly
              ></textarea>
            )}
          </div>
        </pre>
      </main>
      <nav className="nav-wrapper" aria-label="Page navigation">
        <Link to="/chapter3" className="nav-chapters next">
          <i className="fa fa-angle-right"></i>
        </Link>
        <Link to="/chapter1" className="nav-chapters previous">
          <i className="fa fa-angle-left"></i>
        </Link>
      </nav>
    </div>
  );
}

Datascience.propTypes = {
  generator: PropTypes.func
}

export default Datascience;
