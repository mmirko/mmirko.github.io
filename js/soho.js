$(document).ready(function(){

  $(".twitter-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank").focus();
  });

  $(".linkedin-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    // var text = encodeURIComponent(self.data("text"));

    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank").focus();
  });

  $(".reddit-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    window.open(`https://new.reddit.com/submit?url=${url}&title=${text}`, "_blank").focus();
  });

  $(".facebook-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    // var text = encodeURIComponent(self.data("text"));

    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank").focus();
  });

  $(".telegram-share-button").click(function (e) {
    e.preventDefault();
    var self = $(this);
    var url = encodeURIComponent(self.data("url"));
    var text = encodeURIComponent(self.data("text"));

    window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank").focus();
  });

});
