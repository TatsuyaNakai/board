require 'rails_helper'

RSpec.describe 'QueryType#current_admin' do
  before do
    @query = <<-QUERY
      query currentAdmin {
        currentAdmin {
          id
          accessToken
        }
      }
    QUERY
  end

  it 'は、ログイン情報を取得できること' do
    admin = FactoryBot.create(:admin)
    result = MyappSchema.execute(@query, context: { current_admin: admin })
    admin_result = result['data']['currentAdmin']

    admin_result.each do |key, value|
      value = value.to_i if key == 'id'
      expect(value).to eq admin[key.underscore]
    end
  end

  it 'は、ログイン情報を取得できないこと' do
    result = MyappSchema.execute(@query)
    query_result = result['errors'].first

    expect(query_result['message']).to eq 'UNAUTHENTICATED'
  end
end
