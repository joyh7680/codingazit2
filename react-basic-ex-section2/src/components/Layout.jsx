export default function Layout({ children, title, isHome = false }) {
  return (
    <main>
      {/* {!isHome && <h3>{title}</h3>} */}
      {isHome ? <figure>모션효과</figure> : <h3>{title}</h3>}
      {children}
    </main>
  );
}
