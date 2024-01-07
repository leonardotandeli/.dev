'use client'

import React from 'react'
import { Card } from '../ui/card'
import {
  SiAmazonaws,
  SiDocker,
  SiGo,
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

        <div className="flex gap-4 flex-wrap">
          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiNodedotjs className="bg-secondary text-2xl text-primary" />
          </Card>

          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiTypescript className="bg-secondary text-2xl text-primary" />
          </Card>

          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiReact className="bg-secondary text-2xl text-primary" />
          </Card>

          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiReactquery className="bg-secondary text-2xl text-primary" />
          </Card>

          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiNextdotjs className="bg-secondary text-2xl text-primary" />
          </Card>

          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiMongodb className="bg-secondary text-2xl text-primary" />
          </Card>

          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiMysql className="bg-secondary text-2xl text-primary" />
          </Card>

          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiDocker className="bg-secondary text-2xl text-primary" />
          </Card>
          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiAmazonaws className="bg-secondary text-2xl text-primary" />
          </Card>
          <Card className="bg-secondary p-2 items-center w-12 h-12 flex justify-center rounded-md shadow-md">
            <SiGo className="bg-secondary text-2xl text-primary" />
          </Card>
        </div>
      </div>
  )
}
