import { BadgeCheck, UserCheck, Sparkles, Star, Clock } from 'lucide-react'

const trustItems = [
  { icon: BadgeCheck, label: 'Licensed Operator' },
  { icon: UserCheck, label: 'Trained Chauffeurs' },
  { icon: Sparkles, label: 'Sanitized Cars' },
  { icon: Star, label: 'Trusted Since 2014' },
  { icon: Clock, label: 'On-Time Pickup' },
]

export default function TrustBar() {
  return (
    <div className="bg-gold text-navy py-3 overflow-hidden" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {trustItems.map((item) => (
            <li key={item.label} className="flex items-center gap-2 text-sm font-bold whitespace-nowrap">
              <item.icon size={15} strokeWidth={2.5} aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
