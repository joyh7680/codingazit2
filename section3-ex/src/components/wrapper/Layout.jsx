import Breadcrumb from '../items/Breadcrumb';

export default function Layout({ children, title, isHome = false }) {
  return (
    <main>
      <h1>{title}</h1>
      {pathname !== '/' && <Breadcrumb />}
      <div>{children}</div>
    </main>
  );
}
