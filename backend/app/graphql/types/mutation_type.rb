module Types
  class MutationType < Types::BaseObject
    # 管理者
    field :create_admin, mutation: Mutations::CreateAdmin

    # カテゴリ
    field :create_category, mutation: Mutations::CreateCategory
    field :update_category, mutation: Mutations::UpdateCategory
    field :delete_category, mutation: Mutations::DeleteCategory
    
    # ポスト
    field :create_post, mutation: Mutations::CreatePost
    field :update_post, mutation: Mutations::UpdatePost
  end
end
