import { ascendingSortDate } from '../../src/utils/DateHelper';

describe('Ascending Sort by Date', () => {
  test('successful sort an unsorted array', () => {
    const unsortedData = [
      {date: '2020-01-13T11:01:58.135Z'},
      {date: '2020-01-10T11:01:58.135Z'},
      {date: '2020-01-12T11:01:58.135Z'},
      {date: '2020-01-14T11:01:58.135Z'},
      {date: '2020-01-11T11:01:58.135Z'},
    ]

    const sortedData = [
      {date: '2020-01-10T11:01:58.135Z'},
      {date: '2020-01-11T11:01:58.135Z'},
      {date: '2020-01-12T11:01:58.135Z'},
      {date: '2020-01-13T11:01:58.135Z'},
      {date: '2020-01-14T11:01:58.135Z'},
    ]

    expect(JSON.stringify(ascendingSortDate(unsortedData))).toContain(JSON.stringify(sortedData))
  })

  test('successful sort a sorted array', () => {
    const unsortedData = [
      {date: '2020-01-10T11:01:58.135Z'},
      {date: '2020-01-11T11:01:58.135Z'},
      {date: '2020-01-12T11:01:58.135Z'},
      {date: '2020-01-13T11:01:58.135Z'},
      {date: '2020-01-14T11:01:58.135Z'},
    ]

    const sortedData = [
      {date: '2020-01-10T11:01:58.135Z'},
      {date: '2020-01-11T11:01:58.135Z'},
      {date: '2020-01-12T11:01:58.135Z'},
      {date: '2020-01-13T11:01:58.135Z'},
      {date: '2020-01-14T11:01:58.135Z'},
    ]

    expect(JSON.stringify(ascendingSortDate(unsortedData))).toContain(JSON.stringify(sortedData))
  })

  test('unsuccessful sort', () => {
    const unsortedData = [
      {date: '2020-01-10T11:01:58.135Z'},
      {date: '2020-01-11T11:01:58.135Z'},
      {date: '2020-01-12T11:01:58.135Z'},
      {date: '2020-01-13T11:01:58.135Z'},
      {date: '2020-01-14T11:01:58.135Z'},
    ]

    const sortedData = [
      {date: '2020-01-10T11:01:58.135Z'},
      {date: '2020-01-11T11:01:58.135Z'},
      {date: '2020-01-13T11:01:58.135Z'},
      {date: '2020-01-14T11:01:58.135Z'},
    ]

    expect(JSON.stringify(ascendingSortDate(unsortedData))).not.toContain(JSON.stringify(sortedData))  
  })
});