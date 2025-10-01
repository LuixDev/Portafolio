"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Acerca de");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="acerca-de"
    >
   <SectionHeading>Sobre mí</SectionHeading>
<p className="mb-3">
  Soy <span className="font-medium">Ingeniero de Sistemas especializado en programación de software</span>, 
  con experiencia en el desarrollo de <span className="font-medium">aplicaciones web, de escritorio y soluciones tecnológicas a medida</span>. 
  He trabajado en empresas como <span className="font-medium">Cik Tek</span> y <span className="font-medium">Galidancia</span>, 
  así como de manera independiente para personas naturales, ofreciendo soluciones personalizadas y eficientes.
</p>
<p className="mb-3">
  Poseo conocimientos sólidos en todas las áreas de <span className="font-medium">DevOps</span> y en la implementación de  
  <span className="font-medium"> sistemas distribuidos</span> para el desarrollo de aplicaciones escalables, 
  aplicando diferentes arquitecturas modernas. Además, tengo experiencia en el uso de 
  <span className="font-medium"> servidores de mensajería como RabbitMQ</span> para la comunicación entre 
  <span className="font-medium"> microservicios</span>, asegurando un rendimiento confiable y eficiente.
</p>



    </motion.section>
  );
}
