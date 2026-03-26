import { Button, Dialog, Drawer } from '@components'
import { FC, Suspense, useState } from 'react'

const App: FC = () => {
  const [open, setOpen] = useState<'dialog' | 'drawer' | ''>('')
  return (
    <Suspense fallback={<>Loading ...</>}>
      <Button onClick={() => setOpen('dialog')}>Open Dialog</Button>
      <Button color='info' onClick={() => setOpen('drawer')}>
        Open Drawer
      </Button>
      <Dialog open={open === 'dialog'} onClose={() => setOpen('')} header='Hi Dialog!'>
        This is Dialog
      </Dialog>
      <Drawer
        open={open === 'drawer'}
        onClose={() => setOpen('')}
        header='Hi Drawer!'
        actions={{
          confirm: {
            children: 'confirm',
            color: 'info',
          },
          cancel: {
            children: 'cancel',
            color: 'info',
          },
        }}
      >
        This is Drawer
      </Drawer>
    </Suspense>
  )
}

export default App
