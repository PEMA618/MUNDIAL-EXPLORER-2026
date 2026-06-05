// ==============================================================================
// 1. BASE DE DONNÉES ENRICHIE — 48 PAYS (GROUPES A À L)
// ==============================================================================
const mondialData = {
    // GROUPE A
    "mexique": { nom: "Mexique", groupe: "A", fete: "16 Septembre", capitale: "Mexico", star: "Santiago Giménez", maillot: "Vert classique avec motifs aztèques", monument: "L'Ange de l'Indépendance", villes: ["Mexico", "Guadalajara", "Monterrey"] },
    "afrique_du_sud": { nom: "Afrique du Sud", groupe: "A", fete: "27 Avril", capitale: "Pretoria", star: "Percy Tau", maillot: "Jaune or et bandes vertes", monument: "La Montagne de la Table", villes: ["Mexico", "Guadalajara", "Monterrey"] },
    "coree_du_sud": { nom: "Corée du Sud", groupe: "A", fete: "15 Août", capitale: "Séoul", star: "Son Heung-min", maillot: "Rouge vibrant et accents noirs", monument: "Le Palais de Gyeongbokgung", villes: ["Mexico", "Monterrey"] },
    "tchequie": { nom: "Tchéquie", groupe: "A", fete: "28 Octobre", capitale: "Prague", star: "Tomáš Souček", maillot: "Rouge et bleu roi", monument: "Le Pont Charles à Prague", villes: ["Mexico", "Monterrey"] },

    // GROUPE B
    "canada": { nom: "Canada", groupe: "B", fete: "1er Juillet", capitale: "Ottawa", star: "Alphonso Davies", maillot: "Rouge feuille d'érable rétro", monument: "La Tour CN", villes: ["Toronto", "Vancouver"] },
    "bosnie": { nom: "Bosnie-Herzégovine", groupe: "B", fete: "1er Mars", capitale: "Sarajevo", star: "Edin Džeko", maillot: "Bleu roi à bande jaune", monument: "Le Vieux Pont de Mostar", villes: ["Toronto", "Vancouver"] },
    "qatar": { nom: "Qatar", groupe: "B", fete: "18 Décembre", capitale: "Doha", star: "Akram Afif", maillot: "Grenat et blanc géométrique", monument: "La Tour Aspire", villes: ["Toronto", "Vancouver"] },
    "suisse": { nom: "Suisse", groupe: "B", fete: "1er Août", capitale: "Berne", star: "Granit Xhaka", maillot: "Rouge bordeaux à lignes blanches", monument: "Le Cervin", villes: ["Toronto", "Vancouver"] },

    // GROUPE C
    "bresil": { nom: "Brésil", groupe: "C", fete: "7 Septembre", capitale: "Brasília", star: "Vinícius Júnior", maillot: "Jaune canari classique (Amarelinha)", monument: "Le Christ Rédempteur", villes: ["Miami", "New York", "Boston"] },
    "maroc": { nom: "Maroc", groupe: "C", fete: "18 Novembre", capitale: "Rabat", star: "Achraf Hakimi", maillot: "Rouge profond à col vert", monument: "La Mosquée Hassan II", villes: ["Toronto", "New York", "Miami"] },
    "paraguay": { nom: "Paraguay", groupe: "C", fete: "14 Mai", capitale: "Asunción", star: "Julio Enciso", maillot: "Rayé rouge et blanc traditionnel", monument: "Le Panthéon des Héros", villes: ["Los Angeles", "Miami"] },
    "australie": { nom: "Australie", groupe: "C", fete: "26 Janvier", capitale: "Canberra", star: "Mathew Ryan", maillot: "Or et vert forêt", monument: "L'Opéra de Sydney", villes: ["Los Angeles", "Miami"] },

    // GROUPE D
    "etats_unis": { nom: "États-Unis", groupe: "D", fete: "4 Juillet", capitale: "Washington D.C.", star: "Christian Pulisic", maillot: "Blanc épuré à bandes patriotiques", monument: "La Statue de la Liberté", villes: ["Los Angeles", "Seattle", "San Francisco"] },
    "turquie": { nom: "Turquie", groupe: "D", fete: "29 Octobre", capitale: "Ankara", star: "Hakan Çalhanoğlu", maillot: "Blanc à bande pectorale rouge", monument: "Sainte-Sophie", villes: ["Los Angeles", "Seattle", "San Francisco"] },
    "ecosse": { nom: "Écosse", groupe: "D", fete: "30 Novembre", capitale: "Édimbourg", star: "Andrew Robertson", maillot: "Bleu marine à motif tartan écossais", monument: "Le Château d'Édimbourg", villes: ["Los Angeles", "Seattle", "San Francisco"] },
    "equateur": { nom: "Équateur", groupe: "D", fete: "10 Août", capitale: "Quito", star: "Piero Hincapié", maillot: "Jaune éclatant à liserés bleus", monument: "Le Monument de la Mitad del Mundo", villes: ["Miami", "New York"] },

    // GROUPE E
    "belgique": { nom: "Belgique", groupe: "E", fete: "21 Juillet", capitale: "Bruxelles", star: "Kevin De Bruyne", maillot: "Rouge diable et accents dorés", monument: "L'Atomium à Bruxelles", villes: ["Vancouver", "Seattle"] },
    "allemagne": { nom: "Allemagne", groupe: "E", fete: "3 Octobre", capitale: "Berlin", star: "Jamal Musiala", maillot: "Blanc rétro aux couleurs du drapeau", monument: "La Porte de Brandebourg", villes: ["Vancouver", "Seattle", "San Francisco"] },
    "algerie": { nom: "Algérie", groupe: "E", fete: "5 Juillet", capitale: "Alger", star: "Riyad Mahrez", maillot: "Blanc et vert épuré", monument: "Le Mémorial du Martyr", villes: ["Vancouver", "Seattle"] },
    "nouvelle_zelande": { nom: "Nouvelle-Zélande", groupe: "E", fete: "6 Février", capitale: "Wellington", star: "Chris Wood", maillot: "All White intégral iconique", monument: "La Sky Tower", villes: ["Vancouver", "Seattle"] },

    // GROUPE F
    "italie": { nom: "Italie", groupe: "F", fete: "2 Juin", capitale: "Rome", star: "Nicolò Barella", maillot: "Bleu azur traditionnel (Azzurri)", monument: "Le Colisée de Rome", villes: ["New York", "Philadelphia", "Boston"] },
    "cameroun": { nom: "Cameroun", groupe: "F", fete: "20 Mai", capitale: "Yaoundé", star: "Bryan Mbeumo", maillot: "Vert forêt à tête de lion", monument: "Le Monument de la Réunification", villes: ["New York", "Philadelphia"] },
    "colombie": { nom: "Colombie", groupe: "F", fete: "20 Juillet", capitale: "Bogota", star: "Luis Díaz", maillot: "Jaune rétro avec graphismes latéraux", monument: "Le Sanctuaire de Las Lajas", villes: ["New York", "Boston"] },
    "perou": { nom: "Pérou", groupe: "F", fete: "28 Juillet", capitale: "Lima", star: "Renato Tapia", maillot: "Blanc à bande diagonale rouge historique", monument: "Le Machu Picchu", villes: ["Philadelphia", "Boston"] },

    // GROUPE G
    "espagne": { nom: "Espagne", groupe: "G", fete: "12 Octobre", capitale: "Madrid", star: "Lamine Yamal", maillot: "Rouge furia et détails jaune or", monument: "La Sagrada Família", villes: ["Miami", "Atlanta", "Orlando"] },
    "cote_divoire": { nom: "Côte d'Ivoire", groupe: "G", fete: "7 Août", capitale: "Yamoussoukro", star: "Franck Kessié", maillot: "Orange vif emblématique", monument: "La Basilique Notre-Dame de la Paix", villes: ["Miami", "Atlanta"] },
    "japon": { nom: "Japon", groupe: "G", fete: "11 Février", capitale: "Tokyo", star: "Kaoru Mitoma", maillot: "Bleu samouraï aux motifs d'origami", monument: "Le Mont Fuji", villes: ["Atlanta", "Orlando"] },
    "autriche": { nom: "Autriche", groupe: "G", fete: "26 Octobre", capitale: "Vienne", star: "David Alaba", maillot: "Rouge et blanc à aigle impérial", monument: "Le Château de Schönbrunn", villes: ["Miami", "Orlando"] },

    // GROUPE H
    "croatie": { nom: "Croatie", groupe: "H", fete: "30 Mai", capitale: "Zagreb", star: "Luka Modrić", maillot: "Damier rouge et blanc légendaire", monument: "L'Amphithéâtre de Pula", villes: ["Dallas", "Houston", "Kansas City"] },
    "tunisie": { nom: "Tunisie", groupe: "H", fete: "20 Mars", capitale: "Tunis", star: "Ellyes Skhiri", maillot: "Blanc à détails de calligraphie rouge", monument: "L'Amphithéâtre d'El Jem", villes: ["Dallas", "Houston"] },
    "egypte": { nom: "Égypte", groupe: "H", fete: "23 Juillet", capitale: "Le Caire", star: "Mohamed Salah", maillot: "Rouge impérial à motifs de lotus", monument: "Les Pyramides de Gizeh", villes: ["Dallas", "Kansas City"] },
    "coree_du_nord": { nom: "Corée du Nord", groupe: "H", fete: "9 Septembre", capitale: "Pyongyang", star: "Han Kwang-song", maillot: "Rouge uni et lignes blanches", monument: "La Tour de l'Idée Juche", villes: ["Houston", "Kansas City"] },

    // GROUPE I
    "france": { nom: "France", groupe: "I", fete: "14 Juillet", capitale: "Paris", star: "Kylian Mbappé", maillot: "Bleu marine élégant à coq doré", monument: "La Tour Eiffel", villes: ["New York", "Boston", "Miami"] },
    "senegal": { nom: "Sénégal", groupe: "I", fete: "4 Avril", capitale: "Dakar", star: "Sadio Mané", maillot: "Blanc à motifs de lion sur la poitrine", monument: "Le Monument de la Renaissance Africaine", villes: ["New York", "Boston", "Miami"] },
    "nigeria": { nom: "Nigéria", groupe: "I", fete: "1er Octobre", capitale: "Abuja", star: "Victor Osimhen", maillot: "Vert fluo et bandes blanches graphiques", monument: "Le Rocher de Zuma", villes: ["New York", "Miami"] },
    "iran": { nom: "Iran", groupe: "I", fete: "1er Avril", capitale: "Téhéran", star: "Mehdi Taremi", maillot: "Blanc à col rouge et guépard imprimé", monument: "La Tour Azadi", villes: ["Boston", "Miami"] },

    // GROUPE J
    "argentine": { nom: "Argentine", groupe: "J", fete: "9 Juillet", capitale: "Buenos Aires", star: "Lionel Messi", maillot: "Rayé bleu ciel et blanc (Albiceleste)", monument: "L'Obélisque de Buenos Aires", villes: ["Dallas", "Houston", "Miami"] },
    "uruguay": { nom: "Uruguay", groupe: "J", fete: "25 Août", capitale: "Montevideo", star: "Federico Valverde", maillot: "Bleu céleste uni iconique", monument: "Le Palacio Salvo", villes: ["Dallas", "Houston"] },
    "ghana": { nom: "Ghana", groupe: "J", fete: "6 Mars", capitale: "Accra", star: "Mohammed Kudus", maillot: "Blanc avec l'Étoile Noire au centre", monument: "La Place de l'Indépendance", villes: ["Dallas", "Miami"] },
    "islande": { nom: "Islande", groupe: "J", fete: "17 Juin", capitale: "Reykjavik", star: "Albert Guðmundsson", maillot: "Bleu azur avec lignes d'eau", monument: "L'église Hallgrímskirkja", villes: ["Houston", "Miami"] },

    // GROUPE K
    "portugal": { nom: "Portugal", groupe: "K", fete: "10 Juin", capitale: "Lisbonne", star: "Rafael Leão", maillot: "Rouge sang de bœuf et vert forêt", monument: "La Tour de Belém", villes: ["Houston", "Dallas", "Atlanta"] },
    "pays_bas": { nom: "Pays-Bas", groupe: "K", fete: "27 Avril", capitale: "Amsterdam", star: "Virgil van Dijk", maillot: "Orange mécanique intégral radiant", monument: "Les Moulins de Kinderdijk", villes: ["Houston", "Dallas"] },
    "mali": { nom: "Mali", groupe: "K", fete: "22 Septembre", capitale: "Bamako", star: "Yves Bissouma", maillot: "Blanc avec aigle tricolore géant", monument: "La Grande Mosquée de Djenné", villes: ["Houston", "Atlanta"] },
    "honduras": { nom: "Honduras", groupe: "K", fete: "15 Septembre", capitale: "Tegucigalpa", star: "Luis Palma", maillot: "Blanc à bandes verticales bleu clair", monument: "Les Ruines de Copán", villes: ["Dallas", "Atlanta"] },

    // GROUPE L
    "angleterre": { nom: "Angleterre", groupe: "L", fete: "23 Avril", capitale: "Londres", star: "Jude Bellingham", maillot: "Blanc immaculé et trois lions bleus", monument: "Big Ben", villes: ["New York", "Philadelphia", "Boston"] },
    "maroc_bis": { nom: "Maroc (Qualifié L)", groupe: "L", fete: "18 Novembre", capitale: "Rabat", star: "Hakim Ziyech", maillot: "Vert alternatif et col blanc", monument: "La Tour Hassan", villes: ["New York", "Philadelphia"] },
    "ukraine": { nom: "Ukraine", groupe: "L", fete: "24 Août", capitale: "Kyiv", star: "Artem Dovbyk", maillot: "Jaune blé et détails bleu azur", monument: "La Cathédrale Sainte-Sophie", villes: ["New York", "Boston"] },
    "arabie_saoudite": { nom: "Arabie Saoudite", groupe: "L", fete: "23 Septembre", capitale: "Riyad", star: "Salem Al-Dawsari", maillot: "Vert émeraude aux lignes palmier", monument: "La Forteresse de Masmak", villes: ["Philadelphia", "Boston"] }
};

// ==============================================================================
// 2. DATA COMPLÈTE DES VILLES HÔTES & CARACTÉRISTIQUES DES 16 STADES
// ==============================================================================
const stadesData = {
    "Mexico": { stade: "Stade Azteca", capacite: "87 523 places", climat: "⛰️ Haute altitude (2200m). Air sec, récupération physique intense exigée.", tip: "Stade légendaire, premier de l'histoire à accueillir trois Coupes du Monde." },
    "Guadalajara": { stade: "Estadio Akron", capacite: "48 071 places", climat: "☀️ Ensoleillé et chaud, ambiance typique et festive.", tip: "Bijou architectural conçu en forme de volcan verdoyant." },
    "Monterrey": { stade: "Estadio BBVA", capacite: "53 500 places", climat: "🔥 Chaleur lourde et étouffante. Hydratation maximum recommandée.", tip: "Surnommé 'Le Géant d'Acier' avec vue imprenable sur les montagnes." },
    "Toronto": { stade: "BMO Field", capacite: "45 736 places", climat: "🍃 Frais et très agréable, idéalement situé en bord de lac.", tip: "Ambiance intimiste, parfait pour des déplacements à pied." },
    "Vancouver": { stade: "BC Place", capacite: "54 500 places", climat: "🌦️ Climat tempéré océanique, aucun risque d'intempéries.", tip: "Équipé d'un immense toit rétractable technologique en plein cœur de la ville." },
    "Miami": { stade: "Hard Rock Stadium", capacite: "65 326 places", climat: "🌴 Très chaud et tropical. Risques d'averses subites en fin de journée.", tip: "Atmosphère multiculturelle vibrante, à proximité immédiate des plages." },
    "New York": { stade: "MetLife Stadium", capacite: "82 500 places", climat: "🌤️ Estival classique, variations de fraîcheur en soirée.", tip: "Le théâtre officiel de la Grande Finale. Carrefour de transports majeur." },
    "Boston": { stade: "Gillette Stadium", capacite: "65 878 places", climat: "💨 Brise de mer rafraîchissante, très agréable en été.", tip: "Situé à Foxborough. Pensez à réserver les navettes spéciales à l'avance." },
    "Los Angeles": { stade: "SoFi Stadium", capacite: "70 240 places", climat: "😎 Ensoleillement californien constant et modéré.", tip: "Écrans géants panoramiques suspendus à double face à couper le souffle." },
    "Seattle": { stade: "Lumen Field", capacite: "69 000 places", climat: "☁️ Doux mais risque d'humidité ou de légères ondulations.", tip: "Connu mondialement pour son acoustique tonitruante générée par les fans." },
    "San Francisco": { stade: "Levi's Stadium", capacite: "68 500 places", climat: "☀️ Lumineux avec courants d'air frais provenant de la baie.", tip: "Stade connecté de dernière génération situé au cœur de la Silicon Valley." },
    "Dallas": { stade: "AT&T Stadium", capacite: "80 000 places", climat: "🥵 Chaleur extérieure extrême. Intérieur entièrement climatisé.", tip: "Toit rétractable géant et écran central suspendu de 50 mètres de long." },
    "Houston": { stade: "NRG Stadium", capacite: "72 220 places", climat: "😓 Humidité texane marquée dehors. Intérieur climatisé sous dôme.", tip: "Infrastructure massive polyvalente dotée d'un toit amovible." },
    "Atlanta": { stade: "Mercedes-Benz Stadium", capacite: "71 000 places", climat: "🍑 Conditions intérieures idéales et constantes (dôme fermé).", tip: "Toit à géométrie variable unique inspiré d'un objectif photographique." },
    "Philadelphia": { stade: "Lincoln Financial Field", capacite: "69 796 places", climat: "🌤️ Climat estival chaud de la côte Est.", tip: "Stade pionnier en énergies renouvelables alimenté par panneaux solaires." },
    "Kansas City": { stade: "Arrowhead Stadium", capacite: "76 416 places", climat: "☀️ Ensoleillé, typique des plaines du Midwest.", tip: "Réputé pour ses célébrations d'avant-match et ses barbecues cultes." },
    "Orlando": { stade: "Camping World Stadium", capacite: "60 219 places", climat: "⚡ Subtropical chaud et humide, prévoyez des vêtements légers.", tip: "Emplacement idéal pour coupler les matchs avec des séjours familiaux." }
};

// ==============================================================================
// 3. CODE APPLICATIF INTERACTIVE — INJECTION AUTOMATIQUE DANS L'INDEX
// ==============================================================================
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("teamSelect");
    const card = document.getElementById("resultCard");

    // Génération et tri alphabétique des pays dans le menu déroulant
    Object.keys(mondialData).sort().forEach(key => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = mondialData[key].nom;
        select.appendChild(option);
    });

    // Écouteur de changement de sélection de l'utilisateur
    select.addEventListener("change", (e) => {
        const key = e.target.value;
        if (!key) {
            card.style.display = "none";
            return;
        }

        const equipe = mondialData[key];
        
        // Construction dynamique de la frise chronologique (Arborescence des déplacements)
        let timelineHtml = "";
        equipe.villes.forEach((ville, index) => {
            const stadeInfo = stadesData[ville] || { stade: "Stade de Qualification", capacite: "Non spécifiée", climat: "Tempéré", tip: "À découvrir sur place." };
            
            timelineHtml += `
                <div class="timeline-item" style="margin-bottom: 25px; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0;">
                    <div class="city-name" style="font-size:1.1em; color:#0A5C36; font-weight:bold;">📍 Étape ${index + 1} : ${ville}</div>
                    <div style="margin: 6px 0; font-weight: 600; color: #1B365D;">🏟️ ${stadeInfo.stade} <span style="font-weight:normal; font-size:0.9em; color:#718096;">(${stadeInfo.capacite})</span></div>
                    <div class="city-details" style="font-style: italic; color:#4a5568; font-size:0.9em;">${stadeInfo.climat}</div>
                    <div style="font-size:0.85em; color:#2c3e50; margin-top:5px; background:#f7fafc; padding:6px; border-radius:5px; border-left: 3px solid #0A5C36;">💡 <em>Conseil : ${stadeInfo.tip}</em></div>
                </div>
            `;
        });

        // Injection propre de toutes les variables d'intérêt dans l'interface utilisateur
        card.innerHTML = `
            <div class="meta-grid">
                <div class="meta-item">
                    <h4>Groupe du Poster</h4>
                    <p style="color:#0A5C36; font-size:1.3em; margin: 2px 0 0 0;">Groupe ${equipe.groupe}</p>
                </div>
                <div class="meta-item">
                    <h4>Capitale</h4>
                    <p style="margin: 2px 0 0 0;">${equipe.capitale}</p>
                </div>
            </div>
            
            <div style="background:#edf2f7; padding:15px; border-radius:8px; margin-bottom:15px; font-size:0.95em;">
                <p style="margin:0 0 6px 0;">⭐ <strong>Joueur Vedette :</strong> ${equipe.star}</p>
                <p style="margin:0 0 6px 0;">👕 <strong>Maillot Officiel :</strong> ${equipe.maillot}</p>
                <p style="margin:0 0 6px 0;">📅 <strong>Fête Nationale :</strong> ${equipe.fete}</p>
                <p style="margin:0;">🗼 <strong>Patrimoine Culturel :</strong> ${equipe.monument}</p>
            </div>
            
            <h3 style="margin:25px 0 15px 0; font-size:1.1em; color:#1B365D; border-bottom: 2px solid #0A5C36; padding-bottom:6px;">✈️ Itinéraire des Matchs & Stades :</h3>
            <div class="timeline">${timelineHtml}</div>

            <div class="affiliation-box">
                🎒 <strong>Planifiez votre séjour :</strong> Plus de 10 000 supporters de l'équipe (<strong>${equipe.nom}</strong>) recherchent un hébergement à ${equipe.villes[0]}.
                <a href="https://www.booking.com/index.html?aid=VOTRE_ID_AFFILIE" target="_blank" class="btn-booking">Réserver un hôtel à ${equipe.villes[0]} 🏨</a>
            </div>
        `;
        card.style.display = "block";
    });
});

// ==============================================================================
// 4. MODULE SERVICE WORKER — MODE HORS-LIGNE AUTONOME
// ==============================================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Moteur Service Worker opérationnel !'))
            .catch(err => console.log('Erreur lors de l\'activation réseau local.'));
    });
}