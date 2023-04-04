# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  author_name :string(255)
#  body        :string(255)      not null
#  email       :string(255)
#  status      :string(255)      default("public"), not null
#  title       :string(255)
#  token       :string(255)      not null
#  created_at  :datetime
#  updated_at  :datetime
#  category_id :integer          not null
#
FactoryBot.define do
  factory :post do
    association :category, factory: :category
    body                { 'body' }
    token               { 'token' }
  end
end
