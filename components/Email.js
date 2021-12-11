function Email() {
  return (
    <div className="absolute bottom-0 right-10 space-y-[175px] text-md text-white w-7 flex flex-col text-center">
      <p className="transform rotate-90 email hover:text-orange-text">
        entropia@cosmica.dev
      </p>
      <div className="relative left-3.5">
        <div className="border-l-[1px] border-white h-[90px]" />
      </div>
    </div>
  )
}

export default Email