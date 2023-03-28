
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../layouts/chapter.css";
import content from "./../contents/sqlContent";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/ext-language_tools";
import { runSqlCode } from "./../utils/sqlite";
function SQL() {
  // Max number of lines in editor
  const maxLinesAce = 50;

  // Edit inline sql code
  const [code_1, setcode1] = useState(content.example_code_1);
  const [code_2, setcode2] = useState(content.example_code_2);
  const [code_3, setcode3] = useState(content.example_code_3);
  const [code_4, setcode4] = useState(content.example_code_4);
  const [code_5, setcode5] = useState(content.example_code_5);

  return (
    <div id="content" className="content">
      <main>
        <h1 id="sql-basics">
          <a className="header" href="#sql-basics">
            {content.title}
          </a>
        </h1>
        <div>
          <h3 id="create-the-table">
            <a className="header" href="#create-the-table">
              {content.heading_1}
            </a>
          </h3>
          <p>{content.desc_1}</p>
          <blockquote>
            <p>{content.code_format_1}</p>
          </blockquote>
          <p>{content.example_desc_1}</p>
          <pre className="playground language-sql">
            <div className="buttons">
              <button
                onClick={runSqlCode(code_1)}
                className="fa fa-play play-button"
                hidden=""
                title="Run this code"
                aria-label="Run this code"
              ></button>
            </div>
            <AceEditor
              mode="mysql"
              highlightActiveLine={false}
              id={content.id_1}
              theme="kuroir"
              value={code_1}
              maxLines={maxLinesAce}
              className="w-100 language-sql editable ace_editor hljs ace-dawn"
              name={content.id_1}
              onChange={(value) => setcode1(value)}
              showGutter={false}
              fontSize={16}
              editorProps={{ $blockScrolling: false }}
            />
            <div className="result hljs language-bash result-1"></div>
          </pre>
        </div>
        <div>
          <h3 id="create-the-table">
            <a className="header" href="#create-the-table">
              {content.heading_2}
            </a>
          </h3>
          <p>{content.desc_2}</p>
          <blockquote>
            <p>{content.code_format_2}</p>
          </blockquote>
          <p>{content.example_desc_2}</p>
          <pre className="playground language-sql">
            <div className="buttons">
              <button
                onClick={runSqlCode(code_2)}
                className="fa fa-play play-button"
                hidden=""
                title="Run this code"
                aria-label="Run this code"
              ></button>
            </div>
            <AceEditor
              mode="mysql"
              highlightActiveLine={false}
              id={content.id_2}
              theme="kuroir"
              value={code_2}
              maxLines={maxLinesAce}
              className="w-100 language-sql editable ace_editor hljs ace-dawn"
              onChange={(value) => setcode2(value)}
              name={content.id_2}
              showGutter={false}
              fontSize={16}
              editorProps={{ $blockScrolling: false }}
            />
            <div className="result hljs language-bash result-2"></div>
          </pre>
        </div>
        <div>
          <h3 id="create-the-table">
            <a className="header" href="#create-the-table">
              {content.heading_3}
            </a>
          </h3>
          <p>{content.desc_3}</p>
          <blockquote>
            <p>{content.code_format_3}</p>
          </blockquote>
          <p>{content.example_desc_3}</p>
          <pre className="playground language-sql">
            <div className="buttons">
              <button
                onClick={runSqlCode(code_3)}
                className="fa fa-play play-button"
                hidden=""
                title="Run this code"
                aria-label="Run this code"
              ></button>
            </div>
            <AceEditor
              mode="mysql"
              highlightActiveLine={false}
              id={content.id_3}
              theme="kuroir"
              value={code_3}
              maxLines={maxLinesAce}
              className="w-100 language-sql editable ace_editor hljs ace-dawn"
              onChange={(value) => setcode3(value)}
              name={content.id_3}
              showGutter={false}
              fontSize={16}
              editorProps={{ $blockScrolling: false }}
            />
            <div className="result hljs language-bash result-3"></div>
          </pre>
        </div>
        <div>
          <h3 id="create-the-table">
            <a className="header" href="#create-the-table">
              {content.heading_4}
            </a>
          </h3>
          <p>{content.desc_4}</p>
          <blockquote>
            <p>{content.code_format_4}</p>
          </blockquote>
          <p>{content.example_desc_4}</p>
          <pre className="playground language-sql">
            <div className="buttons">
              <button
                onClick={runSqlCode(code_4)}
                className="fa fa-play play-button"
                hidden=""
                title="Run this code"
                aria-label="Run this code"
              ></button>
            </div>
            <AceEditor
              mode="mysql"
              highlightActiveLine={false}
              id={content.id_4}
              theme="kuroir"
              value={code_4}
              maxLines={maxLinesAce}
              className="w-100 language-sql editable ace_editor hljs ace-dawn"
              onChange={(value) => setcode4(value)}
              name={content.id_4}
              showGutter={false}
              fontSize={16}
              editorProps={{ $blockScrolling: false }}
            />
            <div className="result hljs language-bash result-4"></div>
          </pre>
        </div>
        <div>
          <h3 id="create-the-table">
            <a className="header" href="#create-the-table">
              {content.heading_5}
            </a>
          </h3>
          <pre className="playground language-sql">
            <div className="buttons">
              <button
                onClick={runSqlCode(code_5)}
                className="fa fa-play play-button"
                hidden=""
                title="Run this code"
                aria-label="Run this code"
              ></button>
            </div>
            <AceEditor
              mode="mysql"
              highlightActiveLine={false}
              id={content.id_5}
              theme="kuroir"
              value={code_5}
              maxLines={maxLinesAce}
              className="w-100 language-sql editable ace_editor hljs ace-dawn"
              onChange={(value) => setcode5(value)}
              name={content.id_5}
              showGutter={false}
              fontSize={16}
              editorProps={{ $blockScrolling: false }}
            />
          </pre>
        </div>
      </main>
      <nav className="nav-wrapper" aria-label="Page navigation">
        <Link to="/chapter2" className="nav-chapters previous">
          <i className="fa fa-angle-left"></i>
        </Link>
      </nav>
    </div>
  );
}

export default SQL;
