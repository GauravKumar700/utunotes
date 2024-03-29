import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import Link from "next/link"

export default function Courses() {
    return (
        <section className="px-0 py-20 border-b-4 border-slate-400">
            <div className="container px-4 md:px-6 lg:px-20">
                <div className="flex flex-col p-7 gap-4 md:gap-8">
                    <div className="md:flex justify-between px-0 mb-8 text-center md:text-start">
                        <div className="grid gap-1">
                            <h1 className="text-4xl font-bold tracking-tight">Notes for the Courses</h1>
                            <p className="text-gray-500 dark:text-gray-400">
                                Browse through the wide variety of courses offered by Your university.
                            </p>
                        </div>
                        <div className="flex gap-4 md:gap-6 mt-4">
                            <div className="flex-1">
                                <form className="flex gap-2 md:gap-4 justify-center">
                                    <Input className="max-w-[400px] flex-1" placeholder="Search for courses..." type="search" />
                                    <Button type="submit">Search</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-6 md:gap-y-8">
                        <Link href={'/courses/btech'}>
                            <Card className="w-fit px-7 hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-400 duration-300 border-2 border-gray-600">
                                <CardContent className="flex flex-col gap-5 p-6">
                                    <img
                                        alt="Cover image"
                                        className="aspect-square rounded-lg object-cover border"
                                        height="100"
                                        src="/bachelor.png"
                                        width="100"
                                    />
                                    <h3 className="text-3xl text-center font-bold tracking-tight">B.Tech</h3>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/courses/bsc'}>
                            <Card className="w-fit px-7 hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-400 duration-300 border-2 border-gray-600">
                                <CardContent className="flex flex-col gap-5 p-6">
                                    <img
                                        alt="Cover image"
                                        className="aspect-square rounded-lg object-cover border"
                                        height="100"
                                        src="/bachelor.png"
                                        width="100"
                                    />
                                    <h3 className="text-3xl text-center font-bold tracking-tight">B.Sc</h3>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/courses/bba'} >
                            <Card className="w-fit px-7 hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-400 duration-300 border-2 border-gray-600">
                                <CardContent className="flex flex-col gap-5 p-6">
                                    <img
                                        alt="Cover image"
                                        className="aspect-square rounded-lg object-cover border"
                                        height="100"
                                        src="/bachelor.png"
                                        width="100"
                                    />
                                    <h3 className="text-3xl text-center font-bold tracking-tight">BBA</h3>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/courses/bca'}>
                            <Card className="w-fit px-7 hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-400 duration-300 border-2 border-gray-600">
                                <CardContent className="flex flex-col gap-5 p-6">
                                    <img
                                        alt="Cover image"
                                        className="aspect-square rounded-lg object-cover border"
                                        height="100"
                                        src="/bachelor.png"
                                        width="100"
                                    />
                                    <h3 className="text-3xl text-center font-bold tracking-tight">BCA</h3>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/courses/mca'}>
                            <Card className="w-fit px-7 hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-400 duration-300 border-2 border-gray-600">
                                <CardContent className="flex flex-col gap-5 p-6">
                                    <img
                                        alt="Cover image"
                                        className="aspect-square rounded-lg object-cover border"
                                        height="100"
                                        src="/bachelor.png"
                                        width="100"
                                    />
                                    <h3 className="text-3xl text-center font-bold tracking-tight">MCA</h3>
                                </CardContent>
                            </Card>
                        </Link>

                        <Link href={'/courses/mba'}>
                            <Card className="w-fit px-7 hover:cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-gray-400 duration-300 border-2 border-gray-600">
                                <CardContent className="flex flex-col gap-5 p-6">
                                    <img
                                        alt="Cover image"
                                        className="aspect-square rounded-lg object-cover border"
                                        height="100"
                                        src="/bachelor.png"
                                        width="100"
                                    />
                                    <h3 className="text-3xl text-center font-bold tracking-tight">MBA</h3>
                                </CardContent>
                            </Card>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

