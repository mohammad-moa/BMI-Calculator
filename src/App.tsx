import { TextField } from '@components'
import { FC, Suspense } from 'react'

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <TextField />
    </Suspense>
  )
}

export default App
