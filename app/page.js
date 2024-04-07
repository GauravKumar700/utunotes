import Image from "next/image";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Courses from "@/components/Courses";
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { StarIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 border-b-4 border-slate-400">
          <div className="container flex flex-col gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find Notes for Your University
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access the best study materials based on your syllabus. Enter your university or course below.
              </p>
            </div>
            <div className="mx-auto space-y-2">
              <form className="flex flex-col gap-4 md:flex-row md:gap-4 lg:gap-4">
                <Input className="w-[22rem] text-base" placeholder="Enter Your University or Course or Subject" type="text" />
                <Button type="submit">Search</Button>
              </form>
            </div>
          </div>
        </section>

        <Courses />

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Top Selling Notes</h2>
            </div>
            <div className="mx-auto grid  gap-6 sm:gap-8 lg:grid-cols-3 md:grid-cols-2 lg:gap-12 xl:gap-5">
              <div className="flex flex-col gap-2 justify-between border rounded-2xl border-gray-400 p-10">
                <h3 className="text-2xl font-bold tracking-tighter">Introduction to Psychology</h3>
                <p className="text-gray-500 dark:text-gray-400 text-justify">
                  This course provides an introduction to the study of the human mind and behavior. Topics include the
                  history of psychology, research methods, and major theories of psychology.
                </p>
                <Card className="my-3">
                  <CardContent className="flex p-5 justify-between">
                    <div className="grid gap-1.5 ">
                      {/* <CardTitle>Rating</CardTitle> */}
                      <h1 className="text-xl text-left font-semibold">Rating</h1>
                      {/* <CardDescription>High-quality material for your next project.</CardDescription> */}
                      <div className="flex items-center gap-2 text-sm">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                        <StarIcon className="w-4 h-4 fill-muted stroke-muted-foreground" />
                      </div>
                      <span className="text-gray-500 text-left dark:text-gray-400">5 reviews</span>
                    </div>
                    <div className="grid gap-2 text-right">
                      <div className="text-2xl  font-bold">₹ 19.99</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Exclusive of all taxes</div>
                    </div>
                  </CardContent>
                </Card>
                <div className="w-full">
                  {/* <span className="text-2xl font-bold">₹ 19.99</span> */}
                  <Link href={'/payment'}><Button className="w-full">View</Button></Link>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-between border rounded-2xl border-gray-400 p-10">
                <h3 className="text-2xl font-bold tracking-tighter">World History: Ancient Civilizations</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This course explores the history of ancient civilizations from around the world. Topics include the
                  rise of early civilizations, ancient Egypt, Mesopotamia, the Indus Valley civilization, and ancient
                  China.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-2xl font-bold">₹ 24.99</span>
                  <Button>View</Button>
                </div>
              </div>
              <div className="flex flex-col gap-2 justify-between border rounded-2xl border-gray-400 p-10">
                <h3 className="text-2xl font-bold tracking-tighter">World History: Ancient Civilizations</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  This course explores the history of ancient civilizations from around the world. Topics include the
                  rise of early civilizations, ancient Egypt, Mesopotamia, the Indus Valley civilization, and ancient
                  China.
                </p>
                <div className="flex flex-col gap-2">
                  <span className="text-2xl font-bold">₹ 24.99</span>
                  <Button>View</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the workflow with the best Notes For UTU.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let you focus on teaching creatively instead of managing Notes and Looking in the Syllabus.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 University Notes. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
