
import { buttonVariants } from "./ui/button";


export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-5xl font-bold leading-tight">
          <h1 className="inline-block text-gray-900 dark:text-white">
            María Olivia Oca Varela
          </h1>
          <p className="mt-4 text-lg text-muted-foreground font-medium">
            Abogada. Comprometida con tu justicia.
            <br />
            Asesoría legal clara, humana y efectiva.
          </p>
        </main>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="https://wa.me/50686280746?text=Hola%2C%20me%20gustar%C3%ADa%20consultar%20sobre%20sus%20servicios%20legales."
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Contactar por WhatsApp
          </a>

          
          
        </div>
      </div>
            

   

      <div className="shadow"></div>
    </section>



  );
};
