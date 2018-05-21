Rails.application.routes.draw do
  scope '/api' do
    get :career, to: 'careers#index'
    get :allcareers, to: 'careers#all_careers'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
