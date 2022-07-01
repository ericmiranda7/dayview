import { generateDayView } from '../services/dayviewGenerator'
import Region from './Region';
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const calcDayType = (regionStats) => {
  const scores = {}

  // compute overall score
  Object.entries(regionStats)
    .forEach(([regionName, subjectStats]) => {
      scores[regionName] = Object.entries(subjectStats)
        .reduce((p, c) => {
          return p + c[1]
        }, 0)
    })

  // compute subject with highest completion

  return scores
}

const DayView = ({ setRegionScores }) => {
  const [dayView, setDayView] = useState({})
  const [regionStats, setRegionStats] = useState({})

  useEffect(() => {
    setDayView(generateDayView())
  }, [])

  useEffect(() => {
    setRegionScores(calcDayType(regionStats))
  }, [regionStats, setRegionScores])


  return (
    <Row>
      {
        dayView?.regionArray?.map(r => {
          return (
            <Col>
              <Region key={r.regionName} name={r.regionName} subjectArray={r.subjectArray} setRegionStats={setRegionStats} />
            </Col>
          )
        })
      }
    </Row>
  )
}

export default DayView