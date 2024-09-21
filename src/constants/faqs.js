import axios from 'axios';

export async function fetchQuestions() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/questions');// cambiar http://127.0.0.1:8000 por el dominio a utilizar
        return response.data;
      } catch (error) {
        console.error("Error fetching questions:", error);
        throw new Error("Error fetching questions.");
      }
}
// export const faqs = [
//     {
//         question: '¿Cuáles son sus horarios de atención?',
//         answer: 'Estamos abiertos de lunes a sábado, de 8:00 AM a 8:00 PM. Los domingos estamos cerrados.',
//     },
//     {
//         question: '¿Ofrecen servicios de lavandería a domicilio?',
//         answer: 'Sí, ofrecemos servicio de recogida y entrega a domicilio. Puedes programar una recogida a través de nuestra página web o llamándonos directamente.',
//     },
//     {
//         question: '¿Cuánto tiempo tarda el servicio de lavandería?',
//         answer: 'El tiempo de entrega estándar es de 24 a 48 horas. Si necesitas un servicio exprés, tenemos opciones de entrega en el mismo día o al día siguiente, dependiendo de la hora de recogida.',
//     },
//     {
//         question: '¿Qué tipo de prendas pueden lavar?',
//         answer: 'Podemos lavar todo tipo de prendas, desde ropa cotidiana hasta ropa de cama, cortinas, edredones y artículos delicados. También ofrecemos servicios de limpieza en seco para prendas especiales.',
//     },
//     {
//         question: '¿Cómo puedo pagar por el servicio?',
//         answer: 'Aceptamos pagos en efectivo, tarjeta de crédito, débito, y pagos electrónicos como PayPal. También puedes pagar en línea a través de nuestra página web.',
//     },
//     {
//         question: '¿Qué sucede si se daña o pierde una prenda?',
//         answer: 'Nos esforzamos por manejar todas las prendas con el mayor cuidado. En el raro caso de que una prenda se dañe o se pierda, trabajaremos contigo para resolver el problema de manera justa y adecuada.',
//     },
//     {
//         question: '¿Tienen promociones o descuentos?',
//         answer: 'Sí, ofrecemos promociones regulares y descuentos para clientes frecuentes. Puedes suscribirte a nuestro boletín o seguirnos en redes sociales para estar al tanto de nuestras ofertas.',
//     },
//     {
//         question: '¿Qué productos utilizan para lavar la ropa?',
//         answer: 'Utilizamos detergentes y suavizantes de alta calidad, que son seguros para todo tipo de telas. También ofrecemos opciones de productos ecológicos para quienes prefieren una opción más sostenible.',
//     },
//     {
//         question: '¿Puedo dejar mis prendas sucias y recogerlas en otro horario?',
//         answer: 'Sí, puedes dejar tus prendas y recogerlas en cualquier momento dentro de nuestros horarios de atención. También ofrecemos la opción de recogida y entrega a domicilio para mayor comodidad.',
//     },
//     {
//         question: '¿Ofrecen servicios de planchado?',
//         answer: 'Sí, además del lavado, ofrecemos servicios de planchado para que tus prendas estén listas para usar.',
//     },
// ];
