/*
 * 翻訳文書の問い合わせ先を書き換える
 * `<a href="" id="file-issue"></a>`のURLとリンクテキストを書き換えます。
 */
const form_url_prefix = "https://docs.google.com/forms/d/e/1FAIpQLSdIpvogLx8kGIMewhQ6MzhG2pOCQZ50iIBViGg8pUrRJuslKg/viewform?entry.685195438=";
const form_link_text = "翻訳に関するお問い合わせ (Google フォーム)";
const target_id = "file-issue";

document.addEventListener("DOMContentLoaded", () => {    
    const viewurl = encodeURIComponent(window.location.href);
    const sendurl = form_url_prefix + viewurl;
    const target = document.getElementById(target_id);
    if (target != null) {
        target.setAttribute("href", sendurl);
        target.textContent = form_link_text;
    }
});
