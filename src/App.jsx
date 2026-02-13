import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Valentine from './pages/Valentine'

function App() {
    const [count, setCount] = useState(0)

    // simple client-side page state (no router)
    const [page, setPage] = useState('home')


    if (page === 'valentine') {
        return <Valentine onBack={() => setPage('home')} />
    }

    return (
        <div className="App">
            <div>
                <h1>Will You Be My Valentine?</h1>
            </div>
            <div className="btn-row">
                <Button variant="primary" size="lg" onClick={() => setPage('valentine')}>
                    Yes! 😄
                </Button>
                <Button variant="secondary" size="lg" onClick={() => setCount(count - 1)}>
                    No! 😭
                </Button>
            </div>
        </div>
    )
}

export default App
