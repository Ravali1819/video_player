$(document).ready(function () {
  var playlistData = [
    {
      id: "1",
      title: "Croissants | Flour and Stone",
      thumbnail: "https://i.vimeocdn.com/video/600595198_390x220.webp",
    },
    {
      id: "2",
      title: "Perfect Mashed Potatoes and Gravy",
      thumbnail: "https://i.vimeocdn.com/video/604150056_390x220.webp",
    },
    {
      id: "3",
      title: "The Heart of Soba",
      thumbnail: "https://i.vimeocdn.com/video/726986673_390x220.webp",
    },
    {
      id: "4",
      title: "Grilled Cheese 9 Ways",
      thumbnail: "https://i.vimeocdn.com/video/570486309_390x220.webp",
    },
    {
      id: "5",
      title: "Pineapple Cheesecake",
      thumbnail: "https://i.vimeocdn.com/video/602705517_390x220.webp",
    },
    {
      id: "6",
      title: "Lemony Chicken Noodle Soup",
      thumbnail: "https://i.vimeocdn.com/video/537261616_390x220.jpg",
    },
    {
      id: "7",
      title: "Pumpkin Roll",
      thumbnail: "https://i.vimeocdn.com/video/608805594_590x332.jpg",
    },
    {
      id: "8",
      title: "How to Brine a Turkey",
      thumbnail: "https://i.vimeocdn.com/video/601730519_590x332.jpg",
    },
    {
      id: "9",
      title: "Stop Motion Dry-Brined Turkey Recipe",
      thumbnail: "https://i.vimeocdn.com/video/456852083_590x332.jpg",
    },
    {
      id: "10",
      title: "Butternut Squash Ravioli",
      thumbnail: "https://i.vimeocdn.com/video/600328152_590x332.jpg",
    },
  ];

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
    console.log(id);
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

  for (let i = 1; i <= playlistData.length; i++) {
    console.log(playlistData.length);
    var data = createPlaylistCard(playlistData[i - 1]);

    $("#playlist-wrapper").append(data);
    if (i == 1) {
      $("#card" + 1).addClass("active-card");
    }
    // console.log(data);
    $("#card" + i).click(function () {
      updateLeftVideo(i);
    });
  }
});
