import ensureNumber from '../ensureNumber'

it('do not modify the input if a positive integer is passed', () => {
  expect(
    ensureNumber(1)
  ).toBe(1)
})

it('do not modify the input if an negative integer is passed', () => {
  expect(
    ensureNumber(-2)
  ).toBe(-2)
})

it('do not modify the input if zero is passed', () => {
  expect(
    ensureNumber(0)
  ).toBe(0)
})

it('returns the parsed version of a string representing a positive integer', () => {
  expect(
    ensureNumber('34')
  ).toBe(34)
})

it('returns the parsed version of a string representing a positive float', () => {
  expect(
    ensureNumber('34.34')
  ).toBe(34.34)
})

it('returns the parsed version of a string representing a negative integer', () => {
  expect(
    ensureNumber('-8')
  ).toBe(-8)
})

it('returns the parsed version of a string representing a negative integer', () => {
  expect(
    ensureNumber('-8.8')
  ).toBe(-8.8)
})

it('returns the parsed version of a string representing a zero', () => {
  expect(
    ensureNumber('0')
  ).toBe(0)
})

it('returns zero if a string that is not parseable to an integer is passed', () => {
  expect(
    ensureNumber('this is not a number')
  ).toBe(0)
})

it('returns zero if `NaN` is passed', () => {
  expect(
    ensureNumber(NaN)
  ).toBe(0)
})

it('returns zero if `undefined` is passed', () => {
  expect(
    ensureNumber(undefined)
  ).toBe(0)
})

it('returns zero if `false` is passed', () => {
  expect(
    ensureNumber(false)
  ).toBe(0)
})

it('returns zero if `true` is passed', () => {
  expect(
    ensureNumber(true)
  ).toBe(0)
})
