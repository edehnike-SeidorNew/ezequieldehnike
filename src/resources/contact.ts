import type { Locale } from "./locale";

/** WhatsApp number in international format, without "+" or spaces (Argentina mobile: 54 9 + area code + number). */
export const whatsappNumber = "5491168090361";
export const whatsappDisplay = "+54 9 11 6809 0361";
export const contactEmail = "ezequieldehnike@gmail.com";

export type ContactData = {
  title: string;
  description: string;
  heading: string;
  intro: string;
  form: {
    title: string;
    name: string;
    email: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    errorFallback: string;
    invalid: string;
  };
  whatsapp: {
    title: string;
    text: string;
    qrCaption: string;
    mobileCaption: string;
    button: string;
    qrAlt: string;
    prefill: string;
  };
  direct: {
    title: string;
    email: string;
    linkedin: string;
  };
};

export const contact: Record<Locale, ContactData> = {
  es: {
    title: "Contacto",
    description: "Escribime por mail o por WhatsApp para trabajar juntos",
    heading: "Hablemos",
    intro:
      "Contame sobre tu proyecto o tu idea. Podés escribirme por mail o directo por WhatsApp y te respondo a la brevedad.",
    form: {
      title: "Escribime un mail",
      name: "Nombre",
      email: "Tu email",
      message: "Mensaje",
      messagePlaceholder: "Contame qué necesitás...",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Gracias! Recibí tu mensaje y te voy a responder pronto.",
      error: "No pude enviar el mensaje en este momento.",
      errorFallback: "Escribime directamente a",
      invalid: "Completá tu nombre, un email válido y el mensaje.",
    },
    whatsapp: {
      title: "¿Preferís WhatsApp?",
      text: "Escribime directo y te respondo lo antes posible.",
      qrCaption: "Escaneá el código desde tu celular",
      mobileCaption: "Tocá el botón para escribirme directo por WhatsApp",
      button: "Escribir por WhatsApp",
      qrAlt: "Código QR para abrir WhatsApp",
      prefill: "Hola Ezequiel, vi tu portfolio y quería consultarte por un proyecto.",
    },
    direct: {
      title: "También en",
      email: "Email",
      linkedin: "LinkedIn",
    },
  },
  en: {
    title: "Contact",
    description: "Write to me by email or WhatsApp to work together",
    heading: "Let's talk",
    intro:
      "Tell me about your project or idea. You can write to me by email or directly on WhatsApp and I will get back to you shortly.",
    form: {
      title: "Send me an email",
      name: "Name",
      email: "Your email",
      message: "Message",
      messagePlaceholder: "Tell me what you need...",
      send: "Send message",
      sending: "Sending...",
      success: "Thank you! I received your message and will reply soon.",
      error: "I couldn't send the message right now.",
      errorFallback: "Please write to me directly at",
      invalid: "Please fill in your name, a valid email and a message.",
    },
    whatsapp: {
      title: "Prefer WhatsApp?",
      text: "Message me directly and I will reply as soon as I can.",
      qrCaption: "Scan the code with your phone",
      mobileCaption: "Tap the button to message me directly on WhatsApp",
      button: "Message on WhatsApp",
      qrAlt: "QR code to open WhatsApp",
      prefill: "Hi Ezequiel, I saw your portfolio and wanted to ask about a project.",
    },
    direct: {
      title: "Also on",
      email: "Email",
      linkedin: "LinkedIn",
    },
  },
};
