import React from "react";
import Loading from "./components/Loading";
import { useApi } from "./hooks/useApi";

function App() {
  const { data, isFetching } = useApi("32230460/json");

  return (
    <div>
      {isFetching && <Loading />}
      <h2>{data?.logradouro}</h2>
    </div>
  );
}

export default App;
