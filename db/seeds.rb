# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Makes Sure Database is Empty
JobZone.delete_all
Career.delete_all

# Declaration of index variables
job_prep_index = 1
job_prep_totals = [39, 287, 251, 230, 160]

# Fetches Career Data from ONET API
conn = Faraday.new 'https://services.onetcenter.org'
conn.basic_auth(ENV['ONET_USERNAME'], ENV['ONET_PASSWORD'])

job_zone_resp = conn.get('ws/mnm/job_preparation/', {}, {'Accept' => 'application/json'})
job_zone_hash = JSON.parse(job_zone_resp.body)

job_zone_hash["job_zone"].each do |job_zone|
  JobZone.create(
    id: job_zone["value"],
    title: job_zone["title"],
    experience: job_zone["experience"],
    education: job_zone["education"],
    job_training: job_zone["job_training"]
  )
end

while job_prep_index < 6 do
  # Fetches Career Data from ONET API sorted by job preparation requirements
  career_resp = conn.get("/ws/mnm/job_preparation/#{job_prep_index}?sort=name&start=1&end=#{job_prep_totals[job_prep_index - 1]}", {}, {'Accept' => 'application/json'})
  career_hash = JSON.parse(career_resp.body)
  job_zone = JobZone.find(job_prep_index)

  # Goes through each career and creates a Career object to contain its info
  career_hash["career"].each do |career|
    job_zone.careers.build(
      title: career["title"],
      href: career["href"],
      bright_outlook: career["tags"]["bright_outlook"],
      green:  career["tags"]["green"],
      apprenticeship:  career["tags"]["apprenticeship"]
    )
    job_zone.save
  end

  job_prep_index += 1
end
