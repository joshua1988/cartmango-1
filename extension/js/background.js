// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
// {
//     if(request.action == "getTabId") {
//         chrome.tabs.getSelected(null, function(tabs) {
//             chrome.tabs.sendRequest(tabs.id, { action: "response" });
//         });
//     }
// });



// 09.19(월)
chrome.identity.getProfileUserInfo(function(userInfo) {
  console.log("userInfo : ", userInfo);
});

chrome.identity.getAuthToken({ interactive: true }, function(token) {
    if (chrome.runtime.lastError) {
        alert(chrome.runtime.lastError.message);
        return;
    }
    var x = new XMLHttpRequest();
    x.open('GET', 'https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=' + token);
    x.onload = function() {
        alert(x.response);
        console.log("x response : ", x.response);
    };
    x.send();
});

// console.log("background loaded");


// var oauth = ChromeExOAuth.initBackgroundPage({
//   'request_url' : 'https://www.google.com/accounts/OAuthGetRequestToken',
//   'authorize_url' : 'https://www.google.com/accounts/OAuthAuthorizeToken',
//   'access_url' : 'https://www.google.com/accounts/OAuthGetAccessToken',
//   'consumer_key' : 'anonymous',
//   'consumer_secret' : 'anonymous',
//   'scope' : 'http://www.google.com/m8/feeds/',
//   'app_name' : 'Sample - OAuth Contacts'
// });
