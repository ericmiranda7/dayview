import { useEffect, useState } from "react"

const Subject = ({ name, topics, setCompletion, regionName }) => {
  const [ticks, setTicks] = useState({})

  const handleInputChange = (e) => {
    setTicks((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.checked
      }
    })
  }

  useEffect(() => {
    setCompletion(prevCompState => {
      return {
        ...prevCompState,
        [regionName]: {
          ...prevCompState[regionName],
          [name]: Object.values(ticks)
            .filter(v => v)
            .length
            /
            topics.length
            * 100
        }
      }
    }
    )
  }, [name, regionName, setCompletion, ticks, topics.length])

  return (
    <div>
      <h3 style={{ color: 'orange' }}>
        {name} {Object.values(ticks).filter(v => v).length} / {topics.length}
      </h3>
      <fieldset style={{border: '1px solid black'}}>
        {
          topics
            .map(t => {
              return <div key={t}><input type="checkbox" id={t} name={t} onChange={handleInputChange} /><label htmlFor={t}>{t}</label></div>
            })
        }
      </fieldset>
    </div>
  )
}

export default Subject