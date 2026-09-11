export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface mt-auto py-space-sm">
      <div className="max-w-max-width mx-auto px-margin-mobile sm:px-margin-tablet lg:px-margin-desktop flex flex-col sm:flex-row items-center justify-between gap-space-sm text-body-sm text-secondary">
        <p className="text-body-sm m-0">© 2026 Moisés García Sanz · Diseñador Full Stack Junior</p>
        <div className="flex items-center gap-space-md">
          <a
            className="hover:text-primary transition-colors"
            href="https://github.com/moigarcia00"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <span className="text-secondary/40">·</span>
          <a
            className="hover:text-primary transition-colors"
            href="https://linkedin.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <span className="text-secondary/40">·</span>
          <a className="hover:text-primary transition-colors" href="#inicio">
            Volver arriba ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
