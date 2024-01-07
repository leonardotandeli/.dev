'use client';

import AboutMe from '@/components/aboutMe/AboutMe';
import Books from '@/components/books/Books';

import Tecnologies from '@/components/tecnologies/Tecnologies';

export default function Home(): JSX.Element {
  return (
    <main>
      <div
        className={`font-mono  before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] 
      after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] 
      before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:opacity-40 before:lg:h-[360px] z-[-1]`}
      >
        <AboutMe />
        <Tecnologies />
        <Books />
      </div>
    </main>
  );
}
