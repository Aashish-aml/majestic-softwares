export default function BrandLogo({ className = '', showWordmark = true, title = 'MajesticSoftwares' }) {
  return (
    <span className={`brand-logo ${className}`.trim()}>
      <img
        className="brand-logo__mark"
        src="/beta/images/logo-mark.svg"
        alt=""
        width={32}
        height={32}
        decoding="async"
      />
      {showWordmark ? <span className="brand-logo__text">{title}</span> : null}
    </span>
  );
}
