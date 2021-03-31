fetch('https://api.imgur.com/3/image', {
    //mode: 'cors',
    method: 'POST',
    headers: {
      Authorization: 'Client-ID fabc92db9f05758',
    },
    body: formData
  }).then(response => {
    console.log(response);
    if (response.ok) {
      alert('Image uploaded to album');       
    }
  }).catch(error => {
    console.error(error);
    //alert('Upload failed: ' + error);
  });