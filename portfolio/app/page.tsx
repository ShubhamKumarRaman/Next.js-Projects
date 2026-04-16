import Image from "next/image";
export default function HomePage() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
      <div className="flex-1 text-center md:text-left">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">Hello, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Shubham Kumar</h1>
        <h2 className="text-xl md:text-2xl text-gray-700 mb-4">Full stack developer</h2>
        <p className="text-gray-600 max-w-xl mx-auto md:mx-0">I build clearn and responsiv web application using modern tools like next.js, Typescript and Tailwind CSS</p>
      </div>
      <div className="text-gray-600 max-w-xl mx-auto md:mx-0">
        <Image
        src="/images/profile.jpg"
        alt="Profile Image"
        width={260}
        height={260}
        className="rounded-2xl object-cover border border-gray-200 shadow-sm"
        priority
        />
      </div>
    </section>
  )
}