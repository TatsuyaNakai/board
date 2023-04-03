require 'rails_helper'

RSpec.describe 'MutationType#create_post' do
  before do
    @query = <<-MUTATION
      mutation createPost($categoryId: ID!, $token: String!, $body: String!) {
        createPost(input: { categoryId: $categoryId, token: $token, body: $body }) {
          result
        }
      }
    MUTATION
    @category = FactoryBot.create(:category)
  end

  it 'は、新規作成ができること' do
    expect do
      MyappSchema.execute(@query, variables: { categoryId: @category.id, token: 'sample_token', body: '本文' })
    end.to change(Post, :count).by(1)
  end

  it 'は、新規作成ができないこと' do
    expect do
      MyappSchema.execute(@query, variables: { categoryId: @category.id, token: 'sample_token', body: '' })
    end.to_not change(Post, :count)
  end
end
