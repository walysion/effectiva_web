"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Honestidad",
    children:
      "La honestidad es la base de nuestra relación con los clientes. Actuamos con total transparencia, sin engaños, para construir un ambiente de confianza mutua y resolver problemas financieros de manera justa y efectiva.",
  },
  {
    icon: HeartIcon,
    title: "Transparencia",
    children:
      "Nos comprometemos a ser claros y abiertos en cada paso del proceso. Nuestra transparencia garantiza que nuestros clientes siempre estén informados y comprendan todas las acciones que tomamos para normalizar su cartera.",
  },
  {
    icon: LockClosedIcon,
    title: "Integridad",
    children:
      "En todo momento, actuamos con integridad, manteniendo nuestros principios firmes en cada negociación. Somos una empresa que honra su palabra, cumpliendo con los acuerdos y buscando siempre soluciones que beneficien a todas las partes involucradas.",
  },
  {
    icon: LightBulbIcon,
    title: "Responsabilidad",
    children:
      "Asumimos la responsabilidad total de cada caso, tomando decisiones con cuidado y asegurándonos de que cada acción tomada esté alineada con el interés y bienestar del cliente. Nos comprometemos a gestionar las carteras de manera profesional y ética.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Your Learning App
        </Typography>
        <Typography variant="h1" color="white" className="mb-4">
          Nuestros Valores
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
         En nuestra empresa, los valores son el pilar que sostiene cada interacción y cada decisión que tomamos. Nos comprometemos a ofrecer un servicio excepcional basado en principios sólidos de empatía, integridad y responsabilidad. Cada miembro de nuestro equipo está capacitado para no solo atender, sino para escuchar y entender profundamente las necesidades de nuestros clientes.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
