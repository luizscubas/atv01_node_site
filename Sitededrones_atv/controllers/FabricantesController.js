import express from "express";
const app = express.Router();

const fabricantes = [
    { 
        id: 1, 
        nome: "DJI (Da-Jiang Innovations)", 
        paisOrigem: "China", 
        anoFundacao: 2006, 
        especialidade: "Multirrotores comerciais, industriais e agrícolas", 
        segmentoPrincipal: "Agronegócio e Enterprise", 
        imagem: "imgs/fabricantes/fab1.png"
    },
    { 
        id: 2, 
        nome: "Quantum-Systems", 
        paisOrigem: "Alemanha", 
        anoFundacao: 2015, 
        especialidade: "Aeronaves eVTOL de longo alcance", 
        segmentoPrincipal: "Mapeamento e Defesa Tática", 
        imagem: "imgs/fabricantes/fab2.jpg"
    },
    { 
        id: 3, 
        nome: "AgEagle (senseFly)", 
        paisOrigem: "Estados Unidos / Suíça", 
        anoFundacao: 2010, 
        especialidade: "Drones tipo asa fixa ultraleves", 
        segmentoPrincipal: "Topografia e Agricultura de Precisão", 
        imagem: "imgs/fabricantes/fab3.jpg"
    },
    { 
        id: 4, 
        nome: "XAG", 
        paisOrigem: "China", 
        anoFundacao: 2007, 
        especialidade: "Robótica agrícola e drones de pulverização autônomos", 
        segmentoPrincipal: "Agronegócio", 
        imagem: "imgs/fabricantes/fab4.png"
    },
    { 
        id: 5, 
        nome: "Skydio", 
        paisOrigem: "Estados Unidos", 
        anoFundacao: 2014, 
        especialidade: "Drones autônomos orientados por Inteligência Artificial", 
        segmentoPrincipal: "Inspeção e Segurança Pública", 
        imagem: "imgs/fabricantes/fab5.png"
    }
];

app.get('/fabricantes', (req, res) => {
    res.render('fabricantes', { 
        pageTitle: 'Fabricantes de Drones',
        fabricantes: fabricantes 
    });
});
export default app