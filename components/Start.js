function Start() {
  return (
    <section className="max-w-[1000px] flex flex-col justify-center min-h-screen mx-auto my-0">
      <div className="pl-1">
        <h1 className="text-orange-text font-heebo font-normal leading-loose ">
          Hi, my name is
        </h1>
      </div>
      <div>
        <h1 className="text-white font-heebo font-bold text-7xl lg:text-7xl leading-normal lg:leading-tight">
          Santiago Zapata.
        </h1>
        <h1 className="text-gray-400 font-heebo font-bold text-7xl lg:text-7xl lg:leading-snug">
          Full-stack developer.
        </h1>
      </div>
      <div className="text-gray-400 mt-5 text-lg max-w-xl">
        <p>I&apos;m a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible applications to help modern <span className="text-orange-text font-medium">entrepreneurs</span>.</p>
      </div>
      <button className="border border-orange-border text-orange-text py-4 px-3 w-60 rounded-md mt-14 hover:bg-orange-bg hover:bg-opacity-20">Check out my projects!</button>
    </section>
  )
}

export default Start
