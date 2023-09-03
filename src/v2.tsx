import React from 'react'

import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput'

export const V2 = () => {
  const [count, setCount] = React.useState<number | undefined>(0)

  return (
    <div>
      <h3>
        With material base (admite negativos, pero no decimales ni exponencial)
      </h3>
      <NumberInput value={count} onChange={(_, val) => setCount(val)} />
      <div>
        <span>
          Number: <strong>{count}</strong>
        </span>
      </div>
      <div>
        <span>Square</span>
        <strong>{(count || 0) * (count || 0)}</strong>
      </div>
    </div>
  )
}
