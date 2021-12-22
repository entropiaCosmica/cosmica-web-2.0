function Start() {
  return (
    <section className="max-w-[1000px] flex flex-col justify-center min-h-screen mx-auto my-0">
      <div className="pl-1 pb-6">
        <h1 className="text-orange-text font-semibold SFMono">
          Hi, my name is
        </h1>
      </div>
      <div className="font-heebo font-bold text-4xl md:text-[70px] leading-tight space-y-3">
        <h1 className="text-white">
          Santiago Zapata.
        </h1>
        <h1 className="text-gray-400 ">
          I build things for the web.
        </h1>
      </div>
      <div className="text-gray-400 mt-5 text-base md:text-md max-w-xl">
        <p>I&apos;m a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building accessible applications to help modern <span className="text-orange-text font-medium">entrepreneurs</span>.</p>
      </div>
      <button className=" border border-orange-border text-orange-text py-4 px-3 w-56 rounded-md mt-12 hover:bg-orange-bg hover:bg-opacity-20 transition duration-300 ease-out SFMono whitespace-nowrap text-sm">Check out my projects!</button>
    </section>
  )
}

export default Start
