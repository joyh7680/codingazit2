import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { tw } from "../../globals";
import Breadcrumb from "../items/Breadcrumb";

export default function Layout({ title, children, className }) {
  // prettier-ignore
  const css = {
    main: tw`
      flex flex-wrap justify-between 
      px-[10vw] pt-[20vh] pb-[5vh] 
      max-md:pt-[15vh]
    `,
    main_h1: tw`
      font-raleway text-[7vmax] leading-none font-thin tracking-tight 
      after:mt-5 after:mb-8 after:ml-2 after:block after:h-0.5 after:w-18 after:bg-dark after:content-[''] 
      max-md:w-full
    `,
    div: tw`
      mt-10 mb-20
      flex flex-wrap justify-between    
      min-h-[40vh] w-full  
    `,
  };

  const { pathname } = useLocation();

  return (
    <main className={twMerge(css.main, className)}>
      <h1 className={css.main_h1}>{title.toUpperCase()}</h1>

      {pathname !== "/" && <Breadcrumb />}

      <div className={css.div}>{children}</div>
    </main>
  );
}
