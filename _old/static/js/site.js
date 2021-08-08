$(document).ready(function() {
  $("a[rel='external']").attr("target", "_blank");
  
  $(function () {
  	$("a.youtube").YouTubePopup({ autoplay: 1, hideTitleBar: 1 });
  });
});
