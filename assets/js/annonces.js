fetch('data/annonces.json')
  .then(function(r) { return r.json(); })
  .then(function(data) {
    var grid = document.getElementById('annonces-grid');
    if (!grid) return;

    var delays = ['', ' d1', ' d2'];

    grid.innerHTML = data.annonces.map(function(a, i) {
      var delay = delays[i % 3];

      var badgesHtml = (a.badges || []).map(function(b) {
        if (b === 'exclusivite')   return '<div class="bien-badge">Exclusivité</div>';
        if (b === 'sous_compromis') return '<div class="bien-badge" style="top:2.4rem;background:#888">Sous compromis</div>';
        return '';
      }).join('');

      var specsHtml = (a.specs || []).map(function(s) {
        return '<span class="spec">' + s + '</span>';
      }).join('');

      var alt = a.type + ' ' + a.specs.join(' ') + ' à vendre ' + a.localite + ' ' + a.prix + ' – Valentin Thibault SAFTI';

      return '<a href="' + a.url_safti + '" target="_blank" class="bien-card r' + delay + '">'
        + '<div class="bien-img">'
        + '<img src="' + a.photo + '" alt="' + alt + '" loading="lazy">'
        + badgesHtml
        + '</div>'
        + '<div class="bien-body">'
        + '<div class="bien-type">' + a.type + '</div>'
        + '<div class="bien-prix">' + a.prix + '</div>'
        + '<div class="bien-lieu">' + a.localite + ' (' + a.code_postal + ')</div>'
        + '<div class="bien-specs">' + specsHtml + '</div>'
        + '</div>'
        + '</a>';
    }).join('');

    grid.querySelectorAll('.r').forEach(function(el) {
      if (window.io) window.io.observe(el);
    });
  })
  .catch(function() {
    var grid = document.getElementById('annonces-grid');
    if (grid) grid.innerHTML = '<p style="color:#999;text-align:center;padding:2rem;grid-column:1/-1">Impossible de charger les annonces.</p>';
  });
