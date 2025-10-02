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
    hotel: {
      name: "Grand Palace Hotel",
      address: "1235 Broadway, Times Square, New York, NY 10036, USA",
      city: "New York",
      zipCode: "10036",
      state: "NY",
      country: "USA",
      phone: "+1 (212) 555-0123",
      email: "info@grandpalacehotel.com"
    },
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",

    ],
    rating: 4.5,
    pricePerNight: 120,
    roomType: "Deluxe Suite",
    amenities: ["Free WiFi", "Pool", "Breakfast", "Parking"]
  },
  {
    _id: "2",
    hotel: {
      name: "Ocean View Resort",
      address: "456 Ocean Drive, South Beach, Miami, FL 33139, USA",
      city: "Miami",
      zipCode: "33139",
      state: "FL",
      country: "USA",
      phone: "+1 (305) 555-0456",
      email: "reservations@oceanviewresort.com"
    },
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",

    ],
    rating: 4.7,
    pricePerNight: 200,
    roomType: "Ocean View Villa",
    amenities: ["Free WiFi", "Sea View", "Spa", "Breakfast"]
  },
  {
    _id: "3130299932",
    hotel: {
      name: "Mountain Retreat",
      address: "789 Rocky Mountain Blvd, Aspen, Denver, CO 80202, USA",
      city: "Denver",
      zipCode: "80202",
      state: "CO",
      country: "USA",
      phone: "+1 (303) 555-0789",
      email: "stay@mountainretreat.com"
    },
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",

    ],
    rating: 4.2,
    pricePerNight: 90,
    roomType: "Mountain View Cabin",
    amenities: ["Free WiFi", "Hiking Trails", "Parking", "Pet Friendly"]
  },
  {
    _id: "4",
    hotel: {
      name: "City Lights Inn",
      address: "101 Sunset Boulevard, Hollywood, Los Angeles, CA 90028, USA",
      city: "Los Angeles",
      zipCode: "90028",
      state: "CA",
      country: "USA",
      phone: "+1 (323) 555-0321",
      email: "hello@citylightsinn.com"
    },
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",

    ],
    rating: 4.8,
    pricePerNight: 150,
    roomType: "Executive Room",
    amenities: ["Free WiFi", "Gym", "Rooftop Bar", "Breakfast"]
  },
  {
    _id: "5",
    hotel: {
      name: "Sunset Boulevard Hotel",
      address: "202 Golden Gate Avenue, Union Square, San Francisco, CA 94102, USA",
      city: "San Francisco",
      zipCode: "94102",
      state: "CA",
      country: "USA",
      phone: "+1 (415) 555-0654",
      email: "contact@sunsetboulevardhotel.com"
    },
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop",

    ],
    rating: 4.3,
    pricePerNight: 180,
    roomType: "Premium Suite",
    amenities: ["Free WiFi", "Pool", "Breakfast", "Airport Shuttle"]
  }
];
