'use client';
import React from 'react';
import { DarkModeButton } from '../darkModeButton/DarkModeButton';
import Logo from '../logo/Logo';

import { GithubIcon, LinkedinIcon } from 'lucide-react';

import SocialNetworkButton from '../socialNetworkButton/SocialNetworkButton';

export default function Header(): JSX.Element {
  const LINKEDIN_URL = 'https://www.linkedin.com/in/leonardotandeli';
  const GITHUB_URL = 'https://github.com/leonardotandeli';
  
  return (
    <header
      className={`background flex items-center justify-center md:justify-between  py-4 flex-wrap gap-4 md:gap-0`}
    >
      <Logo />

      <div className={`flex flex-row justify-center items-center space-x-8 `}>
        <div className={`flex flex-row justify-center items-center space-x-2 `}>
          <SocialNetworkButton url={LINKEDIN_URL}>
            <LinkedinIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-blue-500" />
          </SocialNetworkButton>

          <SocialNetworkButton url={GITHUB_URL}>
            <GithubIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-blue-500" />
          </SocialNetworkButton>
        </div>

        <DarkModeButton />
      </div>
    </header>
  );
}
