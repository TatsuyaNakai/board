# Be sure to restart your server when you modify this file.

# Configure parameters to be filtered from the log file. Use this to limit dissemination of
# sensitive information. See the ActiveSupport::ParameterFilter documentation for supported
# notations and behaviors.
# Rails.application.config.filter_parameters += [
#   :passw, :secret, :token, :_key, :crypt, :salt, :certificate, :otp, :ssn
# ]
graphql_filter = lambda do |k, v|
  return unless k.to_sym == :query
  reg = /(password[a-zA-Z_]*:) \\"([^\\"]*)\\"/
  v.replace(v.gsub(reg) { "#{Regexp.last_match(1)} \"[FILTERED]\" " })
end

Rails.application.config.filter_parameters += [:password, graphql_filter]
