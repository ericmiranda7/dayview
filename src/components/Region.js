import Subject from "./Subject"
import { useState, useEffect } from "react"

const Region = ({ name, subjectArray, setRegionStats }) => {
  const [subjectCompletion, setSubjectCompletion] = useState({})
  console.log('rr', subjectCompletion)

  useEffect(() => {
    if (Object.keys(subjectCompletion).length === 0) return

    const regionName = Object.keys(subjectCompletion)[0]
    const subjectCompletionPercentages = Object.values(subjectCompletion)[0]

    setRegionStats(prevState => {
      return {
        ...prevState,
        [regionName]: subjectCompletionPercentages
      }
    })
  }, [subjectCompletion, name, setRegionStats])

  return (
    <div>
      <h2 style={{ color: 'red' }}>
        {name}
      </h2>
      {subjectArray.map(s => <Subject key={s.subjectName} name={s.subjectName} regionName={name} topics={s.topicArray} setCompletion={setSubjectCompletion} />)}
    </div>
  )
}

export default Region