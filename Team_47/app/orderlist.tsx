"use client";

import React from "react";
import OrderCard from "./3dCarddemo";

interface Order {
  customerName: string;
  orderId: string;
  roomNumber: string;
  totalPayment: string;
  status: string;
  items: { name: string; quantity: number }[];
  orderNotes?: string;
  id: number;
}

const orders: Order[] = [
  {
    id: 1,
    customerName: "John Doe",
    orderId: "ORD-101",
    roomNumber: "Household",
    totalPayment: "$49.99",
    status: "Available",
    items: [
      { name: "Tide Detergent", quantity: 2 },
      { name: "Ariel Liquid Detergent", quantity: 1 },
    ],
    orderNotes: "For best stain removal and freshness.",
  },
  {
    id: 2,
    customerName: "Sarah Lee",
    orderId: "ORD-102",
    roomNumber: "Personal Care",
    totalPayment: "$39.50",
    status: "In Progress",
    items: [
      { name: "Dove Body Wash", quantity: 1 },
      { name: "Nivea Moisturizer", quantity: 1 },
    ],
    orderNotes: "Gentle skincare for daily use.",
  },
  {
    id: 3,
    customerName: "Mike Johnson",
    orderId: "ORD-103",
    roomNumber: "Oral Care",
    totalPayment: "$29.00",
    status: "Available",
    items: [
      { name: "Colgate Total Toothpaste", quantity: 2 },
      { name: "Oral-B Toothbrush", quantity: 1 },
    ],
    orderNotes: "Complete oral protection.",
  },
  {
    id: 4,
    customerName: "Emily Carter",
    orderId: "ORD-104",
    roomNumber: "Beauty",
    totalPayment: "$99.99",
    status: "Completed",
    items: [
      { name: "L'Oréal Paris Foundation", quantity: 1 },
      { name: "Maybelline Mascara", quantity: 1 },
    ],
    orderNotes: "Long-lasting makeup essentials.",
  },
  {
    id: 5,
    customerName: "David Brown",
    orderId: "ORD-105",
    roomNumber: "Hair Care",
    totalPayment: "$59.99",
    status: "Available",
    items: [
      { name: "Pantene Shampoo", quantity: 1 },
      { name: "Head & Shoulders Conditioner", quantity: 1 },
    ],
    orderNotes: "For strong and dandruff-free hair.",
  },
  {
    id: 6,
    customerName: "Sophia Martinez",
    orderId: "ORD-106",
    roomNumber: "Baby Care",
    totalPayment: "$74.99",
    status: "Ready",
    items: [
      { name: "Pampers Diapers", quantity: 2 },
      { name: "Johnson's Baby Lotion", quantity: 1 },
    ],
    orderNotes: "Gentle and safe for newborns.",
  },
  {
    id: 7,
    customerName: "Chris Evans",
    orderId: "ORD-107",
    roomNumber: "Groceries",
    totalPayment: "$42.00",
    status: "Completed",
    items: [
      { name: "Nestlé Milk Powder", quantity: 1 },
      { name: "Kellogg's Corn Flakes", quantity: 1 },
    ],
    orderNotes: "Healthy breakfast essentials.",
  },
  {
    id: 8,
    customerName: "Lisa Adams",
    orderId: "ORD-108",
    roomNumber: "Health",
    totalPayment: "$88.00",
    status: "In Progress",
    items: [
      { name: "Ensure Nutrition Shake", quantity: 1 },
      { name: "Centrum Multivitamins", quantity: 1 },
    ],
    orderNotes: "Daily essential supplements.",
  },
  {
    id: 9,
    customerName: "Robert Wilson",
    orderId: "ORD-109",
    roomNumber: "Cleaning",
    totalPayment: "$33.75",
    status: "Available",
    items: [
      { name: "Harpic Toilet Cleaner", quantity: 1 },
      { name: "Domex Floor Disinfectant", quantity: 1 },
    ],
    orderNotes: "For deep and effective cleaning.",
  },
  {
    id: 10,
    customerName: "Olivia Miller",
    orderId: "ORD-110",
    roomNumber: "Cooking Essentials",
    totalPayment: "$120.00",
    status: "New",
    items: [
      { name: "Fortune Sunflower Oil", quantity: 1 },
      { name: "Aashirvaad Whole Wheat Flour", quantity: 2 },
    ],
    orderNotes: "Quality ingredients for healthy meals.",
  },
  {
    id: 11,
    customerName: "Kevin Anderson",
    orderId: "ORD-111",
    roomNumber: "Snacks & Beverages",
    totalPayment: "$68.50",
    status: "Available",
    items: [
      { name: "Lay’s Classic Chips", quantity: 2 },
      { name: "Coca-Cola Can", quantity: 1 },
    ],
    orderNotes: "Perfect for movie nights.",
  },
  {
    id: 12,
    customerName: "Rachel Green",
    orderId: "ORD-112",
    roomNumber: "Pet Supplies",
    totalPayment: "$45.00",
    status: "Available",
    items: [
      { name: "Pedigree Dog Food", quantity: 1 },
      { name: "Whiskas Cat Treats", quantity: 1 },
    ],
    orderNotes: "For happy and healthy pets.",
  },
];

interface OrderListProps {
  selectedStatus: string | null;
  searchTerm: string;
}

const OrderList: React.FC<OrderListProps> = ({ selectedStatus, searchTerm }) => {
  const filteredOrders = orders
    .filter((order) => !selectedStatus || order.status === selectedStatus)
    .filter((order) =>
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[11cm] gap-y-3 p-4">
      {filteredOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderList;
