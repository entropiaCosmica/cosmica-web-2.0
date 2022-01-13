import pdf from '../../static/Santiago_Zapata_CV.pdf'

function ResumeButton({ width, height }) {
  const onResumeClick = () => {
    window.open(pdf);
  }

  return (
    <a onClick={onResumeClick} rel="noopener noreferrer" target="_blank">
      <button className={`border border-orange-border text-orange-text px-${width.toString()} py-${height.toString()} rounded-md hover:bg-orange-bg hover:bg-opacity-20 transition duration-200 ease-out`}>
        Resume
      </button>
    </a>
  )
}

export default ResumeButton
