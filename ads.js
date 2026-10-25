(function () {
  // 광고 단위를 만든 뒤 data-ad-slot 숫자를 아래 따옴표 안에 넣으면 해당 광고 단위로 표시됩니다. (비워두면 자동 광고 설정을 따릅니다)
  var SLOT = "";
  var CLIENT = "ca-pub-2557338953436433";

  var box = document.getElementById("ad-bottom");
  if (!box) return;
  box.innerHTML = '<span class="ad-label">광고</span>' +
    '<ins class="adsbygoogle" style="display:block" data-ad-client="' + CLIENT + '"' +
    (SLOT ? ' data-ad-slot="' + SLOT + '"' : '') +
    ' data-ad-format="auto" data-full-width-responsive="true"></ins>';
  box.classList.add("on");
  try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
})();
