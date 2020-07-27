import { renderHook, act } from '@testing-library/react-hooks'
import useControlledInputNumber from '../useControlledInputNumber'

it('do not fail when being initialized with an empty value', () => {
  const { result } = renderHook(
    () => useControlledInputNumber({
      value: '',
      onChange: () => {}
    })
  )

  expect(
    result.current.value
  ).toBe('')
})

it('do not fail when being initialized with a number', () => {
  const { result } = renderHook(
    () => useControlledInputNumber({
      value: 1,
      onChange: () => {}
    })
  )

  expect(
    result.current.value
  ).toBe(1)
})

it('change the value and trigger onChange when the input changes to a valid value', () => {
  const handleChange = jest.fn()

  const { result } = renderHook(
    () => useControlledInputNumber({
      value: '',
      onChange: handleChange
    })
  )

  act(() => {
    result.current.onChange({
      target: {
        value: 1
      }
    })
  })

  act(() => {
    result.current.value = handleChange.mock.calls[0][0]
  })

  expect(
    result.current.value
  ).toBe(1)
})

it('change the value to 0 and trigger onChange when the input changes to an invalid value', () => {
  const handleChange = jest.fn()

  const { result } = renderHook(
    () => useControlledInputNumber({
      value: '',
      onChange: handleChange
    })
  )

  act(() => {
    result.current.onChange({
      target: {
        value: 'zero'
      }
    })
  })

  act(() => {
    result.current.value = handleChange.mock.calls[0][0]
  })

  expect(
    result.current.value
  ).toBe(0)
})

it('changes the value and do not trigger onChange when the input changes to an empty value', () => {
  const handleChange = jest.fn()

  const { result } = renderHook(
    () => useControlledInputNumber({
      value: 1,
      onChange: handleChange
    })
  )

  act(() => {
    result.current.onChange({
      target: {
        value: ''
      }
    })
  })

  expect(
    handleChange.mock.calls.length
  ).toBe(
    0
  )

  expect(
    result.current.value
  ).toBe('')
})

it('change the value and trigger onChange when the input focus is left having a valid value', () => {
  const handleChange = jest.fn()

  const { result } = renderHook(
    () => useControlledInputNumber({
      value: '',
      onChange: handleChange
    })
  )

  act(() => {
    result.current.onBlur({
      target: {
        value: 1
      }
    })
  })

  act(() => {
    result.current.value = handleChange.mock.calls[0][0]
  })

  expect(
    result.current.value
  ).toBe(1)
})

it('change the value to 0 and trigger onChange when the input focus is left having a invalid value', () => {
  const handleChange = jest.fn()

  const { result } = renderHook(
    () => useControlledInputNumber({
      value: '',
      onChange: handleChange
    })
  )

  act(() => {
    result.current.onBlur({
      target: {
        value: 'zero'
      }
    })
  })

  act(() => {
    result.current.value = handleChange.mock.calls[0][0]
  })

  expect(
    result.current.value
  ).toBe(0)
})
