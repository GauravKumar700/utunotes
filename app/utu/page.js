import Image from "next/image"
import Link from "next/link"

export default function page() {
    return (
        <div className="bg-gray-50 py-12 lg:py-16">
            <div className="container grid gap-4 px-4 md:px-6">
                <div className="flex flex-col gap-2 items-center justify-center text-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">University Notes</h1>
                        <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Buy and sell university notes based on the respective syllabus. Access high-quality study materials from
                            top universities.
                        </p>
                    </div>
                </div>
                <div className="grid max-w-sm gap-4 mx-auto items-start sm:max-w-3xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3 xl:max-w-6xl xl:grid-cols-4">
                    <div className="flex items-center space-x-2">
                        <Image
                            alt="MIT Logo"
                            className="aspect-square rounded-lg overflow-hidden object-cover"
                            height="100"
                            src="/placeholder.jpg"
                            width="100"
                        />
                        <div className="grid gap-1">
                            <h3 className="text-lg font-semibold">Introduction to Psychology</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                An introduction to the science of human behavior.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image
                            alt="Harvard Logo"
                            className="aspect-square rounded-lg overflow-hidden object-cover"
                            height="100"
                            src="/placeholder.jpg"
                            width="100"
                        />
                        <div className="grid gap-1">
                            <h3 className="text-lg font-semibold">Principles of Microeconomics</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Understanding the behavior of individuals and businesses in the marketplace.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image
                            alt="Stanford Logo"
                            className="aspect-square rounded-lg overflow-hidden object-cover"
                            height="100"
                            src="/placeholder.jpg"
                            width="100"
                        />
                        <div className="grid gap-1">
                            <h3 className="text-lg font-semibold">Introduction to Computer Science</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                An overview of the fundamental concepts of computer science.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image
                            alt="Yale Logo"
                            className="aspect-square rounded-lg overflow-hidden object-cover"
                            height="100"
                            src="/placeholder.jpg"
                            width="100"
                        />
                        <div className="grid gap-1">
                            <h3 className="text-lg font-semibold">Ancient Greek Philosophy</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Exploring the works of Socrates, Plato, and Aristotle.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image
                            alt="Oxford Logo"
                            className="aspect-square rounded-lg overflow-hidden object-cover"
                            height="100"
                            src="/placeholder.jpg"
                            width="100"
                        />
                        <div className="grid gap-1">
                            <h3 className="text-lg font-semibold">Shakespearean Literature</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Studying the timeless plays and sonnets of William Shakespeare.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Image
                            alt="Cambridge Logo"
                            className="aspect-square rounded-lg overflow-hidden object-cover"
                            height="100"
                            src="/placeholder.jpg"
                            width="100"
                        />
                        <div className="grid gap-1">
                            <h3 className="text-lg font-semibold">Quantum Physics and Beyond</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Delving into the mysteries of the quantum world.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-center md:gap-4">
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        href="#"
                    >
                        Browse Notes
                    </Link>
                    <Link
                        className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                        href="#"
                    >
                        Sell Notes
                    </Link>
                </div>
            </div>
        </div>
    )
}

