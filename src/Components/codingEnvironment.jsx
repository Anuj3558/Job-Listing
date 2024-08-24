import React, { useState,useRef } from 'react';
import { Editor } from '@monaco-editor/react';
import Video from 'twilio-video'; // Make sure to configure Twilio Video properly

const RealTimeCodingAndVideo = () => {
  const [editorValue, setEditorValue] = useState('// Write your code here...');
  const [output, setOutput] = useState('');
  const editorRef = useRef(null);

  const handleCompile = () => {
    // Here you would typically send the editorValue to a backend or service for compilation
    // For demonstration, we'll just log it
    console.log('Compiling:', editorValue);
    setOutput('Compiled code will be shown here.');
  };

  const handleRun = () => {
    // Execute code logic here (e.g., sending to a server or using an in-browser compiler)
    // This is just a placeholder
    console.log('Running:', editorValue);
    setOutput('Output of the code will be shown here.');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 p-4">
        <div className="flex flex-col h-full border border-gray-300 rounded-md shadow-sm">
          <div className="flex-1">
            <Editor
              height="400px"
              defaultLanguage="javascript"
              defaultValue={editorValue}
              onChange={(value) => setEditorValue(value)}
              options={{ minimap: { enabled: false } }}
              onMount={(editor) => editorRef.current = editor}
            />
          </div>
          <div className="p-4 flex justify-between items-center border-t border-gray-300">
            <button
              onClick={handleCompile}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Compile
            </button>
            <button
              onClick={handleRun}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Run
            </button>
          </div>
        </div>
        <div className="mt-4 p-4 border border-gray-300 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Output:</h2>
          <pre>{output}</pre>
        </div>
      </div>
    </div>
  );
};

export default RealTimeCodingAndVideo;
