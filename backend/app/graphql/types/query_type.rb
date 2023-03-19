module Types
  class QueryType < Types::BaseObject
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # カテゴリ一覧
    field :categories, [Types::CategoryType], null: true
    def categories
      Category.all.order(:created_at)
    end

    # カテゴリごとの投稿一覧
    field :posts, [Types::PostType], null: true do
      argument :category_id, ID, required: true
    end
    def posts(category_id:)
      Post.where(category_id: category_id).order(:created_at)
    end

    field :admin, Types::AdminType, null: true do
      argument :id, ID, required: true
    end
    def admin(id:)
      Admin.find(id)
    end

    # 管理者ログイン
    field :login_admin, resolver: Queries::LoginAdmin

    # 管理者認証
    field :current_admin, resolver: Queries::CurrentAdmin
  end
end
