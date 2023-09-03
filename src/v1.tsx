import { useState } from 'react'

export const V1 = () => {
  const [count, setCount] = useState(0)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value))
  }

  return (
    <>
      <h3>Simple - Admite decimales pero no negativos</h3>

      <input value={count} onChange={onChange} type="number" />

      <div>
        <span>
          Number: <strong>{count}</strong>
        </span>
      </div>
      <div>
        <span>Square</span>
        <strong>{count * count}</strong>
      </div>
    </>
  )
}
