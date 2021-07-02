$(document).ready(function () {
  function createPlaylistCard(obj, pos) {
    var mainDiv = document.createElement("div");
    mainDiv.id = "card" + obj.id;
    mainDiv.className = "playlist-card";

    var thumbnail = document.createElement("img");
    thumbnail.src = obj.thumbnail;
    thumbnail.className = "thumbnail";

    var title = document.createElement("h3");
    title.className = "video-card-title";
    title.innerHTML = obj.title;

    mainDiv.appendChild(thumbnail);
    mainDiv.appendChild(title);

    return mainDiv;
  }

  function updateLeftVideo(id) {
    $.get(
      "https://5d76bf96515d1a0014085cf9.mockapi.io/video/" + id,
      function (videoData) {
        // console.log(videoData);
        $("#video-player").attr(
          "src",
          "https://player.vimeo.com/video/" + videoData.vimeoId
        );
        $("#views-count").html(videoData.views);
        $("#video-title").html(videoData.title);
        $("#video-description").html(videoData.description);

        $(".playlist-card").removeClass("active-card");
        $("#card" + id).addClass("active-card");

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    );
  }

  $.get(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/playlist",
    function (response) {
      // console.log(response);

      for (let i = 0; i < response.length; i++) {
        var data = createPlaylistCard(response[i]);

        $("#playlist-wrapper").append(data);
        if (i == 0) {
          $("#card" + 1).addClass("active-card");
        }
        // console.log(data);
        $("#card" + i).click(function () {
          updateLeftVideo(i);
        });
      }
    }
  );
});
