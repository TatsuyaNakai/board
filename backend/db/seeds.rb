ActiveRecord::Base.transaction do
  10.times do |category_cnt|
    c = Category.create!(name: "サンプル_#{category_cnt}")
    10.times do |post_cnt|
      c.posts.create!({
        author_name: "作者#{post_cnt}",
        status: :public,
        token: 'sample_token',
        body: "本文#{post_cnt}",
        email: '',
        title: "タイトルが入ります#{post_cnt}"
      })
    end
  end
  Admin.create!(email: '15g079nt@gmail.com', password: 'password')
end
