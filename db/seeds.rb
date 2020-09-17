# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


courses = Course.create ([

{ 
  name: "General Assembly",
  image_url: "image1"
}, 
{ 
  name: "Devmountain",
  image_url: "image2"
},
{ 
  name: "Flatiron School",
  image_url: "image3" 
}, 
{ 
  name: "App Academy",
  image_url: "image4" 
}, 
{ 
  name: "Coding Dojo",
  image_url: "image5" 
}, 
{ 
  name: "Hack Reactor",
  image_url: "image6" 
},
{ 
  name: "Coding Temple",
  image_url: "image7" 
}, 
{ 
  name: "Codesmith",
  image_url: "image8" 
}
])

reviews = Review.create([
  {
    title: 'The best bootcamp ever',
    description: 'We learned soo much and i got a job',
    score: 5,
    course: courses.first
  },
  {
    title: 'Worst bootcamp ever',
    description: 'We learned nothing and i didnt get a job',
    score: 1,
    course: courses.first
  }
])