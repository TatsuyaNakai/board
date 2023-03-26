import React from 'react'

export default function FullMessages({ fullMessages }) {
  return (
    <>
      { fullMessages.map((msg: string, i: number) => <div key={i}>{msg}</div>) }
    </>
  )
}
