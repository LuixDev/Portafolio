import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

// Definición de los tipos de propiedades que recibirá el componente
type ContactFormEmailProps = {
  message: string;      // Mensaje enviado desde el formulario de contacto
  senderEmail: string;  // Correo electrónico del remitente
};

// Componente que genera el correo electrónico cuando alguien envía un mensaje desde el portafolio
export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      {/* Vista previa del correo, se muestra en algunas bandejas de entrada antes de abrir el email */}
      <Preview>Nuevo mensaje desde tu sitio de portafolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            {/* Sección principal del correo */}
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              {/* Encabezado del mensaje */}
              <Heading className="leading-tight">
                Has recibido el siguiente mensaje desde el formulario de contacto
              </Heading>
              {/* Contenido del mensaje */}
              <Text>{message}</Text>
              <Hr />
              {/* Correo del remitente */}
              <Text>El correo del remitente es: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
