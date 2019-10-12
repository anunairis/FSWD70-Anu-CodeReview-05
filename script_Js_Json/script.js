const jsonMovie = movie;
for(let i = 0; i < jsonMovie.length; i++ ) {
  const htmlElement = `
    <div class="relative_position col-lg-5 col-md-5 col-sm-12 col-xs-12 mb-5 change_bg_dark hover_row"> 
      <div class="row">
          <img id="img_${jsonMovie[i].id}" class="col-lg-5 d-flex align-self-stretch py-3 rounded" src="${jsonMovie[i].image}"></img>
          <div class="col-lg-7">
            <p class="title_style text-white">${jsonMovie[i].title}</p>
            <p class="text-white">Published year: ${jsonMovie[i].year}</p>
            <p class="text-white">${jsonMovie[i].plot}</p>

          <div class="likes_container d-flex flex-nowrap justify-content-end align-items-end pb-2"> 
            <button type="button" id="btn_${jsonMovie[i].id}" class="btn btn-default btn-lg bg-warning mr-2"> 
            <span class="fa">&#xf0a4;</span> Like
            </button>
              <span class="text-white rounded rounded-circle bg-warning px-3 py-2"><span id="counter_span_${jsonMovie[i].id}">0</span>
          </div>
        </div>
      </div>
    </div>
  `;
  const oneMovie = $(htmlElement);
  $('#movies_container').append(oneMovie);

  let counter = 0;
  $(`#btn_${jsonMovie[i].id}`).on('click', function() {
    counter = counter + 1;
    $(`#counter_span_${jsonMovie[i].id}`).text(counter);
  });
}

