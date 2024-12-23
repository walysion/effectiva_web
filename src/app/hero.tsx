"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Usamos un video de fondo en lugar de la imagen */}
      <header className="grid !min-h-[49rem] bg-cover bg-center px-8 relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            zIndex: -1, // Asegura que el video esté detrás del contenido
          }}
        >
          <source src="/image/134112-758552431.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Líderes <br />en Contact Center Soluciones Financieras y Normalización de Carteras.
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
              Tu aliado estratégico para alcanzar la normalización y el éxito financiero.
            </Typography>
            <Typography className="mb-4" color="white" variant="h6">
              Get the app
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Linkedin
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                NOTICIAS
              </Button>
            </div>
          </div>
       
        </div>
      </header>

      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            Líderes en Contact Center, Transformamos Desafíos Financieros en Oportunidades de Éxito
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            En Efectiva, entendemos que el éxito financiero no solo depende de la calidad de los servicios, sino de la capacidad para brindar soluciones ágiles, personalizadas y de alto impacto. Somos expertos en normalización de carteras y gestión de soluciones financieras, y nuestro equipo de profesionales altamente capacitados se dedica a ofrecer atención al cliente con empatía y eficacia.

Gracias a nuestra tecnología avanzada, procesos optimizados y enfoque integral, ayudamos a las empresas a superar desafíos financieros, transformar carteras morosas en relaciones de confianza, y maximizar la rentabilidad a largo plazo. Con Efectiva, cada interacción es una oportunidad para fortalecer la relación con el cliente, recuperar activos y generar valor sostenible.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
