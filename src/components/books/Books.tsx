import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Books(): JSX.Element {
  return (
    <div className="flex-auto pt-12">
      <h1 className="text-2xl font-bold mb-4">
        Books that I will read in 2024
      </h1>

      <div className="flex gap-4  flex-wrap">
        <Link
          target="_blank"
          href="https://www.amazon.com.br/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164"
        >
          <Image
            src={'/books/61r4tYVsRVL._SL1304_.jpg'}
            alt={'Clean Architecture'}
            width={150}
            height={300}
            className="rounded-md shadow-md hover:cursor-pointer"
          />
        </Link>

        <Link
          target="_blank"
          href="https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599"
        >
          <Image
            src={'/books/71e6ndHEwqL._SL1500_.jpg'}
            alt={'Refactoring'}
            width={150}
            height={300}
            className="rounded-md shadow-md hover:cursor-pointer"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.amazon.com.br/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230"
        >
          <Image
            src={'/books/81BdMC18EUL._SL1500_.jpg'}
            alt={'Algorithms'}
            width={150}
            height={300}
            className="rounded-md shadow-md hover:cursor-pointer"
          />
        </Link>

        <Link
          target="_blank"
          href="https://www.amazon.com.br/Pragmatic-Programmer-journey-mastery-Anniversary-dp-0135957052/dp/0135957052"
        >
          <Image
            src={'/books/71f743sOPoL._SL1500_.jpg'}
            alt={'Pragmatic Programmer'}
            width={150}
            height={300}
            className="rounded-md shadow-md hover:cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
