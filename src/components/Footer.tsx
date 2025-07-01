import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      

         

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 página creada por el ingeniero en computación {" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://sites.google.com/view/dominioyeudimartinez/principal-page?authuser=1"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Yeudi Martinez
          </a>
        </h3>
      </section>
    </footer>
  );
};
