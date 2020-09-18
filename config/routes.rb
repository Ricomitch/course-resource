Rails.application.routes.draw do
  root 'pages#index'

  # namespace :api do
    # namespace :controllers do
  
  resources :users, only: :create
  resources :courses, param: :slug
  resources :reviews, only: [:create, :destroy]

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'


  get '*path', to: 'pages#index', via: :all   
  end
   

  #routes undefined request back to our index path
  # get '*path', to: 'pages#index', via: :all

