# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  note       :text(65535)
#  status     :string(255)      default("draft"), not null
#  created_at :datetime
#  updated_at :datetime
#
class Category < ApplicationRecord
  # モジュール
  extend Enumerize
  enumerize :status, in: %i(draft public private), predicates: { prefix: true }


  # 定数


  # アクセサ
  attr_accessible :name, :note, :status


  # 関連
  has_many :posts


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :name,                  presence: true,
                                    length: { maximum: 255, allow_blank: true }
                                    # uniqueness: true,
  validates :status,                presence: true
                                    # length: { maximum: 255, allow_blank: true },
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
