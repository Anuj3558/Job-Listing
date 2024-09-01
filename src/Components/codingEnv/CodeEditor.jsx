import React, { useRef, useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import io from "socket.io-client";
import Peer from "simple-peer";

const CodeEditor = () => {
  const CODE_SNIPPETS = {
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
    cout << "Hello, " + name + "!" << endl;
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

  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState(CODE_SNIPPETS["javascript"]);
  const [roomId, setRoomId] = useState("");
  const [inRoom, setInRoom] = useState(false);
  const editorRef = useRef();
  const videoRef = useRef();
  const peerRef = useRef();
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io("http://localhost:5000");

    socketRef.current.on("user-joined", (userId) => {
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: videoRef.current.srcObject,
      });

      peer.on("signal", (signal) => {
        socketRef.current.emit("signal", { target: userId, signal });
      });

      peer.on("stream", (stream) => {
        videoRef.current.srcObject = stream;
      });

      peerRef.current = peer;
    });

    socketRef.current.on("signal", (data) => {
      if (peerRef.current) {
        peerRef.current.signal(data.signal);
      } else {
        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream: videoRef.current.srcObject,
        });

        peer.on("signal", (signal) => {
          socketRef.current.emit("signal", { target: data.caller, signal });
        });

        peer.on("stream", (stream) => {
          videoRef.current.srcObject = stream;
        });

        peer.signal(data.signal);
        peerRef.current = peer;
      }
    });

    socketRef.current.on("code-update", (newCode) => {
      if (editorRef.current) {
        editorRef.current.setValue(newCode); // Update the code in the editor
      }
    });

    return () => {
      socketRef.current.disconnect();
      if (peerRef.current) {
        peerRef.current.destroy();
      }
    };
  }, []);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage.toLowerCase());
    setValue(CODE_SNIPPETS[selectedLanguage.toLowerCase()] || "");
  };

  const handleCodeChange = (newValue) => {
    setValue(newValue);
    socketRef.current.emit("code-update", newValue); // Emit the code change to the server
  };

  const joinRoom = async () => {
    if (roomId) {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      videoRef.current.srcObject = stream;
      socketRef.current.emit("join-room", roomId);
      setInRoom(true);
    }
  };

  const leaveRoom = () => {
    if (peerRef.current) {
      peerRef.current.destroy();
    }
    socketRef.current.emit("leave-room", roomId);
    videoRef.current.srcObject = null;
    setInRoom(false);
  };

  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col">
        <LanguageSelector language={language} onSelect={onSelect} />
        <MonacoEditor
          height="75vh"
          theme="vs-dark"
          language={language}
          onMount={onMount}
          value={value}
          onChange={handleCodeChange} // Handle code change
        />
        {!inRoom ? (
          <div className="flex flex-col mt-2">
            <input
              type="text"
              placeholder="Enter Room Code"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="p-2 border rounded"
            />
            <button
              onClick={joinRoom}
              className="mt-2 p-2 bg-blue-500 text-white rounded"
            >
              Join Room
            </button>
          </div>
        ) : (
          <button
            onClick={leaveRoom}
            className="mt-2 p-2 bg-red-500 text-white rounded"
          >
            Leave Room
          </button>
        )}
      </div>
      <Output editorRef={editorRef} language={language} />
      <div className="flex flex-col w-80 rounded-xl fixed bottom-6 right-6 z-50">
        <video className="rounded-lg" ref={videoRef} autoPlay playsInline />
      </div>
    </div>
  );
};

export default CodeEditor;
