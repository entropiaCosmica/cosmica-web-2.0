function Email() {
  return (
    <div className="fixed hidden lg:inline-block bottom-0 right-8 space-y-[175px] text-md text-gray-300 w-7 flex-col text-center">
      <p className="transform rotate-90 email hover:text-orange-text cursor-pointer">
        entropia@cosmica.dev
      </p>
      <div className="relative flex left-3.5">
        <div className="border-l-[1px] border-gray-300 h-[90px]" />
      </div>
    </div>
  )
}

export default Email