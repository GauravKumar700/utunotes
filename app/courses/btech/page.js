'use client'
import React, { useState } from 'react'
import Link from "next/link"
import { ChevronDownIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Component() {
  const [cse, setCse] = useState(false)
  const onToggleCse = () => {
    setCse(!cse)
  }

  const [mechanical, setMechanical] = useState(false)
  const onToggleMechanical = () => {
    setMechanical(!mechanical)
  }

  const [electrical, setElectrical] = useState(false)
  const onToggleElectrical = () => {
    setElectrical(!electrical)
  }

  const [civil, setCivil] = useState(false)
  const onToggleCivil = () => {
    setCivil(!civil)
  }

  const [chemical, setChemical] = useState(false)
  const onToggleChemical = () => {
    setChemical(!chemical)
  }

  return (
    <div className="grid gap-4 px-4 md:gap-8">
      <div className="flex items-center space-x-1">
        <Link className="flex items-center space-x-2 text-sm font-medium group" href="#">
          <HomeIcon className="w-4 h-4 mr-2" />
          Home
        </Link>
        <ChevronRightIcon className="h-4 opacity-50" />
        <Link className="flex items-center space-x-2 text-sm font-medium group" href="#">
          <BookOpenIcon className="w-4 h-4 mr-2" />
          Branches
        </Link>
      </div>
      <h1 className="text-3xl font-bold tracking-tighter">Branches</h1>
      <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
        Click on a branch to view Subjects and purchase notes.
      </p>
      <div className="grid gap-6 md:gap-8">
        <div onClick={onToggleCse} className="relative flex flex-col cursor-pointer items-center p-4 rounded-lg border-2 hover:z-10 hover:shadow-lg">
          <div className="flex w-full items-center">
            {!cse ? <ChevronRightIcon className="mr-4 h-6 opacity-50" /> :
              <ChevronDownIcon className='mr-4 h-6' />}
            <div className="grid gap-1">
              <h2 className="font-semibold">Computer Science</h2>
              <p className="text-sm/relaxed">Notes for the future engineers of the digital world</p>
            </div>
          </div>
          {cse && <div className="grid cursor-pointer items-center mt-4 gap-y-4 p-0 w-full">
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Data Structures & Algorithms</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Learn about data organization and management.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Computer Structures and Architecture</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Explore the design and analysis of Computer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>}
        </div>

        <div onClick={onToggleMechanical} className="relative flex flex-col cursor-pointer items-center p-4 rounded-lg border-2 hover:z-10 hover:shadow-lg" href="#">
          <div className="flex w-full items-center">
            {!mechanical ? <ChevronRightIcon className="mr-4 h-6 opacity-50" /> :
              <ChevronDownIcon className='mr-4 h-6' />}
            <div className="grid gap-1">
              <h2 className="font-semibold">Mechanical Engineering</h2>
              <p className="text-sm/relaxed">Dive into the world of machines with comprehensive notes</p>
            </div>
          </div>
          {mechanical && <div className="grid cursor-pointer items-center mt-4 gap-y-4 p-0 w-full">
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Mechanical Subject 1</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Learn about data organization and management.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Mechanical Subject 2</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Explore the design and analysis of Computer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>}
        </div>

        <div onClick={onToggleElectrical} className="relative flex flex-col cursor-pointer items-center p-4 rounded-lg border-2 hover:z-10 hover:shadow-lg" href="#">
          <div className="flex w-full items-center">
            {!electrical ? <ChevronRightIcon className="mr-4 h-6 opacity-50" /> :
              <ChevronDownIcon className='mr-4 h-6' />}
            <div className="grid gap-1">
              <h2 className="font-semibold">Electrical Engineering</h2>
              <p className="text-sm/relaxed">Shockingly good notes for the future electrical wizards</p>
            </div>
          </div>
          {electrical && <div className="grid cursor-pointer items-center mt-4 gap-y-4 p-0 w-full">
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Electrical Subject 1</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Learn about data organization and management.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Electrical Subject 2</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Explore the design and analysis of Computer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>}
        </div>

        <div onClick={onToggleCivil} className="relative flex flex-col cursor-pointer items-center p-4 rounded-lg border-2 hover:z-10 hover:shadow-lg" href="#">
          <div className="flex w-full items-center">
            {!civil ? <ChevronRightIcon className="mr-4 h-6 opacity-50" /> :
              <ChevronDownIcon className='mr-4 h-6' />}
            <div className="grid gap-1">
              <h2 className="font-semibold">Civil Engineering</h2>
              <p className="text-sm/relaxed">Building a bright future with these civil engineering notes</p>
            </div>
          </div>
          {civil && <div className="grid cursor-pointer items-center mt-4 gap-y-4 p-0 w-full">
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Civil Subject 1</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Learn about data organization and management.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Civil Subject 2</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Explore the design and analysis of Computer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>}
        </div>

        <div onClick={onToggleChemical} className="relative flex flex-col cursor-pointer items-center p-4 rounded-lg border-2 hover:z-10 hover:shadow-lg" href="#">
          <div className="flex w-full items-center">
            {!chemical ? <ChevronRightIcon className="mr-4 h-6 opacity-50" /> :
              <ChevronDownIcon className='mr-4 h-6' />}
            <div className="grid gap-1">
              <h2 className="font-semibold">Chemical Engineering</h2>
              <p className="text-sm/relaxed">Mixing knowledge and excellence with these chemical engineering notes</p>
            </div>
          </div>
          {chemical && <div className="grid cursor-pointer items-center mt-4 gap-y-4 p-0 w-full">
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Chemical Subject 1</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Learn about data organization and management.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="grid items-center gap-4 p-4">
                <BookOpenIcon className="w-8 h-8" />
                <div className="grid gap-1">
                  <h3 className="font-semibold">Chemical Subject 2</h3>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Explore the design and analysis of Computer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>}
        </div>

      </div>
    </div>
  )
}

function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
