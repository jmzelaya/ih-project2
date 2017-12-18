// $(document).ready(function () {
//   alert("does this work?");
// });


$(document).ready(function () {
  $('.add-step').click( function () {
      $('.step-ol').append(`<li class="step-form-li well animated">
            <div class="row">
              <div class="col-sm-6">
                <label for="stitle">Title</label>
                <input id="stitle" name="stepTitle[]"/>
                <br />
              </div>
              <div class="col-sm-6">
                <label for="simg">Upload a Photo</label>
                <input id="simg" name="stepImg" type="file"/>
                <br />
              </div>

              <div class="col-sm-12">
                <label for="sdesc">Description of Step</label>
                <textarea id="sdesc" name="stepDesc[]"></textarea>
                <br />
              </div>
            </div>
          </li><hr />`).addClass('slideInDown');
  });
});


// document.getElementById('add-step').onclick(function () {
//   var list = document.getElementById('step-ol');
//   var newLI = document.createElement('li');
//   newLI.innerHTML = ` <div class="row">
//                 <div class="col-sm-6">
//                   <label for="stitle">Title</label>
//                   <input id="stitle" name="stepTitle[]"/>
//                   <br />
//                 </div>
//                 <div class="col-sm-6">
//                   <label for="simg">Upload a Photo</label>
//                   <input id="simg" name="stepImg" type="file"/>
//                   <br />
//                 </div>
//
//                 <div class="col-sm-12">
//                   <label for="sdesc">Description of Step</label>
//                   <textarea id="sdesc" name="stepDesc[]"></textarea>
//                   <br />
//                 </div>
//               </div>`;
//   list.appendChild(newLI);
//   setTimeout(function() {
//     newLI.className = newLI.className + " show";
//   }, 10);
// });
