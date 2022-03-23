import React from "react";
import "./App.css";
import Loading from "./components/Loading";
import { useApi } from "./hooks/useApi";

function App() {
  const { data, isFetching } = useApi("30150250/json");

  return (
    <div>
      {isFetching && <Loading />}
      <h2>{data?.logradouro}</h2>
    </div>
  );
}

export default App;
