'use client'

import React from 'react'
import { Card } from '../ui/card'
import {
  SiAmazonaws,
  SiDocker,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiTypescript,
} from 'react-icons/si';

export default function Tecnologies():JSX.Element {
  return (
    <div className="flex-auto pt-12">
        <h1 className="text-2xl font-bold mb-4">
          Technologies in which I possess some proficiency
        </h1>

        <div className="flex gap-4">
          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiNodedotjs className="bg-white text-2xl dark:text-blue-500" />
          </Card>

          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiTypescript className="bg-white text-2xl dark:text-blue-500" />
          </Card>

          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiReact className="bg-white text-2xl dark:text-blue-500" />
          </Card>

          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiReactquery className="bg-white text-2xl dark:text-blue-500" />
          </Card>

          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiNextdotjs className="bg-white text-2xl dark:text-blue-500" />
          </Card>

          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiMongodb className="bg-white text-2xl dark:text-blue-500" />
          </Card>

          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiMysql className="bg-white text-2xl dark:text-blue-500" />
          </Card>

          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiDocker className="bg-white text-2xl dark:text-blue-500" />
          </Card>
          <Card className="bg-white p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiAmazonaws className="bg-white text-2xl dark:text-blue-500" />
          </Card>
        </div>
      </div>
  )
}
