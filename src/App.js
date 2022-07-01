import { useEffect, useState } from 'react';
import './App.css';
import DayView from './components/DayView';
import Container from 'react-bootstrap/Container'

function App() {
  const [regionScores, setRegionScores] = useState({})
  const [dayType, setDayType] = useState('')
  console.log(dayType)

  useEffect(() => {
    const dayStats = Object.entries(regionScores)
      .reduce((p, c) => {
        if (p[1] === undefined || p[1] < c[1]) return [c[0], c[1]]
        else return [...p]
      }, [])
    if (dayStats[1] !== 0) setDayType(dayStats[0])
  }, [regionScores])

  return (
    <Container>
      <DayView setRegionScores={setRegionScores} />
      <h2 className="mt-2" style={{ color: 'green', textAlign: 'center' }}>
        Today's been a very {dayType}-ey day
      </h2>
    </Container>
  );
}

export default App;
