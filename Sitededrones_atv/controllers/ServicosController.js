import express from "express";
const app = express.Router();

const servicos = [
    { 
        id: 1, 
        area: "Pulverização Agrícola", 
        descricao: "Aplicação ultrabaixo volume (UBV) de defensivos e fertilizantes biológicos com alta precisão e baixo consumo hídrico.", 
        droneRecomendado: "Multirrotores de Carga Pesada (ex: Agras T40, XAG P100)", 
        sensores: "Bicos centrífugos, radar altimétrico e LiDAR de terreno", 
        setor: "Agronegócio",
        imagem: "imgs/servicos/servico1.jpg" 
    },
    { 
        id: 2, 
        area: "Operações Táticas e Segurança Pública", 
        descricao: "Vigilância perimetral, patrulhamento preventivo, controle de fronteiras e apoio a operações policiais ostensivas.", 
        droneRecomendado: "Multirrotores táticos de rápida implantação", 
        sensores: "Câmeras termográficas (FLIR), holofotes e zoom óptico híbrido", 
        setor: "Segurança e Defesa",
        imagem: "imgs/servicos/servico2.jpg"
    },
    { 
        id: 3, 
        area: "Mapeamento Topográfico e Georreferenciamento", 
        descricao: "Levantamento aerofotogramétrico de grandes glebas, geração de nuvens de pontos 3D, curvas de nível e modelos de elevação.", 
        droneRecomendado: "eVTOLs e Asas Fixas (ex: Trinity F90+, eBee X)", 
        sensores: "Câmeras RGB de alta resolução e sensores LiDAR aéreos", 
        setor: "Engenharia e Mineração",
        imagem: "imgs/servicos/servico3.jpg"
    },
    { 
        id: 4, 
        area: "Inspeção Industrial e Infraestrutura", 
        descricao: "Verificação detalhada de linhas de transmissão de energia, pás eólicas, estruturas de pontes e tanques de refinarias sem risco humano.", 
        droneRecomendado: "Drones industriais com proteção IP (ex: Matrice 350 RTK)", 
        sensores: "Sensores radiométricos infravermelhos e sensores ultrazoom", 
        setor: "Energia e Petróleo",
        imagem: "imgs/servicos/servico4.jpg"
    },
    { 
        id: 5, 
        area: "Busca e Salvamento (SAR)", 
        descricao: "Varredura rápida em matas, montanhas ou cenários de desastres naturais para localização de vítimas soterradas ou perdidas.", 
        droneRecomendado: "Multirrotores para clima severo e vento forte", 
        sensores: "Visão noturna térmica, alto-falante acoplado e telêmetro a laser", 
        setor: "Defesa Civil e Bombeiros",
        imagem: "imgs/servicos/servico5.jpg"
    }
];

router.get('/aplicacoes', (req, res) => {
    res.render('aplicacoes', { 
        pageTitle: 'Áreas de Trabalho com Drones',
        aplicacoes: aplicacoes 
    });
});

export default app