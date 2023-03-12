# == Schema Information
#
# Table name: admins
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  name                   :string(255)      not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#
# Indexes
#
#  index_admins_on_email                 (email) UNIQUE
#  index_admins_on_reset_password_token  (reset_password_token) UNIQUE
#
class Admin < ApplicationRecord
  # モジュール
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable


  # 定数


  # アクセサ
  attr_accessible :email, :encrypted_password, :name, :remember_created_at,
                  :reset_password_sent_at, :reset_password_token


  # 関連


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :email,                 presence: true,
                                    length: { maximum: 255, allow_blank: true },
                                    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :encrypted_password,    presence: true,
                                    length: { maximum: 255, allow_blank: true }
                                    # uniqueness: true,
  validates :name,                  presence: true,
                                    length: { maximum: 255, allow_blank: true }
                                    # uniqueness: true,


  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)

  private
end
