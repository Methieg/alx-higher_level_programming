$('document').ready(function () {
  $.get('http://www.comfypaddy.tech/?lang=en', function (data) {
    $('DIV#hello').text(data.hello);
  });
});
