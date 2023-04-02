ActiveRecord::Base.transaction do
  Admin.create!(email: '15g079nt@gmail.com', password: 'password')

  Sample::CategoryCsv.load
  Sample::PostCsv.load
end
