import { FC, Suspense } from "react";
import "./App.css";

const App: FC = () => {
  return <Suspense fallback={<>Loading ...</>}></Suspense>;
};

export default App;
