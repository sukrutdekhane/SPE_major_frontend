import React from 'react'

export default function container({children,className}) {
  return (
    <div className={"max-w-screen-xl mx-auto " + className}>{children}</div>
  )
}
