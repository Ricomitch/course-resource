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
  image_url: "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/3423/s200/general-assembly-reviews-logo.jpg"
}, 
{ 
  name: "Devmountain",
  image_url: "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/820/s200/dev-mountain-logo.png"
},
{ 
  name: "Flatiron School",
  image_url: "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/999/s200/flatironschool.png" 
}, 
{ 
  name: "App Academy",
  image_url: "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/2005/s200/logo-emblem-red-1000-1-.jpg" 
}, 
{ 
  name: "Coding Dojo",
  image_url: "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/2470/s200/cd-logo-blue-600x600.png" 
}, 
{ 
  name: "Hack Reactor",
  image_url: "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/2686/s200/logo-graybg-02.png" 
},
{ 
  name: "Le Wagon",
  image_url: "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/4791/s200/logo-big.png" 
}, 
{ 
  name: "Codesmith",
  image_url: "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/4887/s200/white-background.png" 
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