require 'rails_helper'

RSpec.describe 'QueryType#login_admin' do
  before do
    @query = <<-QUERY
      query loginAdmin($email: String, $password: String) {
        loginAdmin(email: $email, password: $password) {
          admin {
            id
            accessToken
          }
          result
          errors {
            attribute
            messages
          }
          fullMessages
        }
      }
    QUERY
  end

  it 'は、管理者情報を取得できること' do
    admin = FactoryBot.create(:admin)
    variables = { email: admin.email, password: admin.password }
    result = MyappSchema.execute(@query, variables: variables)
    query_result = result['data']['loginAdmin']['result']
    admin_result = result['data']['loginAdmin']['admin']

    expect(query_result).to eq true
    admin_result.each do |key, value|
      value = value.to_i if key == 'id'
      expect(value).to eq admin[key.underscore]
    end
  end

  it 'は、管理者情報を取得できないこと' do
    variables = { email: '', password: '' }
    result = MyappSchema.execute(@query, variables: variables)
    query_result = result['data']['loginAdmin']['result']
    errors_result = result['data']['loginAdmin']['fullMessages'].first

    expect(query_result).to eq false
    expect(errors_result).to eq 'パスワードが間違っています、または、登録されていないEメールです。'
  end
end
