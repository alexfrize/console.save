(function(console) {
  console.save = function(data, filename) {
    if (!data) {
      console.error('Console.save: No data');
      return;
    }

    if (!filename) filename = 'console.json';

    if (typeof data === 'object') {
      data = JSON.stringify(data, undefined, 4);
    }

    let blob = new Blob([data], { type: 'text/json' });
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.download = filename;
    a.href = window.URL.createObjectURL(blob);
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
    a.click();
    document.body.removeChild(a);
    console.log(`DEBUG: Saving data to ${filename}`);
  };
})(console);
