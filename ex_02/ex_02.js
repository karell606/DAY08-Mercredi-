//centree sur la france //
var map = L.map('map').setView([46.603354, 1.888334], 6); //L.map('map') : //Cela crée une nouvelle instance de la carte. La chaîne 'map' fait référence à l'élément HTML avec l'ID "map" où la carte sera rendue.
//setView ... définit la vue initiale de la carte. Le premier argument est un tableau de coordonnées de latitude et de longitude, qui centre la carte sur la France. Le deuxième argument (6) est le niveau de zoom (1 étant le plus éloigné et des nombres plus élevés offrant une vue plus rapprochée).

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //L.tileLayer(...) : Cette méthode ajoute une couche de tuiles de carte provenant d'OpenStreetMap. Le modèle d'URL {s}.tile.openstreetmap.org/{z}/{x}/{y}.png est utilisé pour récupérer les tuiles dynamiquement en fonction de la vue actuelle de la carte.
  //{s} : fait référence au sous-domaine (a, b ou c) utilisé pour charger les tuiles.
//{z} : représente le niveau de zoom.
//{x} et {y} : spécifient les coordonnées de la tuile.
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //attribution : Cela spécifie l'avis de copyright qui sera affiché sur la carte. Il est essentiel pour respecter la licence d'OpenStreetMap.
}).addTo(map);
//addTo(map) : Cette méthode ajoute la couche de tuiles à l'instance de carte précédemment créée.

// coordonnes de toute les ecoles de Epitech //
var schools = [
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Bordeaux", coords: [44.8378, -0.5792] },
    { name: "Lyon", coords: [45.7640, 4.8357] },
    { name: "Toulouse", coords: [43.6047, 1.4442] },
    { name: "Nantes", coords: [47.2184, -1.5536] },
];


var epitechIcon = L.icon({ //Cela crée une nouvelle icône personnalisée utilisant le logo Epitech. La configuration comprend ducoupl les elements suivants
    iconUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', //logo de epitech
    iconSize: [38, 38], 
    iconAnchor: [19, 38], 
    popupAnchor: [0, -38] //Cela définit le point à partir duquel la popup s'ouvrira, par rapport à l'anchor de l'icône. Cela est généralement positionné au-dessus de l'icône.
});

schools.forEach(function(school) {
    L.marker(school.coords, { icon: epitechIcon })//Pour chaque école, cela crée un marqueur aux coordonnées spécifiées et assigne l'icône personnalisée créée précédemment.
      //L est simplement la façon dont on utilise Leaflet pour faire des cartes et ajouter des éléments dessus(ajouter des marqueurs ou des couches de tuiles ).
        .addTo(map)// Cela ajoute le marqueur créé à la carte
        .bindPopup(school.name + " rocks!");
});
