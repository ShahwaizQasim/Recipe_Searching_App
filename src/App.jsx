
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Products from './pages/productDetail'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={'/'} element={<Products />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
