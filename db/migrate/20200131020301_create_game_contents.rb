class CreateGameContents < ActiveRecord::Migration[6.0]
  def change
    create_table :game_contents do |t|
      t.string :user
      t.integer :scores
      t.string :puzzle

      t.timestamps
    end
  end
end
