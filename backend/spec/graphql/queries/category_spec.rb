require 'rails_helper'

RSpec.describe 'QueryType#categories' do
  before do
    query = <<-QUERY
      query categories {
        categories {
          id
          name
          createdAt
          updatedAt
        }
      }
    QUERY
    @category = FactoryBot.create(:category)
    result = MyappSchema.execute(query)
    @category_result = result['data']['categories'].last
  end

  it 'は、項目名を取得できること' do
    @category_result.each do |key, value|
      value = value.to_i if key == 'id'
      value = value.to_datetime if %w[createdAt updatedAt].include?(key)
      expect(value).to eq @category[key.underscore]
    end
  end
end
