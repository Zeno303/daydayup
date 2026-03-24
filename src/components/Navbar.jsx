import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const links = [
    { to: '/', label: '课程' },
    { to: '/words', label: '单词本' },
  ]
  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wide">📚 DayDayUp</Link>
        <div className="flex gap-6">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium hover:text-blue-200 transition ${
                location.pathname === l.to ? 'underline' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
