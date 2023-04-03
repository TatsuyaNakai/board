require 'rails_helper'

RSpec.describe 'MutationType#update_category' do
  before do
    @query = <<-MUTATION
      mutation updateCategory($id: ID!, $name: String!) {
        updateCategory(input: { id: $id, name: $name }) {
          errors {
            attribute
            messages
          }
          fullMessages
          result
        }
      }
    MUTATION
  end

  it 'は、管理者において更新ができること' do
    admin = FactoryBot.create(:admin)
    category = FactoryBot.create(:category)
    MyappSchema.execute(@query, context: { current_admin: admin }, variables: { id: category.id, name: '更新' })
    expect(category.reload.name).to eq '更新'
  end

  it 'は、ゲストにおいて更新ができないこと' do
    category = FactoryBot.create(:category)
    category_name = category.name
    MyappSchema.execute(@query, variables: { id: category.id, name: '更新' })
    expect(category.reload.name).to eq category_name
  end
end
