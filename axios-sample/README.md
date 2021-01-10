# axios の動作テストアプリ

このプログラムは axios でエラーが発生した場合にどんなエラーコードを返すのかを調べるためのアプリです。

axios は JavaScript で HTTP リクエストするためのライブラリです。詳しくはこちら

[https://github.com/axios/axios](https://github.com/axios/axios)

## 実行

サーバー側を実行

    $ cd server
    $ npm start

フロント側を実行

    $ cd front
    $ npm start

## テストリクエスト

- VALID REQUEST

  正常な応答の場合

- NOT FOUND

  ページが見つからない場合

- FORBIDDEN

  アクセスが禁止されている場合

- INVALID IP

  異なるホスト(IP アドレス)の場合

- TIMEOUT

  タイムアウト(3 秒)した場合
