# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  name       :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#
require 'rails_helper'

RSpec.describe Category, type: :model do
  it 'は、新規作成することができる' do
    expect(FactoryBot.build(:category)).to be_valid
  end

  it 'は、カテゴリ名の存在チェックができる' do
    one = FactoryBot.build(:category, name: nil)
    one.valid?
    expect(one.errors.messages[:name]).to eq ['を入力してください']
  end

  it 'は、カテゴリ名の最大255文字の上限チェックができる' do
    one = FactoryBot.build(:category, name: 'a' * 256)
    one.valid?
    expect(one.errors.messages[:name]).to eq ['は255文字以内で入力してください']
  end

  it 'は、カテゴリ名の重複チェックができる' do
    FactoryBot.create(:category, name: 'カテゴリ名')
    one = FactoryBot.build(:category, name: 'カテゴリ名')
    one.valid?
    expect(one.errors.messages[:name]).to eq ['はすでに存在します']
  end

  it 'は、削除時に関連する投稿も削除される' do
    one = FactoryBot.create(:category)
    one.posts.create(body: 'body', token: 'token')
    expect { one.destroy! }.to change(Post, :count).by(-1)
  end
end
