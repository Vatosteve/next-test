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
  // Rule #2: hover effects as Tailwind utilities (no custom .metric-card CSS class)
  // Rule #3: aspect-[4/3] replaces the inline style={{ aspectRatio: '4/3' }}
  const cardClasses = [
    'aspect-[4/3] relative bg-neutral-900 rounded-2xl overflow-hidden flex flex-col',
    'shadow-[0_0_28px_4px_rgba(251,115,0,0)]',
    'hover:shadow-[0_0_28px_4px_rgba(251,115,0,0.12)]',
    'hover:scale-105 hover:cursor-pointer',
    'transition-[box-shadow,transform,scale] duration-500 ease-out',
    className,
  ].join(' ')

  return (
    <div className={cardClasses} data-testid="metric-card">
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
