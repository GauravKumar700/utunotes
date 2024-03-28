import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export default function page() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Notes
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        About
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                                University Notes for Every Course
                            </h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Access the best notes curated by students and faculty. Search by university, course, or professor.
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
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center gap-6 px-4 md:px-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">For Students</h2>
                            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Notes curated for your courses. Access the best study materials.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <div>Biology 101</div>
                                    <div className="m-0">$9.99</div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        Notes for the introductory biology course. Includes detailed study materials for the midterm exam.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <div>Chemistry 201</div>
                                    <div className="m-0">$12.99</div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        Comprehensive notes for the advanced chemistry course. Perfect for understanding complex concepts
                                        and preparing for the final project.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <div>History 101</div>
                                    <div className="m-0">$7.99</div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        Concise and informative notes covering key historical events. Ideal for quick revision and enhancing
                                        your knowledge of history.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <div>Literature 202</div>
                                    <div className="m-0">$10.99</div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        In-depth analysis of literary works, including poetry, novels, and drama. Enhance your understanding
                                        of literature with these comprehensive notes.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container grid items-center gap-6 px-4 md:px-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">For Faculty</h2>
                            <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Teaching materials and research notes for faculty members. Enhance your courses with curated content.
                            </p>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 lg:grid-cols-2 lg:gap-12">
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <div>Biology Research Papers</div>
                                    <div className="m-0">$19.99</div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        Collection of peer-reviewed research papers in the field of biology. Valuable resource for academic
                                        research and enhancing the curriculum.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <div>Literary Analysis Notes</div>
                                    <div className="m-0">$15.99</div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        Comprehensive notes for analyzing literary works, including poetry, novels, and drama. Ideal for
                                        faculty members teaching literature courses.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <div>Physics Lecture Slides</div>
                                    <div className="m-0">$24.99</div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        Well-designed lecture slides covering various topics in physics. Perfect for faculty members to
                                        create engaging and informative lectures.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card className="w-full max-w-sm">
                                <CardHeader>
                                    <div>History Curriculum Guide</div>
                                    <div className="m-0">$29.99</div>
                                </CardHeader>
                                <CardContent>
                                    <div>
                                        Comprehensive curriculum guide for history courses, including lesson plans, recommended readings,
                                        and assessment methods.
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button size="sm" variant="outline">
                                        View Details
                                    </Button>
                                </CardFooter>
                            </Card>
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

function MountainIcon(props) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}
