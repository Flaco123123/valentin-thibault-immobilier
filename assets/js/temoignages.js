fetch('data/temoignages.json')
  .then(function(r) { return r.json(); })
  .then(function(data) {
    var grid = document.getElementById('temo-grid');
    if (!grid) return;

    grid.innerHTML = data.temoignages.map(function(t) {
      var cls = t.featured ? 'temo temo-featured' : 'temo';
      var avStyle = t.featured ? ' style="background:rgba(255,255,255,.2)"' : '';

      return '<div class="' + cls + '">'
        + '<div class="temo-stars">★★★★★</div>'
        + '<div class="temo-date">' + t.date + '</div>'
        + '<div class="temo-title">' + t.titre + '</div>'
        + '<p class="temo-txt">' + t.texte + '</p>'
        + '<div class="temo-author">'
        + '<div class="temo-av"' + avStyle + '>' + t.initiales + '</div>'
        + '<div>'
        + '<div class="temo-name">' + t.auteur + '</div>'
        + '<div class="temo-lieu">' + t.lieu + '</div>'
        + '</div>'
        + '</div>'
        + '</div>';
    }).join('');
  })
  .catch(function() {
    var grid = document.getElementById('temo-grid');
    if (grid) grid.innerHTML = '<p style="color:#999;text-align:center;padding:2rem;grid-column:1/-1">Impossible de charger les témoignages.</p>';
  });
