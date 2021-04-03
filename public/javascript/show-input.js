const background = document.querySelector(".background")
const blur = document.querySelector(".blur")

background.setAttribute("style", "background: #A27AD8");
background.setAttribute("style", "height: 100%")
blur.setAttribute("style", "background: rgba(237, 255, 224, 0.550)")



function getStagePlot(event) {
  event.preventDefault();

  const img = document.querySelector(".stage-plot-input");
  var formData = new FormData();
  formData.append("image", img.files[0]);
  $.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    datatype: "json",
    headers: {
      Authorization: "Client-ID fabc92db9f05758 ",
    },
    data: formData,
    success: function (response) {
      //console.log(response);
      var photo = response.data.link;
      var photo_hash = response.data.deletehash;
      getInputList(photo);
    },
    cache: false,
    contentType: false,
    processData: false,
  });
}

function getInputList(stagePlot) {
  const inputList = document.querySelector(".input-list-input");
  var formData = new FormData();
  formData.append("image", inputList.files[0]);
  $.ajax({
    url: "https://api.imgur.com/3/image",
    type: "POST",
    datatype: "json",
    headers: {
      Authorization: "Client-ID fabc92db9f05758 ",
    },
    data: formData,
    success: function (response) {
      //console.log(response);
      var inputList = response.data.link;
      var photo_hash = response.data.deletehash;
      showBuildHandler(stagePlot, inputList);
    },
    cache: false,
    contentType: false,
    processData: false,
  });
}

async function showBuildHandler(stagePlot, inputList) {
  const date = document.querySelector(".date").value.trim();
  const soundcheck = document.querySelector(".soundcheck").value.trim();
  const loadIn = document.querySelector(".load-in").value.trim();
  const extraDeets = document.querySelector(".extra-deets").value.trim();
  const band_name = document.querySelector(".band_name").value.trim();

  const response = await fetch(`/api/shows`, {
    method: "POST",
    body: JSON.stringify({
      date: date,
      band_name: band_name,
      load_in: loadIn,
      soundcheck: soundcheck,
      extra_deets: extraDeets,
      input_list: inputList,
      stage_plot: stagePlot,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".show-input-btn")
  .addEventListener("click", getStagePlot);
