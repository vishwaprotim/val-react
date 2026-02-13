import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Valentine from './pages/Valentine'

function App() {
    // simple client-side page state (no router)
    const [page, setPage] = useState('home')

    // ref to the secondary button wrapper and its fixed position (in px)
    const noRef = useRef(null)
    const [noPos, setNoPos] = useState(null) // { x, y } or null


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
                {/* secondary button wrapper — we toggle to fixed positioning by setting `noPos` */}
                <div
                    ref={noRef}
                    style={
                        noPos
                            ? {
                                  position: 'fixed',
                                  left: `${noPos.x}px`,
                                  top: `${noPos.y}px`,
                                  zIndex: 9999,
                              }
                            : undefined
                    }
                >
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => {
                            // compute current rect (use wrapper if available)
                            const rect = noRef.current?.getBoundingClientRect()
                            const bw = rect?.width ?? 100
                            const bh = rect?.height ?? 40
                            const curX = rect?.left ?? (window.innerWidth - bw) / 2
                            const curY = rect?.top ?? (window.innerHeight - bh) / 2

                            // random offset up to 100px
                            const angle = Math.random() * Math.PI * 2
                            const dist = Math.random() * 500
                            let nx = curX + Math.cos(angle) * dist
                            let ny = curY + Math.sin(angle) * dist

                            // clamp inside viewport with small padding
                            const pad = 8
                            nx = Math.max(pad, Math.min(nx, window.innerWidth - bw - pad))
                            ny = Math.max(pad, Math.min(ny, window.innerHeight - bh - pad))

                            setNoPos({ x: nx, y: ny })
                        }}
                    >
                        No! 😭
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default App
