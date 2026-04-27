# Valentin Thibault — Conseiller Immobilier SAFTI · Poitiers

Site professionnel de génération de leads pour estimations immobilières.  
Publié sur **GitHub Pages** : https://flaco123123.github.io/valentin-thibault-immobilier/

---

## Structure des fichiers

```
valentin-thibault-immobilier/
├── index.html          # Page principale (site complet en une seule page)
├── .gitignore
└── README.md
```

## Modifier le site

### Mettre à jour les annonces

Dans `index.html`, cherchez la section `<!-- ANNONCES -->` (ligne ~342).  
Chaque annonce est un bloc `<a href="..." class="bien-card">` :

```html
<a href="URL_SAFTI" target="_blank" class="bien-card">
  <div class="bien-img">
    <img src="URL_PHOTO" alt="Description">
    <div class="bien-badge">Exclusivité</div>  <!-- optionnel -->
  </div>
  <div class="bien-body">
    <div class="bien-type">Maison</div>
    <div class="bien-prix">249 500 €</div>
    <div class="bien-lieu">Chabournay (86380)</div>
    <div class="bien-specs">
      <span class="spec">5 pièces</span>
      <span class="spec">119 m²</span>
    </div>
  </div>
</a>
```

### Configurer le formulaire Formspree

1. Créez un compte sur [formspree.io](https://formspree.io)
2. Créez un nouveau formulaire et copiez votre ID (format `xabc1234`)
3. Dans `index.html`, remplacez `VOTRE_ID` par votre ID :
   ```html
   <form action="https://formspree.io/f/xabc1234" method="POST">
   ```

### Mettre à jour les statistiques

Cherchez `id="stats"` dans `index.html` et modifiez les chiffres (22 avis, 6 succès, 10 annonces).

### Mettre à jour les témoignages

Section `<!-- TÉMOIGNAGES -->` dans `index.html`.

---

## Déployer sur GitHub Pages

1. Poussez vos modifications sur la branche `main` :
   ```bash
   git add index.html
   git commit -m "mise à jour annonces"
   git push origin main
   ```
2. GitHub Pages se met à jour automatiquement en ~1 minute.

### Activation initiale de GitHub Pages

Sur GitHub : **Settings → Pages → Source : Deploy from a branch → Branch: main / root → Save**

---

## Technologies

- HTML5 / CSS3 vanilla (aucune dépendance)
- Google Fonts : Cormorant Garant + Plus Jakarta Sans
- Formulaire : [Formspree](https://formspree.io) (soumission AJAX)
- Hébergement : GitHub Pages
