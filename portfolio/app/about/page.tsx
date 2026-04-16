export default function AboutPage(){
    const  skills = ["Next.js", "Typescript", "React", "Tailwind", "Javascript", "Git"];

    return(
        <section className="space-y-6">
            <h1 className="text-3xl font-bold">About me</h1>

            <p className="text-gray-700 leading-relaxed max-w-3xl">I am a passionate web developer who enjoys creating modern, user-friendly websites. I like working on clean UI design and writing maintainable code. </p>

            <div>
                <h2 className="text-xl font-semibold mb-3">Skills</h2>
                <ul className="flex flex-wrap gap-2">
                    {skills.map((skill)=>(
                        <li
                        key={skill}
                        className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-sm"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}