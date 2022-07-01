import DayView, { Region, Subject } from "../models/dayview"
import data from '../preferences.json'

// Computer Science region
const fundamentalsSubject = new Subject('Fundamentals', ['DS', 'Math'])
const securitySubject = new Subject('Security', ['Wargames', 'Mooc.fi'])
const compsciRegion = new Region('Computer Science', [fundamentalsSubject, securitySubject])

// Recreational region
const physicalSubject = new Subject('Physical', ['Gym', 'Run', 'Skateboard'])
const cookingSubject = new Subject('Cooking', ['Survival', 'Recreational'])
const readingSubject = new Subject('Reading', ['Philosophy', 'History', 'Fiction'])
const recreationalRegion = new Region('Recreational', [physicalSubject, cookingSubject, readingSubject])


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