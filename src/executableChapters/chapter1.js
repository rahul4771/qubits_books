import React, { useState } from "react";
import "../layouts/chapter.css";
import {
  PYTHON_PRINT_HELLO,
  PYTHON_PRINT_HELLO_LOOP,
  PYTHON_PRIME_NUM,
  PYTHON_READ_FILE,
} from "../contents/codeSnips";
import contents from "../contents/contentSnips";
import { Link } from "react-router-dom";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/ext-language_tools";
import PropTypes from 'prop-types'

const Introduction = (props) => {
  const [pythonCodeHello, setPythonCodeHello] = useState(PYTHON_PRINT_HELLO);
  const [pythonCode1, setPythonCode1] = useState(PYTHON_PRINT_HELLO_LOOP);
  const [pythonCode2, setPythonCode2] = useState(PYTHON_PRIME_NUM);
  const [pythonCode3, setPythonCode3] = useState(PYTHON_READ_FILE);
  const [output, setOutput] = useState(null);
  const [output1, setOutput1] = useState(null);
  const [output2, setOutput2] = useState(null);
  const [output3, setOutput3] = useState(null);
  const maxLinesAce = 50;
  
  const runPythonHello = async () => {
    setOutput("Running...");
    props
    .generator(pythonCodeHello)
    .then((result) => {
      setOutput(result);
    })
    .catch((error) => {
      console.log(error)
    })
  };
  const runPython = async () => {
    setOutput1("Running...");
    props
      .generator(pythonCode1)
      .then((result) => {
        setOutput1(result);
      })
      .catch((error) => {
        console.log(error)
      })
  };
  const runPythonLoop = async () => {
    setOutput2("Running...");
    props
      .generator(pythonCode2)
      .then((result) => {
        setOutput2(result);
      })
      .catch((error) => {
        console.log(error)
      })
  };
  const runPythonFile = async () => {
    setOutput3("Running...");
    props
      .generator(pythonCode3)
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
        <h1 id="loops-in-python">
          <a className="header" href="#loops-in-python">
            {contents.chapter1.HEADING_1}
          </a>
        </h1>
        <p>{contents.chapter1.CONTENT_1}</p>
        <p>{contents.chapter1.CONTENT_2}</p>
        <p>
          {contents.chapter1.CONTENT_3}
          <code>{contents.chapter1.CONTENT_3_1}</code>
          {contents.chapter1.CONTENT_3_2}
        </p>
        <p>
          {contents.chapter1.CONTENT_4}
          <code>{contents.chapter1.CONTENT_4_1}</code>
          {contents.chapter1.CONTENT_4_2}
        </p>
        <pre className="playground language-python">
          <div className="buttons">
            <button
              onClick={runPythonHello}
              className="fa fa-play play-button"
              hidden=""
              title="Run this code"
              aria-label="Run this code"
            ></button>
          </div>
          <AceEditor
            mode="python"
            highlightActiveLine={false}
            id="pythonHello"
            theme="kuroir"
            value={pythonCodeHello}
            maxLines={maxLinesAce}
            className="w-100 language-python hljs ace-dawn"
            onChange={(value) => setPythonCodeHello(value)}
            name="pythonHello"
            showGutter={false}
            fontSize={16}
            editorProps={{ $blockScrolling: false }}
          />
          <div>
            {output && (
              <textarea
                name=""
                id="txt"
                data-testid="pythonResult1"
                className="resultTextareaStyle w-100"
                value={output}
                readOnly
              ></textarea>
            )}
          </div>
        </pre>
        <p>{contents.chapter1.CONTENT_5}</p>

        <pre className="playground language-python">
          <div className="buttons">
            <button
              onClick={runPython}
              className="fa fa-play play-button"
              hidden=""
              title="Run this code"
              aria-label="Run this code"
            ></button>
          </div>
          <AceEditor
            mode="python"
            highlightActiveLine={false}
            id="python1"
            theme="kuroir"
            value={pythonCode1}
            maxLines={maxLinesAce}
            className="w-100 language-python hljs ace-dawn"
            onChange={(value) => setPythonCode1(value)}
            name="python1"
            showGutter={false}
            fontSize={16}
            editorProps={{ $blockScrolling: false }}
          />
          <div>
            {output1 && (
              <textarea
                name=""
                id="txt"
                data-testid="pythonResult2"
                className="resultTextareaStyle w-100"
                value={output1}
                readOnly
              ></textarea>
            )}
          </div>
        </pre>
        <p>
          {contents.chapter1.CONTENT_6}
          <code>{contents.chapter1.CONTENT_6_1}</code>
          {contents.chapter1.CONTENT_6_2}
          <code>{contents.chapter1.CONTENT_6_3}</code>
          {contents.chapter1.CONTENT_6_4}
          <code>{contents.chapter1.CONTENT_6_5}</code>
          {contents.chapter1.CONTENT_6_6}
        </p>
        <h1 id="prime-number">
          <a className="header" href="#prime-number">
            {contents.chapter1.HEADING_2}
          </a>
        </h1>
        <p>{contents.chapter1.CONTENT_7}</p>
        <p>{contents.chapter1.CONTENT_8}</p>
        <p>{contents.chapter1.CONTENT_9}</p>
        <pre className="playground language-python">
          <div className="buttons">
            <button
              onClick={runPythonLoop}
              className="fa fa-play play-button"
              hidden=""
              title="Run this code"
              aria-label="Run this code"
            ></button>
          </div>
          <AceEditor
            mode="python"
            highlightActiveLine={false}
            id="python2"
            theme="kuroir"
            value={pythonCode2}
            maxLines={maxLinesAce}
            className="w-100 language-python hljs ace-dawn"
            onChange={(value) => setPythonCode2(value)}
            name="python2"
            showGutter={false}
            fontSize={16}
            editorProps={{ $blockScrolling: false }}
          />
          <div>
            {output2 && (
              <textarea
                name=""
                id="txt"
                data-testid="pythonResult3"
                className="resultTextareaStyle w-100"
                value={output2}
                readOnly
              ></textarea>
            )}
          </div>
        </pre>
        <h1 id="file-io">
          <a className="header" href="#file-io">
            {contents.chapter1.HEADING_3}
          </a>
        </h1>
        <p>{contents.chapter1.CONTENT_10}</p>

        <pre className="playground language-python">
          <div className="buttons">
            <button
              onClick={runPythonFile}
              className="fa fa-play play-button"
              hidden=""
              title="Run this code"
              aria-label="Run this code"
            ></button>
          </div>
          <AceEditor
            mode="python"
            highlightActiveLine={false}
            id="python3"
            theme="kuroir"
            value={pythonCode3}
            maxLines={maxLinesAce}
            className="w-100 language-python hljs"
            onChange={(value) => setPythonCode3(value)}
            name="python3"
            showGutter={false}
            fontSize={16}
            editorProps={{ $blockScrolling: false }}
          />
          <div>
            {output3 && (
              <textarea
                name=""
                id="txt"
                data-testid="pythonResult4"
                className="resultTextareaStyle w-100"
                value={output3}
                readOnly
              ></textarea>
            )}
          </div>
        </pre>
      </main>
      <nav className="nav-wrapper" aria-label="Page navigation">
        <Link to="/chapter2" className="nav-chapters next">
          <i className="fa fa-angle-right"></i>
        </Link>
      </nav>
    </div>
  );
}

Introduction.propTypes = {
  generator: PropTypes.func
}

export default Introduction;
