import Button from '../components/Button'
import './Valentine.css'

export default function Valentine({ onBack }) {
  return (
    <div className="valentine-page">
      <h1>💘</h1>
      <h2>Thanks for saying Yes! You're amazing!</h2>
      <h1>👬🏻</h1>
      <div className="btn-row">
        <Button variant="primary" onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  )
}
