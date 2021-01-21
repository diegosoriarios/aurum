import { descendingDescription } from '../../src/utils/DateHelper';

describe('Descending Sort by Description', () => {
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
      {description: 'F'},
      {description: 'E'},
      {description: 'D'},
      {description: 'C'},
      {description: 'B'},
      {description: 'A'},
    ]

    expect(JSON.stringify(descendingDescription(unsortedData))).toContain(JSON.stringify(sortedData))
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
      {description: 'F'},
      {description: 'E'},
      {description: 'D'},
      {description: 'C'},
      {description: 'B'},
      {description: 'A'},
    ]

    expect(JSON.stringify(descendingDescription(unsortedData))).toContain(JSON.stringify(sortedData))
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
      {description: 'F'},
      {description: 'E'},
      {description: 'C'},
      {description: 'B'},
      {description: 'A'},
    ]

    expect(JSON.stringify(descendingDescription(unsortedData))).not.toContain(JSON.stringify(sortedData))  
  })
});