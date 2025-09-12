import { Select } from '@components'
import { FC, Suspense } from 'react'

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <Select
        options={[
          {
            label: 'Test 1',
            value: '1',
          },
          {
            label: 'Test 2',
            value: '2',
          },
          {
            label: 'Test 3',
            value: '3',
          },
        ]}
      />
    </Suspense>
  )
}

export default App
