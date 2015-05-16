Rails.application.routes.draw do
  resources :lists, only: [:index] do
    resources :tasks, only: [:index]
  end

  root to: 'roots#index'
end
