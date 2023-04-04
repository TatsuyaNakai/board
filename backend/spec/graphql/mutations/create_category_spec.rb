require 'rails_helper'

RSpec.describe 'MutationType#create_category' do
  before do
    @query = <<-MUTATION
      mutation createCategory($name: String!) {
        createCategory(input: { name: $name }) {
          result
        }
      }
    MUTATION
  end

  it 'は、管理者において新規作成ができること' do
    admin = FactoryBot.create(:admin)
    expect do
      MyappSchema.execute(@query, context: { current_admin: admin }, variables: { name: 'テストカテゴリ' })
    end.to change(Category, :count).by(1)
  end

  it 'は、ゲストにおいて新規作成ができないこと' do
    expect do
      MyappSchema.execute(@query, variables: { name: 'テストカテゴリ' })
    end.to_not change(Category, :count)
  end
end
