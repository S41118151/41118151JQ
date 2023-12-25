$(document).ready(function() {
    // 按鈕1: 調整字體和顏色
    $("#btnAdjustFontColor").click(function() {
      $("#student-id, #student-name").css({
        "font-family": "Arial, sans-serif",
        "color": "blue"
      });
    });
  
    // 按鈕2: 調整大頭照
    $("#btnAdjustSelfie").click(function() {
      $("#selfie").css({
        "border-radius": "50%",
        "border": "2px solid red"
      });
    });
  
    // 按鈕3: 換生活照
    $("#btnChangeImage").click(function() {
      $("#selfie").attr("src", "life_photo.jpg");
    });
  
    // 按鈕4: 動畫切換淡出、淡入
    $("#btnAnimate").click(function() {
      $("#selfie").fadeOut(500, function() {
        $(this).fadeIn(500);
      });
    });
  });
  