import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'
// layouts
import { Footer, Header } from '@layouts'

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <Header />
      <Outlet />
      <Footer />
    </Suspense>
  )
}

export default App
