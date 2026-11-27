import './SectionHeading.css'

interface SectionHeadingProps {
  eyebrow: string
  id: string
  title: string
}

function SectionHeading({ eyebrow, id, title }: SectionHeadingProps) {
  return (
    <header className="xeory-section-heading">
      <span className="xeory-section-eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
    </header>
  )
}

export default SectionHeading
