require 'rails_helper'

RSpec.describe 'QueryType#category_posts' do
  before do
    query = <<-QUERY
      query categoryPosts($categoryId: ID!) {
        categoryPosts(categoryId: $categoryId) {
          id
          categoryId
          status
          token
          authorName
          email
          title
          body
          createdAt
          updatedAt
        }
      }
    QUERY
    result = MyappSchema.execute(query, variables: { categoryId: 1 })
    @post = Post.order(:created_at).first
    @post_result = result['data']['categoryPosts'].first
  end

  it 'は、項目名を取得できること' do
    @post_result.each do |key, value|
      value = value.to_i if %w[id categoryId].include?(key)
      value = value.to_datetime if %w[createdAt updatedAt].include?(key)
      expect(value).to eq @post[key.underscore]
    end
  end
end
