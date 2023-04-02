RSpec.describe 'QueryType#admin' do
  before do
    query = <<-QUERY
      query admin($id: ID!) {
        admin(id: $id) {
          id
          email
          accessToken
          createdAt
          updatedAt
        }
      }
    QUERY
    result = MyappSchema.execute(query, variables: { id: 1 })
    @admin = Admin.first
    @admin_result = result['data']['admin']
  end

  it 'は、項目名を取得できること' do
    @admin_result.each do |key, value|
      value = value.to_i if key == 'id'
      value = value.to_datetime if %w[createdAt updatedAt].include?(key)
      expect(value).to eq @admin[key.underscore]
    end
  end
end
