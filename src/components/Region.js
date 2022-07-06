import Subject from "./Subject"

const Region = ({ name, subjects, dispatch }) => {
  return (
    <div>
      <h2 style={{ color: 'red' }}>
        {name}
      </h2>
      {
        Object.entries(subjects)
          .map(([sKey, sVal]) => <Subject key={sKey} name={sKey} regionName={name} topics={sVal} topicsArray={Object.keys(sVal)} dispatch={dispatch} />)
      }
    </div>
  )
}

export default Region