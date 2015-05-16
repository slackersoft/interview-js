class AddTasksTable < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :list_id, null: false
      t.string :title, null: false
      t.boolean :done, default: false

      t.timestamps
    end
  end
end
