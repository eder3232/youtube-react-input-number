import React from 'react'

export const V3 = () => {
  const [count, setCount] = React.useState<number>(0)
  const ref = React.useRef<HTMLInputElement>(null)

  return (
    <div>
      <h3>With uncontrolled input - funciona todo, pero sin reactividad</h3>
      <input type="number" ref={ref} />
      <button
        onClick={() => {
          setCount(Number(ref.current?.value))
        }}
      >
        Calcular
      </button>
      <div>
        <span>
          Number: <strong>{count}</strong>
        </span>
      </div>
      <div>
        <span>Square</span>
        <strong>{count * count}</strong>
      </div>
    </div>
  )
}
