/*
 問い合わせがあった際に Slack に通知する GAS
 トリガーの設定で、フォーム送信時に onFormSubmit が呼ばれるようにする想定
 【重要】 url の値には秘密情報が含まれるので、このままGitHubにコミットしないように注意!
*/


function sendToSlack(icon, body, channel) {
  var url = "https://hooks.slack.com/services/???(このあたりが秘密情報)???";
  var data = { "channel" : channel, "username" : "Google Form", "text" : body, "icon_emoji" : icon };
  var payload = JSON.stringify(data);
  var options = {
    "method" : "POST",
    "contentType" : "application/json",
    "payload" : payload
  };
  var response = UrlFetchApp.fetch(url, options);
}

function test() {
  var icon = ":heart:";
  var body = "動作確認です。\nテストテスト";
  var channel = "#wg4-inquiry";
  sendToSlack(icon, body, channel);
}

function onFormSubmit(e){
  var icon = ":exclamation:";
  var body = "フォームに何かが投稿されたかもしれません!\n";
  var channel = "#wg4-inquiry";

  var itemResponse = e.response.getItemResponses();
  for (var i = 0; i < itemResponse.length; i++){    
    var formData = itemResponse[i];
    var title = formData.getItem().getTitle();
    var response = formData.getResponse();
    body += "<" + title + ":>\n" + response + "\n";
  }
    
  sendToSlack(icon, body, channel);
}