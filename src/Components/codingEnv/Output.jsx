import React, { useState } from "react";
import { executeCode } from "./api";
import { Bars } from "react-loader-spinner"; // Make sure to install react-loader-spinner or use any other loader

const Output = ({ editorRef, language }) => {
  const [output, setOutput] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    setLoading(true);
    setError(null);
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output);
    } catch (error) {
      setError("An error occurred while executing the code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-1/2 text-white rounded-lg shadow-lg h-[75vh]">
      <button
        onClick={runCode}
        className="bg-blue-500 text-white p-2 mb-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Run Code
      </button>
      <div className="bg-gray-800 mx-2 p-4 h-full overflow-auto">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Bars color="#ffffff" height={40} width={40} />
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div>{output || "Click Run Code to see the output here"}</div>
        )}
      </div>
    </div>
  );
};

export default Output;
