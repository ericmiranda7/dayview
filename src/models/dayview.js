export default class DayView {
  regions

  constructor(regions) {
    this.regions = regions;
  }
}

export class Region {
  regionName
  subjects

  constructor(regionName, subjects) {
    this.regionName = regionName
    this.subjects = subjects;
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