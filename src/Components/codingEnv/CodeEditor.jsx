import React, { useRef, useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";

export const CODE_SNIPPETS = {
  javascript: `
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alex");
`,
  cpp: `
#include <iostream>
using namespace std;

void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet("Alex");
    return 0;
}
`,
  java: `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Alex!");
    }
}
`,
  python: `
def greet(name):
    print("Hello, " + name + "!")

greet("Alex")
`,
};

const CodeEditor = ({ code, setCode }) => {
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const editorRef = useRef();

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage.toLowerCase());
    setValue(CODE_SNIPPETS[selectedLanguage.toLowerCase()] || ""); // Set default value if not found
  };

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col">
        <LanguageSelector language={language} onSelect={onSelect} />
        <MonacoEditor
          height="75vh"
          theme="vs-dark"
          language={language} // Set the language dynamically
          onMount={onMount}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </div>
      <Output editorRef={editorRef} language={language} />
    </div>
  );
};

export default CodeEditor;
