ActiveRecord::Base.transaction do
  Admin.create!(email: 'sample_admin@gmail.com', password: 'password')

  Sample::CategoryCsv.load
  Sample::PostCsv.load
end
