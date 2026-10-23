# cbinnov.com

Site vitrine statique de CBINNOV INC (une page, FR/EN) : `index.html`, `styles.css`, `script.js`.

## Hébergement

- Railway, projet `sites-web`, service `cbinnov-web` (fonction Bun) : il sert les fichiers **directement depuis la branche `main` de ce dépôt** (raw.githubusercontent.com) avec un cache de 5 minutes. Un `git push` sur `main` met le site à jour sans redéploiement.
- URL technique : https://cbinnov-web-production.up.railway.app ; domaines `cbinnov.com` et `www.cbinnov.com` (www → redirection 301 vers l'apex).
- En-têtes de sécurité (CSP, HSTS, X-Frame-Options…) ajoutés par le service.
- Le fichier `CNAME` ne sert plus qu'à GitHub Pages (ancien hébergement) ; il peut être retiré une fois les DNS basculés.

## Statistiques

Umami (projet Railway `analytics`), site `cbinnov.com`, id `4158811c-ba42-4cb8-9ad9-61c5b8ea9074`. Événements : `clic_sortant` (liens vers les marques), `clic_courriel`, `clic_telephone`.
