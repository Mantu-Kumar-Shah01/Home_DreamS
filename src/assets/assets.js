import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    project_img_5,
    project_img_6,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,450,000",
      location: "Beverly Hills, CA",
      beds: "4 Beds",
      baths: "3.5 Baths",
      sqft: "3,800 sq ft",
      tag: "Luxury Villa",
      image: project_img_1
    },
    {
      title: "Vista Verde Residence",
      price: "$1,850,000",
      location: "San Francisco, CA",
      beds: "3 Beds",
      baths: "3 Baths",
      sqft: "2,900 sq ft",
      tag: "Modern Modernist",
      image: project_img_2
    },
    {
      title: "Serenity Lakeside Suites",
      price: "$3,100,000",
      location: "Chicago, IL",
      beds: "5 Beds",
      baths: "4.5 Baths",
      sqft: "4,500 sq ft",
      tag: "Waterfront",
      image: project_img_3
    },
    {
      title: "Grand Central Lofts",
      price: "$1,420,000",
      location: "Downtown Los Angeles, CA",
      beds: "2 Beds",
      baths: "2 Baths",
      sqft: "1,950 sq ft",
      tag: "Penthouse",
      image: project_img_4
    },
    {
      title: "Azure Coastline Estate",
      price: "$4,200,000",
      location: "Malibu, CA",
      beds: "6 Beds",
      baths: "6 Baths",
      sqft: "6,200 sq ft",
      tag: "Oceanfront",
      image: project_img_5
    },
    {
      title: "The Highland Manor",
      price: "$2,890,000",
      location: "Aspen, CO",
      beds: "4 Beds",
      baths: "4 Baths",
      sqft: "4,100 sq ft",
      tag: "Mountain Retreat",
      image: project_img_6
    },
];

export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Senior Product Director",
        company: "Apex Tech Labs",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "Home Dreams turned what could have been a stressful relocation into an absolute breeze. Their curated listings and seamless closing process helped us secure our dream home in record time."
    },
    {
        name: "Richard Nelson",
        title: "Lead Architectural Designer",
        company: "Studio Form",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 5,
        text: "As an architect, I have very high aesthetic and structural standards. The Home Dreams team surprised me with their deep attention to detail, craftsmanship, and transparency."
    },
    {
        name: "James Washington",
        title: "Venture Partner & Co-Founder",
        company: "Horizon Ventures",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "Outstanding advisory from initial consultation to handing over the keys. Their market insight and dedication to client goals make them our trusted real estate partner."
    }
];