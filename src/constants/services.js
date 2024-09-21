import axios from 'axios';

export async function fetchServices() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/services');// cambiar http://127.0.0.1:8000 por el dominio a utilizar
        return response.data;
      } catch (error) {
        console.error("Error fetching services:", error);
        throw new Error("Error fetching services.");
      }
}

// export const services = [
//     {
//         id: 'lavanderia-en-general',
//         title: "Lavandería en General",
//         description: "Servicio de lavado y secado de ropa diaria.",

//         icon: "mdi:washing-machine",
//     },
//     {
//         id: 'tintoreria',
//         title: "Tintorería",
//         description: "Limpieza profesional de prendas delicadas sin agua.",

//         icon: "mdi:tumble-dryer",
//     },
//     {
//         id: 'edredones',
//         title: "Edredones",
//         description: "Lavado especializado de edredones y cobijas grandes.",

//         icon: "mdi:waves",
//     },
//     {
//         id: 'tamaras',
//         title: "Tamaras",
//         description: " Limpieza y mantenimiento de tapetes y alfombras.",

//         icon: "mdi:waves",
//     },
//     {
//         id: 'toallas',
//         title: "Toallas",
//         description: "Lavado y desinfección de toallas de baño y mano.",

//         icon: "mdi:waves",
//     },
//     {
//         id: 'ropa-en-general',
//         title: "Ropa en General",
//         description: "Lavado de todo tipo de prendas cotidianas.",

//         icon: "mdi:hanger",
//     },
// ];