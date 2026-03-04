import { Box } from '@chakra-ui/react'
import { Header } from './components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RequestsPage } from './pages/RequestsPage'
import { AnotherPage } from './pages/AnotherPage'

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<RequestsPage />} />
          <Route path="/reports" element={<AnotherPage />} />
          <Route path="/references/:id" element={<AnotherPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
