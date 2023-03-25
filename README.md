## 参考

* Docker環境構築

  > https://qiita.com/taki_21/items/613f6a00bc432d1c221d
  

* Railsにも`.git`ができるので、それを消してあげる必要がある

  > https://qiita.com/ryouzi/items/c8c3fa4a5e16e6710d6c#git%E7%AE%A1%E7%90%86


* Gemfileにgemを追加した場合

  > `docker-compose down` -> `docker-compose build`


* ActiveAdmin

  > https://blog.heroku.com/a-rock-solid-modern-web-stack


* GraphQL

  > https://developer.kaizenplatform.com/entry/tokuda/2021-12-06


* マイグレーションのリセット

  > `docker-compose exec api bundle exec rails db:migrate:reset`


* binding.pryのやり方

  > 止めたいところに`binding.pry`を指すのは今までと同じ、ターミナルで下記を実行
  
  > `docker-compose up -d`, `docker attach [コンテナ名]` コンテナ名を調べる場合は、`docker ps`で出力される


* dockerコマンド

  > DBのリセット: `docker-compose rails db:migrate:reset`

  > dockerを再度立ち上げる: `docker-compose up`

  > dockerを落とす: `docker-compose down`


* graphql-codegen

  > 概要について https://zenn.dev/nbstsh/scraps/f01024249984de

以上
