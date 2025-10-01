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

// Import PNG icons
import wifiIcon from './wifi.png';
import poolIcon from './pool.png';
import breakfastIcon from './breakfast.png';
import parkingIcon from './parking.png';

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

// ================= Facility Icons ==================
export const facilityIcons = {
  "Free WiFi": wifiIcon,
  "Pool": poolIcon,
  "Breakfast": breakfastIcon,
  "Parking": parkingIcon,

  // Các tiện ích thêm dùng link icon online
  "Sea View": "https://img.icons8.com/ios-filled/50/000000/sea-waves.png",
  "Spa": "https://img.icons8.com/ios-filled/50/000000/spa-flower.png",
  "Hiking Trails": "https://img.icons8.com/ios-filled/50/000000/trekking.png",
  "Pet Friendly": "https://img.icons8.com/ios-filled/50/000000/dog.png",
  "Gym": "https://img.icons8.com/ios-filled/50/000000/gym.png",
  "Rooftop Bar": "https://img.icons8.com/ios-filled/50/000000/cocktail.png",
  "Airport Shuttle": "https://img.icons8.com/ios-filled/50/000000/airport.png"
};

// ================= Cities ==================
export const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
  "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville",
  "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis",
  "Seattle", "Denver", "Boston", "El Paso", "Detroit", "Nashville", "Portland",
  "Memphis", "Oklahoma City", "Las Vegas", "Louisville", "Baltimore",
  "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Mesa", "Kansas City",
  "Atlanta", "Colorado Springs", "Raleigh", "Omaha", "Miami", "Oakland",
  "Minneapolis", "Tulsa", "Cleveland", "Wichita", "Arlington", "New Orleans",
  "Bakersfield", "Tampa", "Honolulu"
];

// ================= Exclusive offers =================
export const exclusiveOffers = [
  {
    _id: "1",
    title: "Weekend Getaway",
    description: "Perfect for a romantic escape with your loved one",
    priceOff: 25,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?...",
    expiryDate: "Dec 31, 2024"
  },
  {
    _id: "2",
    title: "Family Vacation",
    description: "Create lasting memories with the whole family",
    priceOff: 30,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?...",
    expiryDate: "Jan 15, 2025"
  },
  {
    _id: "3",
    title: "Business Travel",
    description: "Professional accommodations for your business needs",
    priceOff: 20,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?...",
    expiryDate: "Mar 30, 2025"
  }
];

// ================= Testimonials =================
export const testimonials = [
  {
    id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
    review: "I've used many booking platforms before, but none compare ..."
  },
  {
    id: 2,
    name: "James Wilson",
    address: "London, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    rating: 5,
    review: "Exceptional service from start to finish..."
  },
  {
    id: 3,
    name: "Sarah Chen",
    address: "Tokyo, Japan",
    image: "https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/558125765_...",
    rating: 4,
    review: "Amazing platform with incredible attention to detail..."
  }
];

// ================= Rooms dummy data =================
export const roomsDummyData = [
  {
    _id: "1",
    hotel: { name: "Grand Palace Hotel", address: "123 Main St, New York, USA", city: "New York" },
    images: ["https://lh3.googleusercontent.com/proxy/WR_6J0_1BhUfSZCk..."],
    rating: 4.5,
    pricePerNight: 120,
    amenities: ["Free WiFi", "Pool", "Breakfast", "Parking"]
  },
  {
    _id: "2",
    hotel: { name: "Ocean View Resort", address: "456 Ocean Dr, Miami, USA", city: "Miami" },
    images: ["https://cf.bstatic.com/xdata/images/hotel/max1024x768/623148951.jpg?..."],
    rating: 4.7,
    pricePerNight: 200,
    amenities: ["Free WiFi", "Sea View", "Spa", "Breakfast"]
  },
  {
    _id: "3",
    hotel: { name: "Mountain Retreat", address: "789 Hill Rd, Denver, USA", city: "Denver" },
    images: ["https://cdn3.ivivu.com/2014/01/SUPER-DELUXE2.jpg"],
    rating: 4.2,
    pricePerNight: 90,
    amenities: ["Free WiFi", "Hiking Trails", "Parking", "Pet Friendly"]
  },
  {
    _id: "4",
    hotel: { name: "City Lights Inn", address: "101 Sunset Blvd, Los Angeles, USA", city: "Los Angeles" },
    images: ["https://bizweb.dktcdn.net/100/349/716/files/7-diem-chi-ra..."],
    rating: 4.8,
    pricePerNight: 150,
    amenities: ["Free WiFi", "Gym", "Rooftop Bar", "Breakfast"]
  },
  {
    _id: "5",
    hotel: { name: "Sunset Boulevard Hotel", address: "202 Golden Gate Ave, San Francisco, USA", city: "San Francisco" },
    images: ["https://asiky.com/files/images/Article/tin-tuc/chup-anh-khach-san.jpg"],
    rating: 4.3,
    pricePerNight: 180,
    amenities: ["Free WiFi", "Pool", "Breakfast", "Airport Shuttle"]
  }
];
