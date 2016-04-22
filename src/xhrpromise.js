
/**
 * @param {string} remoteUri
 * @return {!Promise}
 */
function getRemote(remoteUri) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", remoteUri, true);
    xhr.onload = function (evt) {
      if (/^application\/json/i.test(this.getResponseHeader('Content-Type'))) {
        try {
          return resolve(JSON.parse(this.responseText));
        } catch (ex) {
          reject(ex);
        }
      }
      resolve(evt.responseText);
    };
    xhr.send();

    xhr.onerror = function () {
      reject(new Error("An error occurred retrieving the remote url. " + this.status));
    };
  });
}