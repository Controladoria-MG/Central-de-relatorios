document.querySelectorAll('.card.disabled').forEach(function (card) {
  card.addEventListener('click', function (e) {
    e.preventDefault();
  });
});
