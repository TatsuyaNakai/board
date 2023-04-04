# == Schema Information
#
# Table name: admins
#
#  id                     :integer          not null, primary key
#  access_token           :string(255)      not null
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
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
require 'rails_helper'

RSpec.describe Admin, type: :model do
  it 'は、新規作成することができる' do
    expect(FactoryBot.build(:admin)).to be_valid
  end

  it 'は、メールアドレスの存在チェックができる' do
    one = FactoryBot.build(:admin, email: nil)
    one.valid?
    expect(one.errors.messages[:email]).to include('を入力してください')
  end

  it 'は、メールアドレスの形式チェックができる' do
    one = FactoryBot.build(:admin, email: 'hoge')
    one.valid?
    expect(one.errors.messages[:email]).to eq ['は不正な値です']
  end

  it 'は、パスワードの存在チェックができる' do
    one = FactoryBot.build(:admin, password: nil)
    one.valid?
    expect(one.errors.messages[:password]).to eq ['を入力してください']
  end
end
