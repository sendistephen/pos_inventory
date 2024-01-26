import { Dashboard, Products, Settings } from '@renderer/pages'
import { Routes, Route } from 'react-router-dom'

export const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
