import { useEffect, useReducer } from 'react';
import './App.css';
import DayView from './components/DayView';
import Container from 'react-bootstrap/Container'
import { dayViewReducer, initialState } from './state/dayViewState';
import { getDayViewFromDb } from './services/dayviewGenerator';

function App() {
  const [dayView, dispatch] = useReducer(dayViewReducer, initialState)

  useEffect(() => {
    // get dayview from db
    let dayView = null

    const getDayView = async () => {
      dayView = await getDayViewFromDb()
      if (!dayView) return
      dispatch({ type: 'DAYVIEW_DB_READY', payload: dayView })
    }
    getDayView()
  }, [])

  const handleClick = async () => {
    await fetch(".netlify/functions/persist-db", {
      method: "POST",
      body: JSON.stringify(dayView)
    })

  }

  return (
    <Container>
      <DayView dispatch={dispatch} dayView={dayView} />
      <h2 className="mt-2" style={{ color: 'green', textAlign: 'center' }}>
        Today's been a very { }-ey day
      </h2>
      <button onClick={handleClick}>save</button>
    </Container>
  );
}

export default App;
