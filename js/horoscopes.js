const horoscopes = [
    {
        id: "Aquario",
        name: "Aquario",
        dates: "20 de Enero - 18 de Febrero",
        element: "Aire",
        qualities: "Independiente, original, humanitario",
        description: "Los Acuario son conocidos por su pensamiento progresista y su naturaleza humanitaria. Son innovadores por excelencia.",
        image: "Horoscopos Imagenes/Acuario-simbolo.gif",
        link: "https://www.horoscope.com/us/horoscopes/general/horoscope-general-monthly.aspx?sign=11",
        traits: [
            "Independiente",
            "Original",
            "Humanitario"
        ],
        compatibility: ["Géminis", "Libra", "Sagitario"]
    },
    {
        id: "Piscis",
        name: "Piscis",
        dates: "19 de Febrero - 20 de Marzo",
        element: "Agua",
        qualities: "Intuitivo, artístico, compasivo",
        description: "Los Piscis son conocidos por su naturaleza empática y su profunda conexión con el mundo espiritual.",
        image: "Horoscopos Imagenes/astrology-pisces-bold-400w.png",
        link: "https://www.horoscope.com/us/horoscopes/general/horoscope-general-monthly.aspx?sign=12",
        traits: [
            "Intuitivo",
            "Artístico",
            "Compasivo"
        ],
        compatibility: ["Cáncer", "Escorpio", "Tauro"]
    },
    {
        id: "Aries",
        name: "Aries",
        image: "Horoscopos Imagenes/astrology-aries-bold-400w.png",
        dates: "21 de marzo - 19 de abril",
        element: "Fuego",
        description: "Aries es el primer signo del zodíaco, y está regido por Marte, el planeta de la guerra y la energía. Las personas nacidas bajo este signo son conocidas por su naturaleza pionera, su valentía y su espíritu aventurero. Son líderes naturales que abordan la vida con entusiasmo y determinación. Su energía dinámica y su pasión por la vida los hace destacar en cualquier situación.",
        traits: [
            "Valiente y determinado",
            "Optimista y entusiasta", 
            "Honesto y directo",
            "Dinámico y energético",
            "Líder natural",
            "Espontáneo y aventurero"
        ],
        compatibility: ["Leo", "Sagitario", "Géminis", "Libra"],
        strengths: [
            "Coraje y determinación",
            "Entusiasmo y optimismo",
            "Honestidad",
            "Pasión y energía"
        ],
        weaknesses: [
            "Impaciencia",
            "Temperamento fuerte",
            "Impulsividad",
            "Agresividad"
        ]
    },
    {
        id: "Tauro",
        name: "Tauro",
        image: "Horoscopos Imagenes/tauro.png",
        dates: "20 de abril - 20 de mayo",
        element: "Tierra",
        description: "Tauro, regido por Venus, es el segundo signo del zodíaco. Los taurinos son conocidos por su naturaleza práctica, determinada y sensual. Con los pies firmemente plantados en la tierra, son los constructores del zodíaco, creando seguridad material y emocional. Su paciencia legendaria y su dedicación los convierten en personas extremadamente confiables y trabajadoras.",
        traits: [
            "Paciente y confiable",
            "Práctico y determinado", 
            "Sensual y romántico",
            "Leal y estable",
            "Persistente",
            "Amante del confort"
        ],
        compatibility: ["Virgo", "Capricornio", "Cáncer", "Piscis"]
    },
    {
        id: "Geminis",
        name: "Géminis",
        image: "Horoscopos Imagenes/geminis.png",
        dates: "21 de mayo - 20 de junio",
        element: "Aire",
        description: "Géminis, gobernado por Mercurio, es el tercer signo del zodíaco. Representado por los gemelos celestiales, este signo encarna la dualidad y la versatilidad. Los geminianos son comunicadores naturales, curiosos intelectuales y maestros de la adaptabilidad. Su mente ágil y naturaleza social los convierte en excelentes conversadores y pensadores innovadores.",
        traits: [
            "Versátil y adaptable",
            "Comunicativo e ingenioso", 
            "Curioso e intelectual",
            "Social y carismático",
            "Divertido y juvenil",
            "Multifacético"
        ],
        compatibility: ["Libra", "Acuario", "Aries", "Leo"]
    },
    {
        id: "Cancer",
        name: "Cáncer",
        image: "Horoscopos Imagenes/cancer.png",
        dates: "21 de junio - 22 de julio",
        element: "Agua",
        description: "Cáncer, regido por la Luna, es el cuarto signo del zodíaco. Los cancerianos son profundamente emocionales, intuitivos y protectores. Como el cangrejo que los simboliza, pueden parecer duros por fuera, pero son suaves y sensibles por dentro. Su conexión con el hogar y la familia es incomparable, y poseen una memoria emocional extraordinaria.",
        traits: [
            "Protector y cuidador",
            "Intuitivo y emocional", 
            "Tenaz y leal",
            "Empático y comprensivo",
            "Hogareño",
            "Maternal/Paternal"
        ],
        compatibility: ["Escorpio", "Piscis", "Tauro", "Virgo"]
    },
    {
        id: "Leo",
        name: "Leo",
        image: "Horoscopos Imagenes/Leo.svg.png",
        dates: "23 de julio - 22 de agosto",
        element: "Fuego",
        description: "Leo, gobernado por el Sol, es el quinto signo del zodíaco. Como el león que los representa, los leoninos son regales, carismáticos y nacidos para liderar. Su presencia magnética y su corazón generoso los convierte en el centro natural de atención. Son creativos apasionados que irradian calidez y vitalidad, inspirando a otros con su optimismo y nobleza.",
        traits: [
            "Carismático y noble",
            "Creativo y expresivo", 
            "Generoso y leal",
            "Confiado y líder",
            "Dramático y apasionado",
            "Optimista"
        ],
        compatibility: ["Aries", "Sagitario", "Géminis", "Libra"]
    },
    {
        id: "Virgo",
        name: "Virgo",
        image: "Horoscopos Imagenes/virgos.png",
        dates: "23 de agosto - 22 de septiembre",
        element: "Tierra",
        description: "Virgo, regido por Mercurio, es el sexto signo del zodíaco. Los virginianos son conocidos por su precisión, atención al detalle y naturaleza servicial. Son los perfeccionistas del zodíaco, siempre buscando mejorar todo lo que tocan. Su mente analítica y habilidades prácticas los convierten en excelentes solucionadores de problemas y cuidadores.",
        traits: [
            "Analítico y metódico",
            "Práctico y trabajador", 
            "Servicial y dedicado",
            "Perfeccionista",
            "Modesto y sincero",
            "Inteligente"
        ],
        compatibility: ["Tauro", "Capricornio", "Cáncer", "Escorpio"]
    },
    {
        id: "Libra",
        name: "Libra",
        image: "Horoscopos Imagenes/Libra.webp",
        dates: "23 de septiembre - 22 de octubre",
        element: "Aire",
        description: "Libra, regido por Venus, es el séptimo signo del zodíaco. Simbolizado por la balanza, los librianos buscan constantemente el equilibrio y la armonía. Son diplomáticos naturales con un fuerte sentido de la justicia y la belleza. Su encanto social y su capacidad para ver todos los lados de una situación los hace excelentes mediadores.",
        traits: [
            "Diplomático y pacífico",
            "Justo y equilibrado", 
            "Sociable y encantador",
            "Romántico y refinado",
            "Artístico",
            "Cooperativo"
        ],
        compatibility: ["Géminis", "Acuario", "Leo", "Sagitario"]
    },
    {
        id: "Scorpio",
        name: "Escorpio",
        image: "Horoscopos Imagenes/scorpio-celestial-zodiac-sign-tps-507-898673.webp?width=400",
        dates: "23 de octubre - 21 de noviembre",
        element: "Agua",
        description: "Escorpio, co-regido por Marte y Plutón, es el octavo signo del zodíaco. Los escorpianos son intensos, apasionados y misteriosos. Poseen una profunda intuición y una capacidad única para ver más allá de las apariencias. Su naturaleza transformadora y su fuerza emocional los convierte en personas magnéticas y poderosas.",
        traits: [
            "Intenso y apasionado",
            "Perspicaz y intuitivo", 
            "Misterioso y magnético",
            "Determinado y poderoso",
            "Leal y protector",
            "Transformador"
        ],
        compatibility: ["Cáncer", "Piscis", "Virgo", "Capricornio"]
    },
    {
        id: "Sagitario",
        name: "Sagitario",
        image: "Horoscopos Imagenes/png-clipart-sagittarius-astrological-sign-astrological-symbols-zodiac-sagittarius-angle-text-thumbnail.png",
        dates: "22 de noviembre - 21 de diciembre",
        element: "Fuego",
        description: "Sagitario, regido por Júpiter, es el noveno signo del zodíaco. Los sagitarianos son los aventureros y filósofos del zodíaco, siempre en busca de nuevos horizontes y verdades superiores. Su optimismo contagioso y su amor por la libertad los convierte en excelentes maestros y exploradores. Son directos, honestos y eternamente entusiastas.",
        traits: [
            "Aventurero y viajero",
            "Optimista y entusiasta", 
            "Filosófico y sabio",
            "Honesto y directo",
            "Independiente",
            "Expansivo"
        ],
        compatibility: ["Aries", "Leo", "Libra", "Acuario"]
    },
    {
        id: "Capricornio",
        name: "Capricornio",
        image: "Horoscopos Imagenes/Capricorn.webp",
        dates: "22 de diciembre - 19 de enero",
        element: "Tierra",
        description: "Capricornio, regido por Saturno, es el décimo signo del zodíaco. Los capricornianos son los maestros de la disciplina y la responsabilidad. Como la cabra montañesa que los simboliza, son escaladores persistentes que alcanzan sus metas paso a paso. Su naturaleza práctica y su ambición los convierte en líderes naturales y exitosos profesionales.",
        traits: [
            "Ambicioso y disciplinado",
            "Responsable y práctico",
            "Paciente y perseverante",
            "Tradicional y serio",
            "Organizado",
            "Determinado"
        ],
        compatibility: ["Tauro", "Virgo", "Escorpio", "Piscis"]
    },
   
]; 