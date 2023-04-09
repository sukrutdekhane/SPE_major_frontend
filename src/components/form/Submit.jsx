import React from 'react'

export default function Submit({value}) {
  return (
    <input type="submit" className="w-full rounded bg-white text-secondary
     hover:bg-opatcity-90 transition font-semibold text-lg curson-pointer p-1" value={value} />
  );
}
