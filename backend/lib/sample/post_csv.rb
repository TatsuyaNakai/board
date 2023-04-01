require "csv"

module Sample
  class PostCsv
    def self.load
      ActiveRecord::Base.transaction do
        result = CSV.read('./lib/sample/csv/post.csv', headers: true).map(&:to_hash)
        categories = Category.pluck(:id, :name).to_h.invert

        result.each do |one|
          Post.create!(
            category_id: categories[one['カテゴリ名']],
            author_name: one['著者名'],
            status: Post.status.options.to_h[one['ステータス']],
            token: one['トークン'],
            email: one['メールアドレス'],
            title: one['タイトル'],
            body: one['本文'],
          )
        end
      end
    end    
  end  
end
