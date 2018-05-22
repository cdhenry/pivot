class Career < ActiveRecord::Base
  def self.search(career_title)
    conn = Faraday.new 'https://services.onetcenter.org'
    conn.basic_auth(ENV['ONET_USERNAME'], ENV['ONET_PASSWORD'])
    resp = conn.get(`/ws/mnm/search?keyword=#{career_title}`, {}, {'Accept' => 'application/json'})
    body_hash = JSON.parse(resp.body)
  end

  def self.allData
    conn = Faraday.new 'https://services.onetcenter.org'
    conn.basic_auth(ENV['ONET_USERNAME'], ENV['ONET_PASSWORD'])
    resp = conn.get('/ws/mnm/careers', {}, {'Accept' => 'application/json'})
    body_hash = JSON.parse(resp.body)
  end
end
