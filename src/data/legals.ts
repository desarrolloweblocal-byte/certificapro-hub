export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export const LEGAL_PAGES: Record<string, LegalContent> = {
  privacy: {
    title: 'Política de Privacidad y Protección de Datos',
    lastUpdated: '15 de Febrero de 2026',
    sections: [
      {
        heading: '1. Responsable del Tratamiento',
        body: 'En cumplimiento del Reglamento General de Protección de Datos (RGPD) (UE) 2016/679 y la Ley Orgánica 3/2018 (LOPDGDD), CertificaPro informa que los datos personales recabados a través de este sitio web son tratados de manera confidencial, lícita y transparente.'
      },
      {
        heading: '2. Finalidad del Tratamiento de Datos',
        body: 'Los datos que el usuario pudiera proporcionar (mediante formularios de contacto o suscripción al boletín informativo de cursos) se emplearán exclusivamente para responder consultas y remitir actualizaciones sobre convocatorias de cursos gratuitos oficiales. En ningún momento se cederán a terceros con fines comerciales sin consentimiento previo.'
      },
      {
        heading: '3. Publicidad y Cookies de Google AdSense',
        body: 'Este sitio web utiliza servicios publicitarios provistos por Google AdSense, operado por Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, EE.UU.). Google utiliza cookies para publicar anuncios en nuestro sitio basados en las visitas anteriores del usuario a este o a otros sitios de internet. Los usuarios pueden inhabilitar la publicidad personalizada consultando la Configuración de anuncios de Google (adssettings.google.com) o a través de los portales de autorregulación como www.aboutads.info.'
      },
      {
        heading: '4. Derechos del Interesado (ARCO+)',
        body: 'El usuario puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición mediante comunicación por escrito a través de nuestra página de contacto oficial, acompañando copia de su documento identificativo.'
      }
    ]
  },
  terms: {
    title: 'Aviso Legal y Condiciones Generales de Uso',
    lastUpdated: '15 de Febrero de 2026',
    sections: [
      {
        heading: '1. Objeto y Titularidad del Sitio Web',
        body: 'El presente sitio web (CertificaPro) tiene carácter divulgativo y educativo, con el fin de recopilar, estructurar y facilitar el acceso libre y gratuito a convocatorias formativas y programas oficiales emitidos por instituciones educativas y empresas tecnológicas (Google, Harvard, IBM, Microsoft, entre otras).'
      },
      {
        heading: '2. Exención de Responsabilidad sobre Cursos Externos',
        body: 'CertificaPro es un portal independiente de información y no actúa como entidad emisora ni certificadora de los cursos de terceros. Las marcas, logotipos y nombres comerciales de las instituciones citadas pertenecen a sus respectivos titulares. No garantizamos la disponibilidad ininterrumpida de las becas o plataformas externas, las cuales se rigen por sus propios términos de servicio.'
      },
      {
        heading: '3. Propiedad Intelectual',
        body: 'Los textos originales, análisis editoriales, guías y diseño visual de CertificaPro son propiedad intelectual de la plataforma. Queda prohibida la reproducción total o parcial con fines lucrativos sin autorización expresa por escrito.'
      }
    ]
  },
  cookies: {
    title: 'Política de Cookies y Consentimiento',
    lastUpdated: '15 de Febrero de 2026',
    sections: [
      {
        heading: '1. ¿Qué son las cookies?',
        body: 'Una cookie es un fichero que se descarga en su dispositivo al acceder a determinadas páginas web para almacenar y recuperar información sobre los hábitos de navegación del usuario.'
      },
      {
        heading: '2. Tipos de cookies utilizadas en este sitio web',
        body: '• Cookies técnicas necesarias: Permiten la navegación y el funcionamiento seguro de la web.\n• Cookies analíticas: Empleadas para contabilizar visitas y analizar qué guías y cursos resultan más útiles a los usuarios.\n• Cookies publicitarias y de terceros (Google AdSense): Utilizadas para mostrar publicidad relevante según los intereses del usuario y gestionar la frecuencia de los anuncios.'
      },
      {
        heading: '3. Panel de Configuración y Desactivación',
        body: 'Usted puede aceptar, rechazar o configurar en cualquier momento el uso de cookies no esenciales a través de nuestro banner de consentimiento flotante o mediante las opciones de configuración de su navegador (Chrome, Firefox, Safari, Edge).'
      }
    ]
  },
  about: {
    title: 'Sobre Nosotros — Misión y Equipo Editorial',
    lastUpdated: '15 de Febrero de 2026',
    sections: [
      {
        heading: 'Nuestra Misión: Democratizar la Educación Tecnológica de Élite',
        body: 'CertificaPro nació con un objetivo nítido: eliminar las barreras económicas en el acceso a la formación digital de primer nivel. Millones de personas desconocen que las mayores universidades y corporaciones tecnológicas del planeta ofrecen becas y certificados 100% gratuitos si se conoce el procedimiento oficial adecuado.'
      },
      {
        heading: 'Criterio Editorial y Transparencia',
        body: 'Cada curso, guía o convocatoria recopilada en nuestro directorio es verificada previamente por nuestro equipo. Comprobamos la gratuidad real del material, la validez del diploma y la ausencia de costes ocultos antes de publicarlo. Nuestro portal se financia a través de patrocinios publicitarios transparentes para mantener el contenido libre de suscripciones de pago para el usuario final.'
      },
      {
        heading: 'Compromiso Ético',
        body: 'No cobramos a los estudiantes por acceder a nuestros artículos, no vendemos bases de datos personales y priorizamos siempre las fuentes oficiales gubernamentales y académicas de máxima reputación.'
      }
    ]
  },
  contact: {
    title: 'Contacto y Soporte al Usuario',
    lastUpdated: '15 de Febrero de 2026',
    sections: [
      {
        heading: '¿Tienes dudas sobre algún curso o deseas reportar un enlace caído?',
        body: 'Puedes contactar con el equipo editorial de CertificaPro a través de nuestro formulario en línea o directamente a la dirección de correo electrónico institucional: contacto@certificapro.org. Respondemos a todas las consultas en un plazo de 24 a 48 horas laborables.'
      },
      {
        heading: 'Propuestas de Colaboración o Correcciones Editoriales',
        body: 'Si eres una institución educativa o representas a una entidad formativa oficial y deseas sugerir un programa formativo gratuito con certificación para su inclusión en nuestro directorio, escríbenos a colaboraciones@certificapro.org.'
      }
    ]
  }
};
