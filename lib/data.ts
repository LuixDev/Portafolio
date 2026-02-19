import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaJava, FaPython } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Inicio",
    hash: "#inicio",
  },
  {
    name: "Acerca de",
    hash: "#acerca-de",
  },
  {
    name: "Proyectos",
    hash: "#proyectos",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Contacto",
    hash: "#contacto",
  },
] as const;

export const experiencesData = [
  {
    title: "Desarrollador Freelance",
    location: "Remoto",
    description:
      "Inicié mi carrera como freelancer trabajando con Java utilizando el IDE NetBeans, desarrollando aplicaciones de escritorio y soluciones backend para pequeños proyectos.",
    icon: React.createElement(FaJava),
    date: "2020",
  },
  {
    title: "Desarrollador Android",
    location: "Remoto",
    description:
      "Desarrollé aplicaciones móviles utilizando Java con Android Studio y Firebase, implementando autenticación de usuarios, bases de datos en tiempo real y notificaciones push.",
    icon: React.createElement(FaJava),
    date: "2021 - 2022",
  },
  {
    title: "Práctica con Python y Power BI",
    location: "Universidad / Autoaprendizaje",
    description:
      "Amplié mis conocimientos aprendiendo Python y Power BI para análisis y visualización de datos, como parte de mi práctica en Ingeniería de Sistemas.",
    icon: React.createElement(FaPython),
    date: "2023",
  },
  {
    title: "Desarrollador Full Stack",
    location: "Proyectos con clientes - Remoto",
    description:
      "He trabajado con distintos clientes desarrollando proyectos full stack utilizando Angular y Java Spring Boot en el backend, además de Flutter e Ionic para aplicaciones móviles híbridas. También he explorado otras tecnologías modernas relacionadas con DevOps y servicios en la nube.",
    icon: React.createElement(FaReact),
    date: "2024 - Actualidad",
  },
] as const;

export const projectsData = [
  {
    title: "Red Social Con Mapas",
    description:
      "Una plataforma social diseñada para negocios y usuarios que permite buscar y descubrir negocios cercanos mediante un mapa interactivo.",
    tags: ["Angular", "Ionic", "Python", "PostgreSQL", "Rust"],
    imageUrl: "https://pub-c5d7ac2cc17a41d7806e24bef12dffe9.r2.dev/Captura.JPG", // ✅ Ruta correcta con comillas y slash
    link: "https://netstore-b5495.web.app/" // ✅ Botón para visitar
  },
  {
    title: "E-commerce Con WordPress",
    description:
      "Creamos esta tienda online para ofrecer productos reales con stock disponible en nuestra bodega Ahora gestionamos directamente el inventario para garantizar entregas más rápidas, mejor calidad y mayor confianza",
    tags: ["WordPress", "Hostinger", "Elementor", "WooCommerce", "PHP"],
    imageUrl: "https://f005.backblazeb2.com/file/rysolf/img/Captura.JPG",
    link: "https://xsupplystore.com/"
  },
  {
    title: "PC Activa",
    description:
      "Es un software que mueve el mouse por un cierto periodo de tiempo, realizado con Angular Web y Python puro. Manipula el mouse automáticamente.",
    tags: ["Angular", "Python"],
    imageUrl: "https://pub-c5d7ac2cc17a41d7806e24bef12dffe9.r2.dev/Captura3.JPG",
    link: "https://pcactiva.vercel.app/"
  },
] as const;


export const skillsData = [
  // 🌐 Frontend
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Redux",
  "Zustand",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Vue.js",
  "Angular",
  "Ionic",
  "Quasar",
  "Vite",
  "Webpack",
  
  // 🧠 Backend
  "Node.js",
  "Express",
  "NestJS",
  "Fastify",
  "GraphQL",
  "gRPC",
  "REST API",
  "WebSockets",
  "RabbitMQ",
  "Kafka",
  
  // 🗃️ Bases de datos
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "MariaDB",
  "SQLite",
  "Redis",
  "Supabase",
  "Prisma",
  "Mongoose",
  "Citus",
  "Firestore",
  "ElasticSearch",
  
  // 🐍 Lenguajes extra / frameworks
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring Boot",
  "C#",
  "Unity",
  "PHP",
  "C++",
  "C#",
  "Rust",
  ".NET",
, "Laravel",
  "Go",
  
  // 🐳 DevOps & Infraestructura
  "Git",
  "GitHub",
  "GitLab",
  "Docker",
  "Docker Compose",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "NGINX",
  "Apache",
  "Prometheus",
  "JFrog Artifactory",
  "Grafana",
  "CI/CD",
  "GitHub Actions",
  "GitLab CI",
  "Jenkins",
  
  // ☁️ Cloud Platforms
  "AWS",
  "Google Cloud",
  "Azure",
  "Vercel",
  "Netlify",
  "Firebase",
  
  // 🧪 Testing & Calidad
  "Jest",
  "Mocha",
  "Chai",
  "Cypress",
  "SonarQube",
  "Playwright",
  "Robolectric",
  "Postman",
  
  // 🧭 Arquitectura & Otros
  "Microservicios",
  "Sistemas Distribuidos",
  "WebAssembly",
  "Edge Computing",
] as const;

