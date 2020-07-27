import { useState } from 'react'

import ensureNumber from './ensureNumber'

function useControlledInputNumber ({ value, onChange }) {
  const [isValueEmpty, setIsValueEmpty] = useState(value === '')

  const handleInputChange = e => {
    if (e.target.value !== '') {
      onChange(
        ensureNumber(e.target.value)
      )

      setIsValueEmpty(false)
    } else {
      setIsValueEmpty(true)
    }
  }

  const handleInputBlur = e => {
    onChange(
      ensureNumber(e.target.value)
    )

    setIsValueEmpty(false)
  }

  return {
    value: isValueEmpty ? '' : value,
    onChange: handleInputChange,
    onBlur: handleInputBlur
  }
}

export default useControlledInputNumber
