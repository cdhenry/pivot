Rails.application.routes.draw do
  scope '/api' do
    get :careers, to: 'careers#index'
    get 'careers/:id', to: 'careers#search'
    get :job_zones, to: 'job_zones#index'
    resources :comparisons
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
