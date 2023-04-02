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
require 'rails_helper'

RSpec.describe Post, type: :model do
  it 'は、新規作成することができる' do
    expect(FactoryBot.build(:post)).to be_valid
  end

  it 'は、著者名の最大255文字の上限チェックができる' do
    one = FactoryBot.build(:post, author_name: 'a' * 256)
    one.valid?
    expect(one.errors.messages[:author_name]).to eq ['は255文字以内で入力してください']
  end

  it 'は、本文の存在チェックができる' do
    one = FactoryBot.build(:post, body: nil)
    one.valid?
    expect(one.errors.messages[:body]).to eq ['を入力してください']
  end

  it 'は、本文の最大255文字の上限チェックができる' do
    one = FactoryBot.build(:post, body: 'a' * 256)
    one.valid?
    expect(one.errors.messages[:body]).to eq ['は255文字以内で入力してください']
  end

  it 'は、メールアドレスの形式チェックができる' do
    one = FactoryBot.build(:post, email: 'aaaaa')
    one.valid?
    expect(one.errors.messages[:email]).to eq ['は不正な値です']
  end

  it 'は、タイトルの最大255文字の上限チェックができる' do
    one = FactoryBot.build(:post, title: 'a' * 256)
    one.valid?
    expect(one.errors.messages[:title]).to eq ['は255文字以内で入力してください']
  end
end
