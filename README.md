<!-- 
# Kaamelott-random-quote-generator

This little project is part of the [Freecodecamp](https://www.freecodecamp.org/learn/front-end-development-libraries/) front-end development curriculum.
It consists in a Jquery app that retrieves random quotes from [this node/expres API](https://github.com/SebNoret/simple-node-api-for-random-quote) inspired by [another one](https://kaamelott.chaudie.re/) (Github repo of the API [here](https://github.com/sin0light/api-kaamelott/)).

The selected quotes can be shared on Twitter with a button.
-->

# Kaamelott-random-quote-generator

Un petit projet proposé sur le site [Freecodecamp](https://www.freecodecamp.org/learn/front-end-development-libraries/) dans le cadre du cursus de formation en développement frontend.

Il conssite dans dans l'affichage aléatoire de citations issues de la série Kaamelott générées via un appel à une API.
Ce projet fonctionne en utilisant Jquery et consommait au départ cette [API](https://kaamelott.chaudie.re/)
(dont le repo Github est disponible [ici](https://github.com/sin0light/api-kaamelott/)).

Quand j'ai développé  ce projet, l'API ne comportait pas de configuration pour autoriser les requètes cross domain (le code ayant été mis à jour depuis, peut-être que c'est le cas maintenant mais je n'en sais rien car je ne l'ai pas testé).

Pour répondre à ce problème, j'ai créé ma propre version de l'api en Node/express (qui ne comprend qu'une seul route pour renvoyer les citations de manière aléatoire) que j'ai déployé sur ~~Heroku~~ Render.com .

Le code de l'API est disponible [ici](https://github.com/sin0light/api-kaamelott/).

