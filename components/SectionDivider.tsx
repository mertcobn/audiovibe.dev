/* Signature detail: two stacked horizontal lines
   — full-width + 85% width, rgba(255,255,255,0.15), 1px, 9px apart */
export default function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <div className="section-divider__line" />
      <div className="section-divider__line" />
    </div>
  )
}
