const config = require("../config");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  getsize,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  cmd,
  commands
} = require('../command');
const yts = require('ytsearch-venom');
function ytreg(_0x3f851d) {
  const _0x255b80 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  return _0x255b80.test(_0x3f851d);
}
cmd({
  'pattern': "yts",
  'alias': ["ytsearch"],
  'use': ".yts lelena",
  'react': '🔎',
  'desc': "Search songs",
  'category': "search",
  'filename': __filename
}, async (_0x3a8e5a, _0x50e9ea, _0x342a22, {
  from: _0x2c4452,
  l: _0x315b50,
  quoted: _0x186cd4,
  body: _0x246589,
  isCmd: _0x16119c,
  command: _0x191366,
  args: _0x393fa7,
  q: _0x442f28,
  isGroup: _0x570ca3,
  sender: _0x238f53,
  senderNumber: _0x170f42,
  botNumber2: _0x45d845,
  botNumber: _0x3cdb06,
  pushname: _0xd6cf7a,
  isMe: _0x54316d,
  isOwner: _0x1308b6,
  groupMetadata: _0x1060b6,
  groupName: _0x517421,
  participants: _0x17568a,
  groupAdmins: _0x280b5a,
  isBotAdmins: _0x185964,
  isAdmins: _0x3387c1,
  reply: _0x417208
}) => {
  try {
    if (!_0x442f28) {
      return await _0x417208(imgmsg);
    }
    if (isUrl(_0x442f28) && !ytreg(_0x442f28)) {
      return await _0x417208(imgmsg);
    }
    try {
      let _0x54d683 = require("ytsearch-venom");
      var _0x1ec364 = await _0x54d683(_0x442f28);
    } catch (_0x55c1ce) {
      _0x315b50(_0x55c1ce);
      return await _0x3a8e5a.sendMessage(_0x2c4452, {
        'text': "*Error !!*"
      }, {
        'quoted': _0x50e9ea
      });
    }
    var _0x4c2f07 = '';
    _0x1ec364.all.map(_0x59739f => {
      _0x4c2f07 += " *🖲️" + _0x59739f.title + "*\n🔗 " + _0x59739f.url + "\n\n";
    });
    await _0x3a8e5a.sendMessage(_0x2c4452, {
      'text': _0x4c2f07
    }, {
      'quoted': _0x50e9ea
    });
  } catch (_0x5aeb46) {
    _0x315b50(_0x5aeb46);
    _0x417208("*Error !!*");
  }
});
cmd({
  'pattern': "song",
  'alias': ["ytsong"],
  'use': ".song lelena",
  'react': '🎧',
  'desc': "Download songs",
  'category': "download",
  'filename': __filename
}, async (_0x264091, _0x2810d0, _0x29de50, {
  from: _0x30a0f7,
  prefix: _0x6f038d,
  l: _0x4824a5,
  quoted: _0x49ac2e,
  body: _0x5d87f9,
  isCmd: _0x198fce,
  command: _0x1357da,
  args: _0x38b05e,
  q: _0x203ded,
  isGroup: _0x43ed08,
  sender: _0x321bd5,
  senderNumber: _0x441f2b,
  botNumber2: _0xa4bc9d,
  botNumber: _0x3de5b0,
  pushname: _0x1f359c,
  isMe: _0x5bc040,
  isOwner: _0x166d6a,
  groupMetadata: _0x57eb8e,
  groupName: _0x4db1a5,
  participants: _0x543d08,
  groupAdmins: _0x396d31,
  isBotAdmins: _0x12052d,
  isAdmins: _0x545f78,
  reply: _0x3d9476
}) => {
  try {
    if (!_0x203ded) {
      return await _0x3d9476("*Please enter a query or a url!*");
    }
    const _0x32b91f = _0x203ded.replace(/\?si=[^&]*/, '');
    var _0x4111bd = await yts(_0x32b91f);
    let _0xbf6d41 = config.FOOTER;
    var _0x1ba16b = _0x4111bd.videos[0x0];
    let _0x3ddcd3 = "*🎧 DARK SHUTER SONG DOWNLODER 🎧*\n\n*`📃 Title:`* " + _0x1ba16b.title + "\n\n*`📺 Views:`* " + _0x1ba16b.views + "\n\n*`🕹️ Duration:`* " + _0x1ba16b.duration + "\n\n*`🔗 Url:`* " + _0x1ba16b.url;
    const _0x374d1a = [{
      'buttonId': _0x6f038d + "ytaa " + _0x1ba16b.url,
      'buttonText': {
        'displayText': "AUDIO TYPE"
      },
      'type': 0x1
    }, {
      'buttonId': _0x6f038d + "ytad " + _0x1ba16b.url + '±' + _0x1ba16b.title,
      'buttonText': {
        'displayText': "DOCUMENT TYPE"
      },
      'type': 0x1
    }];
    const _0x393765 = {
      'image': {
        'url': _0x1ba16b.thumbnail
      },
      'caption': _0x3ddcd3,
      'footer': _0xbf6d41,
      'buttons': _0x374d1a,
      'headerType': 0x4
    };
    await _0x264091.buttonMessage(_0x30a0f7, _0x393765, _0x2810d0);
  } catch (_0x32d224) {
    _0x3d9476(N_FOUND);
    console.log(_0x32d224);
  }
});
cmd({
  'pattern': 'ytaa',
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x2c950c, _0x12c04e, _0x335954, {
  from: _0x182478,
  q: _0x8ed0ca,
  reply: _0x46a2d7
}) => {
  try {
    if (!_0x8ed0ca) {
      return await _0x46a2d7("*Need a youtube url!*");
    }
    const _0x42e296 = await fetchJson("https://www.dark-yasiya-api.site/download/ytmp3?url=" + _0x8ed0ca);
    await _0x2c950c.sendMessage(_0x182478, {
      'react': {
        'text': '⬆',
        'key': _0x12c04e.key
      }
    });
    await _0x2c950c.sendMessage(_0x182478, {
      'audio': {
        'url': _0x42e296.result.dl_link
      },
      'mimetype': 'audio/mpeg'
    }, {
      'quoted': _0x12c04e
    });
    await _0x2c950c.sendMessage(_0x182478, {
      'react': {
        'text': '✔',
        'key': _0x12c04e.key
      }
    });
  } catch (_0x394071) {
    console.log(_0x394071);
  }
});
cmd({
  'pattern': "ytad",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x41f0b4, _0x1c9594, _0x4d4147, {
  from: _0x248a6a,
  q: _0x11fbc9,
  reply: _0x450502
}) => {
  try {
    if (!_0x11fbc9) {
      return await _0x450502("*Need a youtube url!*");
    }
    const _0x121a6b = _0x11fbc9.split('±')[0x0];
    const _0x4f2b73 = _0x11fbc9.split('±')[0x1];
    const _0x43334a = await fetchJson("https://www.dark-yasiya-api.site/download/ytmp3?url=" + _0x121a6b);
    await _0x41f0b4.sendMessage(_0x248a6a, {
      'react': {
        'text': '⬆',
        'key': _0x1c9594.key
      }
    });
    await _0x41f0b4.sendMessage(_0x248a6a, {
      'document': {
        'url': _0x43334a.result.dl_link
      },
      'mimetype': "audio/mpeg",
      'caption': config.FOOTER,
      'fileName': _0x4f2b73 + '.mp3'
    }, {
      'quoted': _0x1c9594
    });
    await _0x41f0b4.sendMessage(_0x248a6a, {
      'react': {
        'text': '✔️',
        'key': _0x1c9594.key
      }
    });
    await _0x41f0b4.sendMessage(_0x248a6a, {
      'react': {
        'text': '✔',
        'key': _0x1c9594.key
      }
    });
  } catch (_0x11f9da) {
    console.log(_0x11f9da);
  }
});
cmd({
  'pattern': "video",
  'alias': ["ytvideo"],
  'use': ".song lelena",
  'react': "📽️",
  'desc': "Download videos",
  'category': 'download',
  'filename': __filename
}, async (_0x5e8a46, _0x1ecd01, _0xa4c128, {
  from: _0x4f3dde,
  prefix: _0x3f62ac,
  l: _0x543329,
  quoted: _0x21ff8e,
  body: _0x459335,
  isCmd: _0x39cb22,
  command: _0x3cd4b4,
  args: _0x423cdd,
  q: _0x2e6b98,
  isGroup: _0x4d0abc,
  sender: _0x43a52e,
  senderNumber: _0x4c07e6,
  botNumber2: _0x7fcddb,
  botNumber: _0x3ddf92,
  pushname: _0xcd2eb2,
  isMe: _0x442cb8,
  isOwner: _0x421453,
  groupMetadata: _0x3bd32a,
  groupName: _0x5b9f9f,
  participants: _0x501016,
  groupAdmins: _0x169cd3,
  isBotAdmins: _0x22cdd8,
  isAdmins: _0x35b230,
  reply: _0xbe956e
}) => {
  try {
    if (!_0x2e6b98) {
      return await _0xbe956e("*Please enter a query or a url!*");
    }
    const _0x2b6e8d = _0x2e6b98.replace(/\?si=[^&]*/, '');
    var _0x4c5fcf = await yts(_0x2b6e8d);
    let _0x8e6abf = config.FOOTER;
    var _0x2cc130 = _0x4c5fcf.videos[0x0];
    let _0x280d43 = "*📽️ DARK SHUTER VIDEO DOWNLODER 📽️*\n     \n*📃 Title:* " + _0x2cc130.title + "\n\n*📺 Views:* " + _0x2cc130.views + "\n\n*🕹️ Duration:* " + _0x2cc130.duration + "\n\n*🔗 Url:* " + _0x2cc130.url;
    const _0x1fc8c3 = [{
      'buttonId': _0x3f62ac + "360pv " + _0x2cc130.url,
      'buttonText': {
        'displayText': "VIDEO TYPE"
      },
      'type': 0x1
    }, {
      'buttonId': _0x3f62ac + "720pv " + _0x2cc130.url + '±' + _0x2cc130.title,
      'buttonText': {
        'displayText': "DOCUMENT TYPE"
      },
      'type': 0x1
    }];
    const _0x50b3fc = {
      'image': {
        'url': _0x2cc130.thumbnail
      },
      'caption': _0x280d43,
      'footer': _0x8e6abf,
      'buttons': _0x1fc8c3,
      'headerType': 0x4
    };
    await _0x5e8a46.buttonMessage(_0x4f3dde, _0x50b3fc, _0x1ecd01);
  } catch (_0x525a9a) {
    _0xbe956e(N_FOUND);
    console.log(_0x525a9a);
  }
});
cmd({
  'pattern': "360pv",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x262bd6, _0x144e5e, _0x57b1c3, {
  from: _0x4b6657,
  q: _0x4ce23d,
  reply: _0x2246b9
}) => {
  try {
    if (!_0x4ce23d) {
      return await _0x2246b9("*Need a youtube url!*");
    }
    const _0x35a67d = await fetchJson("https://www.dark-yasiya-api.site/download/ytmp4?url=" + _0x4ce23d);
    await _0x262bd6.sendMessage(_0x4b6657, {
      'video': {
        'url': _0x35a67d.result.dl_link
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x144e5e
    });
    await _0x262bd6.sendMessage(_0x4b6657, {
      'react': {
        'text': '✔️',
        'key': _0x144e5e.key
      }
    });
  } catch (_0x4f1a30) {
    console.log(_0x4f1a30);
  }
});
cmd({
  'pattern': '480pv',
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3a3175, _0x38b0d0, _0x2c2ee2, {
  from: _0x2fbbc9,
  q: _0x3154a6,
  reply: _0x5abb42
}) => {
  try {
    if (!_0x3154a6) {
      return await _0x5abb42("*Need a youtube url!*");
    }
    const _0x12d12c = await fetchJson("https://api-pink-venom.vercel.app/api/ytmp4?url=" + _0x3154a6);
    await _0x3a3175.sendMessage(_0x2fbbc9, {
      'video': {
        'url': _0x12d12c.result.download_url
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x38b0d0
    });
  } catch (_0x5e1619) {
    console.log(_0x5e1619);
  }
});
cmd({
  'pattern': '720pv',
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x108d4b, _0x5151ee, _0x5f42f1, {
  from: _0x21083c,
  q: _0x1be374,
  reply: _0x3fe193
}) => {
  try {
    if (!_0x1be374) {
      return await _0x3fe193("*Need a youtube url!*");
    }
    const _0x2a5f50 = _0x1be374.split('±')[0x0];
    const _0x19f381 = _0x1be374.split('±')[0x1];
    const _0x62e47c = await fetchJson("https://www.dark-yasiya-api.site/download/ytmp4?url=" + _0x2a5f50);
    await _0x108d4b.sendMessage(_0x21083c, {
      'document': {
        'url': _0x62e47c.result.dl_link
      },
      'mimetype': "audio/mpeg",
      'caption': config.FOOTER,
      'fileName': _0x19f381 + ".mp4"
    }, {
      'quoted': _0x5151ee
    });
  } catch (_0x28bb31) {
    await _0x108d4b.sendMessage(_0x21083c, {
      'react': {
        'text': '✔️',
        'key': _0x5151ee.key
      }
    });
    console.log(_0x28bb31);
  }
});
cmd({
  'pattern': "1080pv",
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x504177, _0x582802, _0xf655cc, {
  from: _0x56385b,
  q: _0x354910,
  reply: _0x3a0d67
}) => {
  try {
    if (!_0x354910) {
      return await _0x3a0d67("*Need a youtube url!*");
    }
    const _0x150d50 = await fetchJson("https://api-pink-venom.vercel.app/api/ytmp4?url=" + _0x354910);
    await _0x504177.sendMessage(_0x56385b, {
      'video': {
        'url': _0x150d50.result.download_url
      },
      'caption': config.FOOTER
    }, {
      'quoted': _0x582802
    });
  } catch (_0x5b69ae) {
    console.log(_0x5b69ae);
  }
});
