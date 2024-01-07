'use client'

import Image from 'next/image'
import React from 'react'

export default function Books():JSX.Element {
  return (
    <div className="flex-auto pt-12">
        <h1 className="text-2xl font-bold mb-4">
          Books that I will read in 2024
        </h1>

        <div className="flex gap-4">
          <Image
            src={'/books/61r4tYVsRVL._SL1304_.jpg'}
            alt={'Clean Architecture'}
            width={150}
            height={300}
            className="rounded-md shadow-md hover:cursor-pointer"
          />

          <Image
            src={'/books/71e6ndHEwqL._SL1500_.jpg'}
            alt={'Refactoring'}
            width={150}
            height={300}
            className="rounded-md shadow-md hover:cursor-pointer"
          />

          <Image
            src={'/books/81BdMC18EUL._SL1500_.jpg'}
            alt={'Algorithms'}
            width={150}
            height={300}
            className="rounded-md shadow-md hover:cursor-pointer"
            onClick={() =>
              (window.location.href =
                'https://www.amazon.com.br/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230/r')
            }
          />
        </div>
      </div>

  )
}
