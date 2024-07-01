# Bonjour ! o/

## C'est quoi ?
C'est le repo pour le serveur backend. C'est une API maison pour récupérer les informations des villes Escapade.

## Comment ça marche ?
Pour accéder à l'ensemble des villes :
- "/"

Pour accéder à **une** ville par son ID :
Attention cette méthode ne renvoie qu'une ville.
- "/id/:id" -> Remplacer :id par un chiffre.

Pour accéder à **une** ville par son npm :
Attention cette méthode ne renvoie qu'une ville.
- "/name/:name" -> Remplacer :name par un nom de ville.
*Attention à bien normaliser l'user input en .toLowerCase()*

Pour accéder à une **liste** de villes par son biome :
- "/biome/:biome" -> Remplacer :biome par un biome connu

Pour accéder à une **liste** de villes par son climat :
- "/climat/:climat" -> Remplacer :climat par un climat connu

