import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}
const FAQList: FAQProps[] = [
  {
    question: "¿Cuánto cuesta una consulta legal en Costa Rica?",
    answer:
      "El costo de una consulta legal puede variar dependiendo del tipo de asesoría. Generalmente, una consulta básica ronda entre ₡25.000 y ₡50.000 colones.",
    value: "item-1",
  },
  {
    question: "¿Puedo divorciarme aunque mi pareja no quiera?",
    answer:
      "Sí, en Costa Rica existen causales para el divorcio unilateral. En estos casos se inicia un proceso judicial, y el juez evalúa si procede la disolución del vínculo.",
    value: "item-2",
  },
  {
    question: "¿Qué debo hacer si me demandan o recibo una notificación judicial?",
    answer:
      "Lo primero es no ignorarla. Se recomienda contactar a una abogada de confianza de inmediato para revisar el caso, ya que los plazos judiciales son cortos y es importante actuar rápido.",
    value: "item-3",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frecuentes preguntas de{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          nuestros clientes
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Tiene más preguntas?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contáctame
        </a>
      </h3>
    </section>
  );
};
