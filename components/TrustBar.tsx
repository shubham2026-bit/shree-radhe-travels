const trustItems = [
  { icon: '🪪', label: 'Licensed Operator' },
  { icon: '👨‍✈️', label: 'Trained Chauffeurs' },
  { icon: '🧼', label: 'Sanitized Cars' },
  { icon: '⭐', label: 'Trusted Service' },
  { icon: '⏰', label: 'On-Time Pickup' },
]

export default function TrustBar() {
  return (
    <div className="bg-[var(--gold)] text-white py-3 overflow-hidden" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
