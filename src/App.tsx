import { FC, Suspense } from 'react'

const App: FC = () => {
  return <Suspense fallback={<>Loading ...</>}></Suspense>
}

export default App
