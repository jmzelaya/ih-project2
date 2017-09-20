// $(document).ready(function () {
//   alert("does this work?");
// });
let counter = 0;

$(document).ready(function () {
  $('.add-step').click( function () {
    counter++;
    $('.step-ol').append(`<label for="stitle">Title</label>
    <input id="stitle" name="stepTitle[]"
      placeholder="Click the 'Create-A-Diy' button"/>
    <br />

    <label for="simg">Upload a Photo</label>
    <input id="simg" name="stepImg" type="file"/>
    <br />

    <label for="sdesc">Description of Step</label>
    <textarea id="sdesc" name="stepDesc[]"
      placeholder="Go to iDiy homepage and log in to get started"></textarea>
    <br />`);
    $(this).attr('value', counter);
  });
});
