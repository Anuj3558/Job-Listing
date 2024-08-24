import axios from "axios";
export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  python: "3.10.0",
  java: "15.0.2",
  cpp: "10.2.0", // Example version for C++
};

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async(language,sourceCode)=>{
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          
          content: sourceCode,
        },
      ],
    });
    return response.data;
}