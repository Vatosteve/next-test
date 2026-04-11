import { ReactNode } from 'react'

interface MetricCardProps {
  title: string
  widget?: ReactNode
  background?: ReactNode
  children: ReactNode
  className?: string
}

/**
 * MetricCard — base card shell for dashboard metric widgets.
 *
 * - `title`      Required. Rendered as the top-left label.
 * - `widget`     Optional. Rendered top-right (badge, button, etc.).
 * - `background` Optional. Rendered full-bleed behind all content (z-0).
 *                Use for gradient layers, glow effects, image placeholders, etc.
 * - `children`   The rest of the card body rendered in the padded content area.
 * - `className`  Optional extra classes on the outer wrapper.
 */
export default function MetricCard({
  title,
  widget,
  background,
  children,
  className = '',
}: MetricCardProps) {
  return (
    <div
      className={`metric-card relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col ${className}`}
      style={{ aspectRatio: '4/3' }}
    >
      {/* Background layer — sits beneath everything */}
      {background !== undefined && (
        <div className="absolute inset-0 z-0">{background}</div>
      )}

      {/* Header — always on top via z-10 */}
      <div className="relative z-10 flex items-start justify-between p-5 pb-0 shrink-0">
        <p className="text-white text-sm font-medium">{title}</p>
        {widget !== undefined && <div>{widget}</div>}
      </div>

      {/* Body — fills remaining space */}
      <div className="relative z-10 flex-1 flex flex-col min-h-0 p-5 pt-3">
        {children}
      </div>
    </div>
  )
}
