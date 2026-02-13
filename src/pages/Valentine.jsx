import Button from '../components/Button'
import './Valentine.css'

export default function Valentine({ onBack }) {
  return (
    <div className="valentine-page">
      <h1>💘</h1>
      <h2>Thanks for saying Yes! You're amazing!</h2>
      <h1>👬🏻</h1>
      <p>You are cordially invited to a date with me at<br></br>Starbucks - Acropolis Mall<br></br>4:30 PM<br></br></p>
      <div className="btn-row">
        <Button variant="primary" onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  )
}
