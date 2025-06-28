import { TextField } from '@components'
import { FC, Suspense } from 'react'

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <TextField isError rows={1} label='dqwdw' helperText='dq' />
    </Suspense>
  )
}

export default App
