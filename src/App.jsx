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

    // helper to move the secondary button by a random offset (max 100px) while
    // keeping it inside the viewport
    function moveSecondaryButton() {
        const rect = noRef.current?.getBoundingClientRect()
        const bw = rect?.width ?? 100
        const bh = rect?.height ?? 40
        const curX = rect?.left ?? (window.innerWidth - bw) / 2
        const curY = rect?.top ?? (window.innerHeight - bh) / 2

        // random offset up to 500px
        const angle = Math.random() * Math.PI * 2
        const dist = Math.random() * 500
        let nx = curX + Math.cos(angle) * dist
        let ny = curY + Math.sin(angle) * dist

        // clamp inside viewport with small padding
        const pad = 8
        nx = Math.max(pad, Math.min(nx, window.innerWidth - bw - pad))
        ny = Math.max(pad, Math.min(ny, window.innerHeight - bh - pad))

        setNoPos({ x: nx, y: ny })
    }

    // avoid spamming moves — remember last move time
    const lastMoveRef = useRef(0)

    // when the user moves the pointer near the secondary button, nudge it away
    useEffect(() => {
        function onMove(e) {
            if (page !== 'home') return
            const el = noRef.current
            if (!el) return
            const rect = el.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const dx = e.clientX - cx
            const dy = e.clientY - cy
            const dist = Math.hypot(dx, dy)

            const threshold = 120 // pixels
            const now = Date.now()
            if (dist < threshold && now - lastMoveRef.current > 300) {
                lastMoveRef.current = now
                moveSecondaryButton()
            }
        }

        window.addEventListener('mousemove', onMove)
        return () => window.removeEventListener('mousemove', onMove)
    }, [page])


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
                        onClick={moveSecondaryButton}
                    >
                        No! 😭
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default App
