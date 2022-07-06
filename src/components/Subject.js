const Subject = ({ name, topics, topicsArray, dispatch, regionName }) => {

  const handleChange = (e) => {
    dispatch({ type: 'SET_TICK', payload: { regionName, subjectName: name, topicName: e.target.name, ticked: e.target.checked } })
  }

  return (
    <div>
      <h3 style={{ color: 'orange' }}>
        {name}
      </h3>
      <fieldset style={{ border: '1px solid black' }}>
        {
          topicsArray
            .map(t => {
              return <div key={t}><input type="checkbox" id={t} name={t} onChange={handleChange} checked={topics[t]} /><label htmlFor={t}>{t}</label></div>
            })
        }
      </fieldset>
    </div>
  )
}

export default Subject