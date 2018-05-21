class Career < ActiveRecord::Base
  def self.search(career_title)
    resp = Faraday.get `https://services.onetcenter.org/ws/mnm/search?keyword=#{career_title}`
    body_hash = JSON.parse(resp.body)
  end

  def self.all
    resp = Faraday.get 'https://services.onetcenter.org/ws/mnm/careers/'
    body_hash = JSON.parse(resp.body)
  end
end
