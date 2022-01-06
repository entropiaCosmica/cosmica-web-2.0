function Email() {
  // const sendEmail = () => {
  //   window.open("entropia@cosmica.dev")
  // }

  return (
    <div className="fixed hidden lg:inline-block bottom-0 right-8 space-y-[175px] text-md text-gray-300 w-7 flex-col text-center">
      <a href="mailto:entropia@cosmica.dev">
        <p className="rotate-90 email hover:text-orange-text cursor-pointer hover:-translate-y-1 transition duration-200 ease-in-out">
          entropia@cosmica.dev
        </p>
      </a>
      <div className="relative flex left-3.5">
        <div className="border-l-[1px] border-gray-300 h-[90px]" />
      </div>
    </div>
  )
}

export default Email