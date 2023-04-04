require 'rails_helper'

RSpec.describe 'MutationType#update_post' do
  before do
    @query = <<-MUTATION
      mutation updatePost($id: ID!, $status: PostStatus!){
        updatePost(input: { id: $id, status: $status }) {
          result
        }
      }
    MUTATION
  end

  it 'は、ステータスを更新することができること' do
    post = FactoryBot.create(:post)
    MyappSchema.execute(@query, variables: { id: post.id, status: 'private' })
    expect(post.reload.status).to eq 'private'
  end
end
