import { Menu, Sidebar, AppRoutes } from '@/components'
import { Content, RootLayout } from './layouts/AppLayout'

function App(): JSX.Element {
  return (
    <RootLayout>
      <Sidebar className="p-2">
        <Menu />
      </Sidebar>
      <Content className="border-l border-l-white/20 p-4">
        <AppRoutes />
      </Content>
    </RootLayout>
  )
}

export default App
