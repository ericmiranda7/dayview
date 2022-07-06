import data from '../preferences.json'

let RUN = 0;

export const generateDayViewInitialState = () => {
  if (RUN) return;
  RUN = 1

  Object.entries(data.regions)
    .forEach(([regionName, subject]) => {
      Object.entries(subject)
        .forEach(([subjectName, topics]) => {
          const topicsObject = {};
          topics
            .forEach(t => topicsObject[t] = false)
          data.regions[regionName][subjectName] = topicsObject;
        })
    })

  return data;
}

export const getDayViewFromDb = async () => {

  const res = await fetch('.netlify/functions/persist-db', { method: 'GET' })
  let data = null

  if (res.status === 200) {
    data = await res.json();
    console.log('201', data)
  }

  return data
}