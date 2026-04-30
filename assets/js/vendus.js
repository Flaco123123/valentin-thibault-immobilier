fetch('data/vendus.json')
  .then(function(r) { return r.json(); })
  .then(function(data) {
    var grid = document.getElementById('vendus-grid');
    if (!grid) return;

    var delays = ['', ' d1', ' d2'];

    grid.innerHTML = data.vendus.map(function(v, i) {
      var delay = delays[i % 3];
      var alt = v.type + ' vendu ' + v.description + ' ' + v.localite + ' – Valentin Thibault SAFTI';

      return '<div class="vendu-card r' + delay + '">'
        + '<div class="vendu-img">'
        + '<img src="' + v.photo + '" alt="' + alt + '" loading="lazy">'
        + '<div class="vendu-stamp"><span>Vendu</span></div>'
        + '</div>'
        + '<div class="vendu-body">'
        + '<div class="vendu-type">' + v.type + '</div>'
        + '<div class="vendu-desc">' + v.description + '</div>'
        + '<div class="vendu-lieu">' + v.localite + ' (' + v.code_postal + ')</div>'
        + '</div>'
        + '</div>';
    }).join('');

    grid.querySelectorAll('.r').forEach(function(el) {
      if (window.io) window.io.observe(el);
    });
  })
  .catch(function() {
    var grid = document.getElementById('vendus-grid');
    if (grid) grid.innerHTML = '<p style="color:#999;text-align:center;padding:2rem;grid-column:1/-1">Impossible de charger les succès récents.</p>';
  });
