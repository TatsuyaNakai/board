require 'rails_helper'

RSpec.describe 'MutationType#delete_category' do
  before do
    @query = <<-MUTATION
      mutation deleteCategory($id: ID!) {
        deleteCategory(input: { id: $id }) {
          result
        }
      }
    MUTATION
  end

  it 'は、管理者において削除ができること' do
    admin = FactoryBot.create(:admin)
    category_id = FactoryBot.create(:category).id
    expect do
      MyappSchema.execute(@query, context: { current_admin: admin }, variables: { id: category_id })
    end.to change(Category, :count).by(-1)
  end

  it 'は、ゲストにおいて削除ができないこと' do
    category_id = FactoryBot.create(:category).id
    expect do
      MyappSchema.execute(@query, variables: { id: category_id })
    end.to_not change(Category, :count)
  end
end
