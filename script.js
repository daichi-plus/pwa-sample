if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    this.navigator.serviceWorker.register('sw.js').then(function (sw) {
      console.log('ServiceWorker scope: ', sw.scope);
    }, function (err) {
      console.log('ServiceWorker failed: ', err);
    });
  });
}
