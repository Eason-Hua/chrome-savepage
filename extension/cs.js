// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Update the declarative rules on install or upgrade.
var ws = new WebSocket("wss://localhost:8888/ws");
var tokens = [
    [ "https://open.cd/", "ocd" ],
    [ "https://totheglory.im/", "ttg" ]
//    "https://totheglory.im/t/",
//    "https://totheglory.im/bookmarks.php",
//	"https://totheglory.im/userdetails.php?id=6675"
];
ws.onopen = function() {
    console.log(document.baseURI);
    for (var i = 0; i < tokens.length; i++) {
        if (document.baseURI.substr(0, tokens[i][0].length) == tokens[i][0])
        {
            console.log("ws.send");
            var body = tokens[i][1] + document.body.innerHTML;
            ws.send(body);
            break;
        }
    }
}

