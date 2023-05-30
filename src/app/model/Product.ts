export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 780,
    description: 'A great phone with one of the best cameras'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: ''
  },
  {
    id: 4,
    name: 'Sansung A20',
    price: 560,
    description: 'Telefono con androide 10 muy econocmico'
  },
  {
    id: 5,
    name: 'Huawei',
    price: 790,
    description: 'Telefono chino usando sistema operativo propio'
  }
];
