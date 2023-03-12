# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#
class Category < ApplicationRecord
  # モジュール


  # 定数


  # アクセサ
  attr_accessible :name


  # 関連
  has_many :posts, dependent: :destroy


  # 委譲


  # スコープ


  # フック


  # バリデーション
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
