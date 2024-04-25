// Verifica se la pagina è stata caricata con un errore 404
if (document.querySelector('body').innerText.includes('404') || document.title === '404 Not Found') {
  // Reindirizza alla tua pagina di errore personalizzata
  window.location.href = '/a.html';
}