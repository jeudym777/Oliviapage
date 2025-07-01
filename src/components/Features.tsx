import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import familia from "../assets/justice.jpg";
import contratos from "../assets/handshake.jpg";
import notariado from "../assets/bussiness.jpg";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [  {
    title: "Derecho de Familia",
    description:
      "Divorcios, pensiones alimentarias, guarda y custodia. Soluciones humanas para momentos difíciles.",
    image: familia,
  },
  {
    title: "Derecho Civil y Contratos",
    description:
      "Redacción, revisión y ejecución de contratos civiles y comerciales. Protección legal garantizada.",
    image: contratos,
  },
  {
    title: "Notariado y Escrituras",
    description:
      "Poderes, compraventas, sucesiones, certificaciones y todo tipo de trámites notariales.",
    image: notariado,
  },
];

const featureList: string[] = [
  "Atención personalizada",
  "Confidencialidad",
  "Responsabilidad",
  "Pasión por ayudar",
  "Contacto directo",
  "Calidad Humana",
  "Precios accesibles",
  "Ética profesional"
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Nuestras áreas{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
           clave de especialización
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="Imagen área legal"
                className="w-full h-48 object-cover object-center rounded-md"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
