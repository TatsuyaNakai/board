# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  category_id :integer          not null
#  author_name :string(255)
#  status      :string(255)      default("public"), not null
#  token       :string(255)      not null
#  body        :string(255)      not null
#  email       :string(255)
#  title       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#
class Post < ApplicationRecord
  # モジュール
  extend Enumerize
  enumerize :status, in: %i(public private), predicates: { prefix: true }


  # 定数


  # アクセサ
  attr_accessible :category_id, :status, :token, :author_name, :email, :title, :body


  # 関連
  belongs_to :category


  # 委譲


  # スコープ


  # フック


  # バリデーション
  # validates :status,                presence: true
                                    # length: { maximum: 255, allow_blank: true },
                                    # uniqueness: true,
  validates :author_name,           # presence: true,
                                    length: { maximum: 255 },
                                    allow_blank: true
  validates :token,                 presence: true
                                    # length: { maximum: 255 },
                                    # allow_blank: true,
  validates :email,                 # presence: true,
                                    length: { maximum: 255 },
                                    allow_blank: true,
                                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :title,                 # presence: true,
                                    length: { maximum: 255 },
                                    allow_blank: true
                                    # uniqueness: true,
  validates :body,                  presence: true,
                                    length: { maximum: 255 }
                                    # uniqueness: true,


  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)

  private
end
