class Course < ApplicationRecord
  has_many :reviews
  
    # http://www.chrisrolle.com/en/blog/the-perfect-slug-url
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
     reviews.average(:score).round(2).to_f
  end
end
