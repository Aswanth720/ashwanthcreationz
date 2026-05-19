"use client"

import { useState } from "react"

interface Props {
  onSearch: (value: string) => void
}

export default function SearchBar({
  onSearch,
}: Props) {
  const [query, setQuery] = useState("")

  return (
    <input
      type="text"
      placeholder="Search articles..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value)
        onSearch(e.target.value)
      }}
      className="
        w-full rounded-xl border border-zinc-700
        bg-zinc-900 px-5 py-4 outline-none
        focus:border-cyan-400
      "
    />
  )
}