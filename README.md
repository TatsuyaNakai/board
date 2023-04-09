## 管理者アカウント

  sample_admin@gmail.com
  
  password

 

## 参考

* Docker環境構築

  > https://qiita.com/taki_21/items/613f6a00bc432d1c221d
  

* Railsにも`.git`ができるので、それを消してあげる必要がある

  > https://qiita.com/ryouzi/items/c8c3fa4a5e16e6710d6c#git%E7%AE%A1%E7%90%86


* Gemfileにgemを追加した場合

  > `docker-compose down` -> `docker-compose build`


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

  > dockerを落とそうにも落ちない時の最終手段: `killall Docker && open /Applications/Docker.app`


* graphql-codegen

  > 概要について https://zenn.dev/nbstsh/scraps/f01024249984de


* rspec導入

  > ファイルを作成する場合: `docker-compose run api rails g rspec:model [モデル名]`でポートを立てていない状態で実行する

  > テスト実行: `docker-compose run api bundle exec rspec`で全ファイルなので、個別ファイルの場合はパスを指定すること

  > 立ち上げ時は`exec`で可能

  > 末尾に`--format documentation`でパスした試験が見える ex: `docker-compose exec api bundle exec rspec --format documentation`

  > GraphQLをRspecで試験 https://www.marsa-blog.com/2020/08/rails-graphql-test.html

以上
