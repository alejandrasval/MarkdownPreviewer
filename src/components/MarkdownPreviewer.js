import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./MarkdownPreviewer.css";

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState("markdown");
  return (
    <>
      <h1>Markdown Previewer</h1>
      <div className="markdown-container">
        <h2>Enter your text here:</h2>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <h2>See the result here:</h2>
        <ReactMarkdown children={markdown} className="markdown-preview" />
      </div>
    </>
  );
};

export default MarkdownPreviewer;
