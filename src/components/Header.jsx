import { useState } from 'react'
import { navLinks } from '../data/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  const handleNavClick = (path) => {
    setActive(path)
    setMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-max-width mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="flex flex-col min-w-0">
            <span className="font-title-md text-title-md text-on-surface tracking-tight truncate">
              Moisés García&nbsp;
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider truncate">
              Junior Full Stack Designer &amp; Developer
            </span>
          </div>
        </div>

        <nav className="hidden xl:flex items-center gap-space-lg">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={`#${link.path}`}
              onClick={() => handleNavClick(link.path)}
              className={
                active === link.path
                  ? 'transition-colors text-primary font-semibold font-label-md text-label-md'
                  : 'font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors'
              }
              aria-current={active === link.path ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm shrink-0">
          <button
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="xl:hidden p-space-xs text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center"
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="xl:hidden bg-surface border-t border-outline-variant/30 px-margin-mobile py-space-md flex flex-col gap-space-md">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={`#${link.path}`}
              onClick={() => handleNavClick(link.path)}
              className={
                active === link.path
                  ? 'text-primary font-semibold font-label-md text-label-md'
                  : 'font-label-md text-label-md text-on-surface-variant'
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
