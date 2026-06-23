import React from 'react'

const Heading = ({children}) => {
  return (
               <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-900 dark:from-white dark:via-teal-200 dark:to-slate-400 bg-[size:200%_auto] animate-[pulse_6s_linear_infinite] hover:animate-[shine_2s_linear_infinite] @keyframes_shine_{to{background-position:200%_center}}">
{children}</h1>
  )
}

export default Heading