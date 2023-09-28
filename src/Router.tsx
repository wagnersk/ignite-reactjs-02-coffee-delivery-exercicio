import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NextScreen } from './pages/NextScreen'
import { FinishScreen } from './pages/FinishScreen'

import { DefaultLayout } from './../src/layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nextscreen" element={<NextScreen />} />
        <Route path="/finishscreen" element={<FinishScreen />} />
      </Route>
    </Routes>
  )
}
