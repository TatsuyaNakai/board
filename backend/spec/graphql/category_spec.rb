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
    result = MyappSchema.execute(query)
    @category = Category.order(:created_at).first
    @category_result = result['data']['categories'].first
  end

  it 'は、項目名を取得できること' do
    @category_result.each do |key, value|
      value = value.to_i if key == 'id'
      value = value.to_datetime if %w[createdAt updatedAt].include?(key)
      expect(value).to eq @category[key.underscore]
    end
  end
end
