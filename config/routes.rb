Rails.application.routes.draw do
  scope '/api' do
    get :careers, to: 'careers#index'
    get :career, to: 'careers#search'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
