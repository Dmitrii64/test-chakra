import { Box, useBreakpointValue } from '@chakra-ui/react'
import { Header } from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RequestsPage } from './pages/RequestsPage'
import { AnotherPage } from './pages/AnotherPage'

function App() {
  const isMobile = Boolean(useBreakpointValue({ base: true, md: false }))

  return (
    <BrowserRouter>
      <Box>
        <Header isMobile={isMobile} />
        <Routes>
          <Route path="/" element={<RequestsPage isMobile={isMobile} />} />
          <Route path="/reports" element={<AnotherPage />} />
          <Route path="/references/:id" element={<AnotherPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
