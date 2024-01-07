'use client';

import React from 'react';

import { description, subtitle, title } from './AboutMe.constants';

export default function AboutMe(): JSX.Element {
  return (
    <div className="flex-auto max-w-[1024px]">
      <p className="text-2xl font-bold 	">{title}</p>
      <p className="text-2xl font-bold	">{subtitle}</p>
      <p className="text-primary font-normal pt-6 	">{description}</p>
    </div>
  );
}
