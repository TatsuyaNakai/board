# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#
FactoryBot.define do
  factory :category do
    name { 'テストカテゴリ' }
  end
end
