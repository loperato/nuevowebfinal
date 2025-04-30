"use client";

import { useState, useEffect } from 'react';

interface ChatbotData {
  en: Record<string, string>;
  es: Record<string, string>;
}

export default function useChatbotData(): ChatbotData {
  const [chatbotData, setChatbotData] = useState<ChatbotData>({
    en: {},
    es: {}
  });

  useEffect(() => {
    // Función para procesar las preguntas y respuestas del archivo extraído
    const processQAData = async () => {
      try {
        // En un entorno real, esto podría ser una llamada a una API o a un archivo JSON
        // Para este ejemplo, usamos los datos extraídos del PDF
        
        const data: ChatbotData = {
          en: {
            "What is EfireX TRPL-E?": "EfireX TRPL-E is a water-based, mineral encapsulator agent designed to suppress lithium battery fires.",
            "Why are lithium battery fires dangerous?": "Because they can reach temperatures over 1000°C (1832°F) and can cause explosions and toxic gas release.",
            "What makes TRPL-E effective against lithium battery fires?": "Its ability to cool the batteries quickly below thermal runaway temperatures and encapsulate the fire.",
            "Is EfireX TRPL-E environmentally friendly?": "Yes, it's 100% biodegradable, non-toxic, and contains no PFAS/PFOA chemicals.",
            "Can EfireX be used on energized electrical equipment?": "Yes, it's non-conductive and safe to use on energized electrical equipment.",
            "What temperature can EfireX TRPL-E withstand?": "It can withstand temperatures exceeding 1250°C (2282°F).",
            "How does EfireX compare to traditional foam?": "Unlike traditional foams that may contain harmful PFAS chemicals, EfireX is environmentally friendly while providing superior cooling and encapsulation properties.",
            "Is EfireX certified?": "Yes, EfireX is UL certified and meets rigorous safety standards.",
            "What industries can use EfireX TRPL-E?": "Electric vehicles, aviation, data centers, energy storage facilities, and battery transportation.",
            "How long does EfireX TRPL-E last?": "EfireX has a shelf life of 5+ years with stable performance.",
            "Is cleanup required after using EfireX?": "Minimal cleanup is required, and there's no hazardous waste.",
            "What sizes does EfireX come in?": "EfireX is available in 9L portable extinguishers, 5-gallon containers, and 250-gallon industrial totes.",
            "How does EfireX work?": "It creates a protective mineral barrier that encapsulates the fire while rapidly cooling the thermal reaction.",
            "Is EfireX safe for food environments?": "Yes, it's approved for use in food processing environments with no contamination risk.",
            "Can EfireX be used in marine applications?": "Yes, it's safe for marine environments and won't cause harm to aquatic life."
          },
          es: {
            "¿Qué es EfireX TRPL-E?": "EfireX TRPL-E es un agente encapsulador mineral en base acuosa diseñado para extinguir incendios de baterías de litio.",
            "¿Por qué son peligrosos los incendios de baterías de litio?": "Porque pueden alcanzar temperaturas superiores a 1000°C (1832°F) y causar explosiones y liberación de gases tóxicos.",
            "¿Qué hace que TRPL-E sea efectivo contra incendios de baterías de litio?": "Su capacidad para enfriar rápidamente las baterías por debajo de las temperaturas de thermal runaway y encapsular el fuego.",
            "¿Es EfireX TRPL-E ecológico?": "Sí, es 100% biodegradable, no tóxico y no contiene químicos PFAS/PFOA.",
            "¿Se puede usar EfireX en equipos eléctricos energizados?": "Sí, no es conductivo y es seguro para usar en equipos eléctricos energizados.",
            "¿Qué temperatura puede soportar EfireX TRPL-E?": "Puede soportar temperaturas superiores a 1250°C (2282°F).",
            "¿Cómo se compara EfireX con la espuma tradicional?": "A diferencia de las espumas tradicionales que pueden contener químicos PFAS dañinos, EfireX es ecológico y proporciona propiedades superiores de enfriamiento y encapsulación.",
            "¿Está certificado EfireX?": "Sí, EfireX está certificado por UL y cumple con rigurosos estándares de seguridad.",
            "¿Qué industrias pueden usar EfireX TRPL-E?": "Vehículos eléctricos, aviación, centros de datos, instalaciones de almacenamiento de energía y transporte de baterías.",
            "¿Cuánto dura EfireX TRPL-E?": "EfireX tiene una vida útil de más de 5 años con un rendimiento estable.",
            "¿Se requiere limpieza después de usar EfireX?": "Se requiere una limpieza mínima y no hay residuos peligrosos.",
            "¿En qué tamaños viene EfireX?": "EfireX está disponible en extintores portátiles de 9L, contenedores de 5 galones y contenedores industriales de 250 galones.",
            "¿Cómo funciona EfireX?": "Crea una barrera mineral protectora que encapsula el fuego mientras enfría rápidamente la reacción térmica.",
            "¿Es EfireX seguro para entornos alimentarios?": "Sí, está aprobado para su uso en entornos de procesamiento de alimentos sin riesgo de contaminación.",
            "¿Se puede usar EfireX en aplicaciones marinas?": "Sí, es seguro para entornos marinos y no causará daño a la vida acuática."
          }
        };
        
        setChatbotData(data);
      } catch (error) {
        console.error('Error loading chatbot data:', error);
      }
    };

    processQAData();
  }, []);

  return chatbotData;
}
