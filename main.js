/**
 * npm のアップグレードと globalListに入っているモジュールのインストール
 */

// ------ 文字色
const yellow  = '\u001b[33m';
const reset   = '\u001b[0m';

//
const list = require('./globalList.js');
const listJoined = list.join(' ');
// const exec = require('child_process').exec;

var execCommand = `npm upgrade -g npm && npm install -g ${listJoined}  && npm -v && yarn --version`;
console.log(yellow+ execCommand+ reset);

// ログ吐きながらインストールできないので、方法みつかったらやる
// exec(execCommand, (err, stdout, stderr) => {
//   if (err) { console.log(err); }
//   console.log(stdout);
// });
