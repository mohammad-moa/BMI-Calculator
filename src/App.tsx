import { FC, Suspense } from "react";

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <h1 className="font-bold text-mint-500">سلام</h1>
    </Suspense>
  );
};

export default App;
