$(window).on('load orientationchange', function() {
  setTimeout(function() {
    var w = window.innerWidth;
    var point = 1024;
    if (w > point) {
      //それ以外のときの処理
      $("body").addClass("pc").removeClass("spn");
      $(".Nav > ul").removeClass("open close").css("display", "block");
      $(".Nav .navbtn a").removeClass("open close").html("<span>メニューを閉じる</span>");
    } else {
      //画面サイズが1000px未満のときの処理
      $("body").addClass("spn").removeClass("pc");
      $(".Nav > ul").addClass("close").removeClass("open").css("display", "none");
      $(".Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    }
  }, 100);
});
 
//resize
$(window).resize(function() {
  var windowWidth = window.innerWidth;
  var point = 1024;
  var timer = false;
  if (timer !== false) {
    clearTimeout(timer);
  }
  timer = setTimeout(function() {
    var ww = $(window).width();
    if (windowWidth != ww) {
      if (windowWidth > point) {
        $("body").addClass("pc").removeClass("spn");
        $(".Nav > ul").removeClass("open close").css("display", "block");
        $(".Nav .navbtn a").removeClass("open close").html("<span>メニューを閉じる</span>");
        $(".Nav ul li.parent a").removeClass("open").addClass("close");
        $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      } else { //画面サイズが1000px未満のときの処理
        $("body").addClass("spn").removeClass("pc");
        $(".Nav > ul").addClass("close").removeClass("open").css("display", "none");
        $(".Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
        $(".Nav ul li.parent a").removeClass("open").addClass("close");
        $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      }
    } else {}
  }, 50);
});
 
//nav dropdown
jQuery(function($) {
  $(".Nav ul li.parent a").each(function() {
    var submenu = $(this).next("ul.submenu");
    var samelevel = $(this).parent().siblings().find("ul.submenu");
    var samelevelbtn = $(this).parent().siblings().find("a");
    $(this).addClass("close");
    $(submenu).addClass("close");
    $(this).on('click', function() {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open").addClass("close");
        $(submenu).slideUp("fast").removeClass("open").addClass("close");
      } else {
        $(samelevel).slideUp("fast").removeClass("open").addClass("close");
        $(samelevelbtn).removeClass("open").addClass("close");
        $(submenu).slideDown("fast").removeClass("close").addClass("open");
        $(this).removeClass("close").addClass("open");
      }
      //return false;
    });
  });
 
  $(document).click(function(event) {
    if (!$(event.target).closest(".Nav").length) {
      $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      $(".Nav ul li.parent a").removeClass("open").addClass("close");
      //alert('changeイベントが発生しました。');
    }
  });
});
 
//SP nav
jQuery(function($) {
  $(".Nav .navbtn a").click(function() {
    if ($(".Nav > ul").css("display") == "none") {
      $(".Nav > ul").addClass("open").removeClass("close").slideDown("fast");
      $(this).removeClass("close").addClass("open").html("<span>メニューを閉じる</span>");
    } else {
      $(".Nav > ul").addClass("close").removeClass("open").slideUp("fast");
      $(".Nav ul li.parent").removeClass("open").addClass("close");
      $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
      $(this).addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    }
  });
});
 
//SP アンカーリンク
jQuery(function($) {
  $("ul.submenu a[href^='#']").click(function(event) {
    //alert('changeイベントが発生しました。');
    $(".Nav ul.submenu").slideUp("fast").removeClass("open").addClass("close");
    $(".Nav ul li.parent a").removeClass("open").addClass("close");
    $(".spn .Nav > ul").addClass("close").removeClass("open").slideUp("fast");
    $(".spn .Nav .navbtn a").addClass("close").removeClass("open").html("<span>メニューを開く</span>");
    //$(this).removeClass("close").addClass("open").html("<span>メニューを閉じる</span>");
  });
});