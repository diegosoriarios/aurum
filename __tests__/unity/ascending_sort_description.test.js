import { ascendingDescription } from '../../src/utils/DateHelper';

describe('Ascending Sort by Description', () => {
  test('successful sort an unsorted array', () => {
    const unsortedData = [
      {description: 'F'},
      {description: 'A'},
      {description: 'D'},
      {description: 'B'},
      {description: 'E'},
      {description: 'C'},
    ]

    const sortedData = [
      {description: 'A'},
      {description: 'B'},
      {description: 'C'},
      {description: 'D'},
      {description: 'E'},
      {description: 'F'},
    ]

    expect(JSON.stringify(ascendingDescription(unsortedData))).toContain(JSON.stringify(sortedData))
  })

  test('successful sort a sorted array', () => {
    const unsortedData = [
      {description: 'F'},
      {description: 'A'},
      {description: 'D'},
      {description: 'B'},
      {description: 'E'},
      {description: 'C'},
    ]

    const sortedData = [
      {description: 'A'},
      {description: 'B'},
      {description: 'C'},
      {description: 'D'},
      {description: 'E'},
      {description: 'F'},
    ]

    expect(JSON.stringify(ascendingDescription(unsortedData))).toContain(JSON.stringify(sortedData))
  })

  test('unsuccessful sort', () => {
    const unsortedData = [
      {description: 'F'},
      {description: 'A'},
      {description: 'D'},
      {description: 'B'},
      {description: 'E'},
      {description: 'C'},
    ]

    const sortedData = [
      {description: 'A'},
      {description: 'B'},
      {description: 'C'},
      {description: 'E'},
      {description: 'F'},
    ]

    expect(JSON.stringify(ascendingDescription(unsortedData))).not.toContain(JSON.stringify(sortedData))  
  })
});