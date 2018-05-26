class Career < ActiveRecord::Base
  belongs_to :job_zone
  has_many :predictors

  def self.search(career_url)
    conn = Faraday.new
    conn.basic_auth(ENV['ONET_USERNAME'], ENV['ONET_PASSWORD'])
    resp = conn.get(career_url, {}, {'Accept' => 'application/json'})
    body_hash = JSON.parse(resp.body)
    convert_career_hash(body_hash)
  end

  def self.convert_career_hash(body_hash)
    aka = ""
    tasks = ""
    body_hash["also_called"]["title"].each{|title| aka = aka + ", " + title}
    body_hash["on_the_job"]["task"].each{|task| tasks = tasks + " " + task}
    result = body_hash.except("resources", "tags", "code", "also_called", "on_the_job")
    result["aka"] = aka.slice(2..-1)
    result["on_the_job"] = tasks.slice(1..-1)
    result
  end
end
