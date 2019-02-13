/*
 * 翻訳文書の問い合わせ先を書き換える
 * `<a href="" id="file-issue"></a>`のURLとリンクテキストを書き換えます。
 */
 addEventListener("DOMContentLoaded", function(){    
  let viewurl = encodeURIComponent(window.location.href);
  let sendurl = "https://docs.google.com/forms/d/e/1FAIpQLSdIpvogLx8kGIMewhQ6MzhG2pOCQZ50iIBViGg8pUrRJuslKg/viewform?entry.685195438=" + viewurl;
  if (document.getElementById("file-issue") != null) {
    let target = document.getElementById("file-issue");
    target.setAttribute("href", sendurl);
    target.textContent = "Google フォーム"
  }
});
