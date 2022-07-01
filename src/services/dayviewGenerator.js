import DayView, { Region, Subject } from "../models/dayview"
import data from '../preferences.json'

export const generateDayView = () => {
  // return new DayView([compsciRegion, recreationalRegion])
  const regions = [];

  data.regions.forEach(({ name: regionName, subjects: subjectArray }) => {
    const subjects = [];

    subjectArray.forEach(({ name: subjectName, topics: topicArray }) => {
      subjects.push(new Subject(subjectName, topicArray))
    })

    regions.push(new Region(regionName, subjects))

  })

  return new DayView(regions)

}