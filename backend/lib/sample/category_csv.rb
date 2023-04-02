require "csv"

module Sample
  class CategoryCsv
    def self.load
      ActiveRecord::Base.transaction do
        result = CSV.read('./lib/sample/csv/category.csv', headers: true).map(&:to_hash)

        result.each do |one|
          Category.create!(name: one['カテゴリ名'])
        end
      end
    end
  end
end
