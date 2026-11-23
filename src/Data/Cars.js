import audiimg from "../assets/audi.jpg"
import bmwimg from "../assets/bmw.jpg"
import classimg from "../assets/class.jpg"
import fordimg from "../assets/ford.jpg"
import mustangimg from "../assets/mustang.jpg"
import mustang2img from "../assets/mustang2.jpg"
import rav4img from "../assets/rav4.jpg"





const cars = [
  {
    id: 1,
    make: 'BMW',
    model: '3 Series',
    year: 2021,
    price: 26900,
    mileage: 25000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    type: 'Sedan',
    location: 'New York, NY',
    image: bmwimg
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'RAV4',
    year: 2022,
    price: 32000,
    mileage: 18000,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    type: 'SUV',
    location: 'Los Angeles, CA',
    image: bmwimg
  },
  {
    id: 3,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2020,
    price: 29500,
    mileage: 30000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    type: 'Sedan',
    location: 'New York, NY',
    image: classimg,

  },
  {
    id: 4,
    make: 'Honda',
    model: 'Accord',
    year: 2023,
    price: 28000,
    mileage: 12000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    type: 'Sedan',
    location: 'Chicago, IL',
    image: audiimg
  },
  {
    id: 5,
    make: 'Audi',
    model: 'Q5',
    year: 2021,
    price: 38000,
    mileage: 22000,
    transmission: 'Automatic',
    fuel: 'Petrol',
    type: 'SUV',
    location: 'Los Angeles, CA',
    image: audiimg,
  },
  {
    id: 6,
    make: 'Ford',
    model: 'Mustang',
    year: 2022,
    price: 45000,
    mileage: 15000,
    transmission: 'Manual',
    fuel: 'Petrol',
    type: 'Coupe',
    location: 'Chicago, IL',
    image: mustangimg
  }
];
export default cars;
