# == Schema Information
#
# Table name: admins
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  first_name             :string(255)      not null
#  last_name              :string(255)      not null
#  note                   :text(65535)
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
  attr_accessible :email, :encrypted_password, :first_name, :last_name, :note, :remember_created_at,
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
  validates :last_name,             presence: true,
                                    length: { maximum: 255, allow_blank: true }
                                    # uniqueness: true,
  validates :first_name,            presence: true,
                                    length: { maximum: 255, allow_blank: true }
                                    # uniqueness: true,
  validates :note,                  # presence: true,
                                    length: { maximum: 1024, allow_blank: true }
                                    # uniqueness: true,


  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)

  private
end
