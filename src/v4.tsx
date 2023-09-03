import { ClickAwayListener } from '@mui/base'
import React, { useEffect, useRef, useState } from 'react'

import { evaluate } from 'mathjs'

export const V4 = () => {
  const [value, setValue] = React.useState<string>('10')
  const [evaluatedValue, setEvaluatedValue] = React.useState<string>('')

  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      evaluate(value)
      setEvaluatedValue(evaluate(value))
    } catch {
      setEvaluatedValue('Error')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditMode])

  const valorNumerico = !Number.isNaN(evaluatedValue)
    ? Number(evaluatedValue) ** 2
    : 0

  return (
    <div>
      <h3>Enfoque excel</h3>

      <ClickAwayListener
        onClickAway={() => {
          setIsEditMode(false)
        }}
      >
        {isEditMode ? (
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setIsEditMode(false)
                setValue(inputRef.current?.value || '')
              }
            }}
          />
        ) : (
          <div
            onClick={(e) => {
              e.stopPropagation()
              setIsEditMode(true)
              setTimeout(() => {
                inputRef.current?.focus()
              })
            }}
            style={{
              width: '100px',
              height: '20px',
              border: '1px solid black',
              padding: '5px',
              display: 'inline-block',
            }}
          >
            {evaluatedValue}
          </div>
        )}
      </ClickAwayListener>

      <div>
        <span>
          Number: <strong>{evaluatedValue}</strong>
        </span>
      </div>
      <div>
        <span>Square</span>
        <strong>{valorNumerico * valorNumerico}</strong>
      </div>
    </div>
  )
}
