export default class DayView {
  regionArray

  constructor(regions) {
    this.regionArray = regions;
  }
}

export class Region {
  regionName
  subjectArray

  constructor(regionName, subjects) {
    this.regionName = regionName
    this.subjectArray = subjects;
  }
}

export class Subject {
  subjectName
  topicArray

  constructor(subjectName, topics) {
    this.subjectName = subjectName
    this.topicArray = topics;
  }
}