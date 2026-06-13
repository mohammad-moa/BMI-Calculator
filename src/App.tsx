import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'
// layouts
import { Footer, Header } from '@layouts'

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <div className='flex flex-col h-screen'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Suspense>
  )
}

export default App
