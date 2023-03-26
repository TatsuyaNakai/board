import React from 'react'

export default function SubmitButton({ label, disabled=false }) {
  return (
    <button type="submit" disabled={disabled} >{label}</button>
  )
}
