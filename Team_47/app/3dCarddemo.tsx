"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer } from "./components/3dCard";

// Define TypeScript interface for the order object
export interface Order {
  customerName: string;
  orderId: string;
  roomNumber: string;
  totalPayment: string;
  status: string;
  items: { name: string; quantity: number }[];
  orderNotes?: string;
}

// Define TypeScript interface for props
interface OrderCardProps {
  order: Order;
}

// Define a function to get status color classes
const getStatusClasses = (status: string) => {
  switch (status.toLowerCase()) {
    case "ready":
      return "bg-green-100 text-green-700";
    case "cancelled":
      return "bg-red-100 text-red-700";
    case "in progress":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700"; // Default style
  }
};

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[10cm] h-[10cm] rounded-xl p-3 border flex flex-col justify-between">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="https://img.icons8.com/?size=100&id=ZrksPzH5Aadq&format=png&color=000000"
              alt="User Icon"
              width={40}
              height={40}
              className="text-gray-700 dark:text-white"
            />
            <div>
              <p className="text-lg font-semibold text-neutral-600 dark:text-white">
                {order.customerName}
              </p>
              <p className="text-sm text-gray-400">Order #{order.orderId}</p>
            </div>
          </div>

          {/* Dynamic Status Badge */}
          <span className={`text-sm px-3 py-1 rounded-full ${getStatusClasses(order.status)}`}>
            {order.status}
          </span>
        </div>

        {/* Payment Info */}
        <div className="mt-4 text-lg font-semibold flex justify-center">
          <p className="text-gray-700 dark:text-white text-center">
            Total payment: {order.totalPayment}
          </p>
        </div>

        {/* Order Items */}
        <div className="mt-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2">
              <span className="text-gray-700 dark:text-white">{item.name}</span>
              <span className="text-gray-600">{item.quantity}x</span>
            </div>
          ))}
        </div>

        {/* Order Notes (if any) */}
        {order.orderNotes && (
          <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-sm text-gray-600 dark:text-gray-300">
            <p>
              <span className="font-semibold">Order Notes:</span> {order.orderNotes}
            </p>
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default OrderCard;
