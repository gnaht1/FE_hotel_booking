// Import all your SVG files
import Logo from './favicon.svg';
import SearchIcon from './search.svg';
import MenuIcon from './menuIcon.svg';
import CloseIcon from './closeIcon.svg';
import CalendarIcon from './calendarIcon.svg';
import starIconFilled from './starIconFilled.svg';
import locationIcon from './locationIcon.svg';
import arrowIcon from './arrowIcon.svg';
import starIconOutlined from './starIconOutlined.svg';

// Export them for easy import elsewhere
export default {
  Logo,
  SearchIcon,
  MenuIcon,
  CloseIcon,
  CalendarIcon,
  starIconFilled,
  locationIcon,
  arrowIcon,
  starIconOutlined,
};
// City lists data for destination dropdown
export const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "Fort Worth",
  "Columbus",
  "Charlotte",
  "San Francisco",
  "Indianapolis",
  "Seattle",
  "Denver",
  "Boston",
  "El Paso",
  "Detroit",
  "Nashville",
  "Portland",
  "Memphis",
  "Oklahoma City",
  "Las Vegas",
  "Louisville",
  "Baltimore",
  "Milwaukee",
  "Albuquerque",
  "Tucson",
  "Fresno",
  "Mesa",
  "Kansas City",
  "Atlanta",
  "Colorado Springs",
  "Raleigh",
  "Omaha",
  "Miami",
  "Oakland",
  "Minneapolis",
  "Tulsa",
  "Cleveland",
  "Wichita",
  "Arlington",
  "New Orleans",
  "Bakersfield",
  "Tampa",
  "Honolulu"
];

// Exclusive offers dummy data
export const exclusiveOffers = [
  {
    _id: "1",
    title: "Weekend Getaway",
    description: "Perfect for a romantic escape with your loved one",
    priceOff: 25,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    expiryDate: "Dec 31, 2024"
  },
  {
    _id: "2",
    title: "Family Vacation",
    description: "Create lasting memories with the whole family",
    priceOff: 30,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    expiryDate: "Jan 15, 2025"
  },
  {
    _id: "3",
    title: "Business Travel",
    description: "Professional accommodations for your business needs",
    priceOff: 20,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    expiryDate: "Mar 30, 2025"
  }
];

// Testimonials dummy data
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides. Their curated selection of hotels is unmatched."
  },
  {
    id: 2,
    name: "James Wilson",
    address: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5,
    review: "Exceptional service from start to finish. The booking process was seamless, and the hotel recommendations were spot-on. Will definitely use QuickStay for all my future travels."
  },
  {
    id: 3,
    name: "Sarah Chen",
    address: "Tokyo, Japan",
    image: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558125765_679953391788540_7484632322891991755_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGFlzloHquiAUV1weQOArfD8UlNDymEiCXxSU0PKYSIJfycl5LjFRCvAEPF2op1VJ2Mu95YghXBqtZm_oIfmFgH&_nc_ohc=S2ipX99kqw8Q7kNvwGzC0vN&_nc_oc=Adk87hEGWyLo8TjdT8I8ge6OR0oT7u90WpG11oD_4TqKwez770JhvneF02Rff08HAHY&_nc_zt=23&_nc_ht=scontent.fsgn19-1.fna&_nc_gid=RuTvJ5uLzYI5rLKKb3ps6Q&oh=00_AfZHO-qT-nc20w1LnZiEkj5MWAVQO9sAWbfAN-CjjmWVPg&oe=68E06B6C",
    rating: 4,
    review: "Amazing platform with incredible attention to detail. The exclusive offers and personalized recommendations made our family vacation unforgettable. Highly recommended!"
  }

];