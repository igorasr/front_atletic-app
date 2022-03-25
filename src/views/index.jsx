import React from "react";
import useApi from "../hooks/useApi";
import useLocalStorage from "../hooks/useLocalStorage";

function App() {
  const { data } = useApi("/posts/");
  const [token, setToken] = useLocalStorage("token", "123456");

  return (
    <div
      style={{
        height: "1000px",
      }}
    ></div>
  );
}

export default App;
