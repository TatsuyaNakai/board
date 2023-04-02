# == Schema Information
#
# Table name: admins
#
#  id                     :integer          not null, primary key
#  access_token           :string(255)      not null
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#
# Indexes
#
#  index_admins_on_email                 (email) UNIQUE
#  index_admins_on_reset_password_token  (reset_password_token) UNIQUE
#
FactoryBot.define do
  factory :admin do
    email                       { 'test@gmail.com' }
    password                    { 'password' }
  end
end
