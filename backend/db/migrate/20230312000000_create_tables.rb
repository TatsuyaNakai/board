class CreateTables < ActiveRecord::Migration[4.2]
  def up
    # 管理者
    create_table :admins do |t|
      t.string      :last_name,           null: false
      t.string      :first_name,          null: false
      t.text        :note
      t.timestamps
    end

    # カテゴリ
    create_table :categories do |t|
      t.string      :name,            null: false
      t.string      :status,          null: false, default: 'draft'
      t.text        :note
      t.timestamps
    end

    # 投稿
    create_table :posts do |t|
      t.integer    :category_id,     null: false
      t.string     :session_code,    null: false
      t.string     :status,          null: false, default: 'draft'
      t.string     :author_name
      t.string     :email
      t.string     :title
      t.string     :body,            null: false
      t.string     :note
      t.timestamps
    end
  end
end
