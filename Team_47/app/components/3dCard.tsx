"use client";

import { cn } from "@/lib/utils";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

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

interface OrderCardProps {
  order: Order;
}

// Create a context to handle mouse enter state
const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);
  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) {
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-10 flex items-center justify-center", containerClassName)}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("h-auto w-80 bg-white shadow-lg rounded-lg p-4", className)}>
    {children}
  </div>
);

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = isMouseEntered
        ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
        : `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered]);

  return (
    <Tag ref={ref} className={cn("transition duration-200 ease-linear", className)} {...rest}>
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <CardContainer>
      <CardBody className="p-6 text-center">
        <CardItem as="h2" className="text-lg font-bold" translateZ={20}>
          {order.customerName}
        </CardItem>
        <CardItem as="p" className="text-sm text-gray-600" translateZ={15}>
          Order ID: {order.orderId}
        </CardItem>
        <CardItem as="p" className="text-sm text-gray-600" translateZ={10}>
          Room: {order.roomNumber}
        </CardItem>
        <CardItem as="p" className="text-sm text-gray-600" translateZ={10}>
          Total: {order.totalPayment}
        </CardItem>
        <CardItem as="p" className={`text-sm font-semibold ${order.status === "Available" ? "text-green-500" : "text-red-500"}`} translateZ={15}>
          Status: {order.status}
        </CardItem>
        <CardItem as="div" className="mt-3 text-left" translateZ={10}>
          <p className="text-sm font-semibold">Items Ordered:</p>
          <ul className="text-sm text-gray-600">
            {order.items.map((item, index) => (
              <li key={index}>{item.name} (x{item.quantity})</li>
            ))}
          </ul>
        </CardItem>
        {order.orderNotes && (
          <CardItem as="p" className="text-xs text-gray-500 italic mt-2" translateZ={5}>
            {order.orderNotes}
          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  );
};

export default OrderCard;
