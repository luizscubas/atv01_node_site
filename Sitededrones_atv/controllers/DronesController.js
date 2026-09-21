import express from "express";
const app = express.Router();

const drones = [
    { modelo: "DJI Agras T40", fabricante: "DJI Agriculture", tipo: "Multirrotor", mtow: "101 kg", imagem: "imgs/drones/drone1.jpg" },
    { modelo: "Matrice 350 RTK", fabricante: "DJI Enterprise", tipo: "Multirrotor", mtow: "9.2 kg", imagem: "imgs/drones/drone2.jpg" },
    { modelo: "Trinity F90+", fabricante: "Quantum-Systems", tipo: "eVTOL", mtow: "5.5 kg", imagem: "imgs/drones/drone3.jpg" },
    { modelo: "Mavic 3 Multispectral", fabricante: "DJI Enterprise", tipo: "Multirrotor", mtow: "1.05 kg", imagem: "imgs/drones/drone4.jpg" },
    { modelo: "senseFly eBee X", fabricante: "AgEagle", tipo: "Asa Fixa", mtow: "1.6 kg", imagem: "imgs/drones/drone5.jpg" }
];

app.get('/drones', (req, res) => {
    res.render('drones', { 
        pageTitle: 'Frota de Drones',
        drones: drones
    });
});
export default app
