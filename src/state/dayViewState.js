import { generateDayViewInitialState } from "../services/dayviewGenerator"

export const initialState = generateDayViewInitialState();

export const dayViewReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TICK': {
      const { regionName, subjectName, topicName } = action.payload

      return ({
        ...state,
        regions: {
          ...state.regions,
          [regionName]: {
            ...state.regions[regionName],
            [subjectName]: {
              ...state.regions[regionName][subjectName],
              [topicName]: action.payload.ticked
            }
          }
        }
      })
    }

    case 'DAYVIEW_DB_READY': {
      console.log('pp', action.payload)
      return { ...action.payload }
    }
    default:
      return state;
  }
}