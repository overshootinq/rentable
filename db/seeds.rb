# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

House.create(property_type: 'Crack House', address: '123 main Street, Redding, CA', beds: 0, baths: 6, price: 100, contact_info: 'notadrugdealer@drugs.com', img_url: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/St_Bernard_Crack_House.jpg')

House.create(property_type: 'nice House', address: '522 main 3, purple, CA', beds: 5, baths: 2, price: 10000, contact_info: 'yup@drugs.com', img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg')

House.create(property_type: 'ok House', address: '928782 bread st, pencil, PA', beds: 3, baths: 3, price: 750, contact_info: 'naw_dog@drugs.com', img_url: 'https://ap.rdcpix.com/57d0449d9b70ddf22c501a8576d4a9e4l-m1714206108od-w480_h360.jpg')

House.create(property_type: 'Big ass mansion', address: '100 first ave, new york, CA', beds: 14, baths: 16, price: 420690, contact_info: 'hell_yeah_brother@drugs.com', img_url: 'https://www.jamesedition.com/stories/wp-content/uploads/2020/12/1_Israel.jpg')

House.create(property_type: 'Slum Lord Manor', address: '12215 SW Oak Leaf Dr, Apt C420, Silver Spring, MD 20901
', beds: 1, baths: 0, price: 47, contact_info: 'Not_even_once@TheEnclave.com', img_url: 'https://i.pinimg.com/originals/58/b3/40/58b340936b2c1ed07bed66c260b00534.png')


puts "Done seeding!"
# User.create(username: 'testy', password_stuff: 'purple', user_id: 1)