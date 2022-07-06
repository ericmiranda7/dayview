import Region from './Region';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const DayView = ({ dayView, dispatch }) => {

  console.log('dayview', dayView)

  return (
    <Row>
      {
        Object.entries(dayView?.regions)
          .map(([rKey, rVal]) => {
            return (
              <Col key={rKey}>
                <Region name={rKey} subjects={rVal} dispatch={dispatch} />
              </Col>
            )
          })
      }
    </Row>
  )
}

export default DayView