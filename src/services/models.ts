export interface Message {
  id: string;
  user_uuid: string;
  created_at: Date;
  text: string;
}

export interface Shipment {
  id: number;
  tracking_number: string;
  parcel_booking_uuid: string;
  status: string;
  box: {
    description: string;
    weight: number;
    quantity: number;
  };
  chat_data: ChatData[];
  recipient: Recipient;
  sender: Recipient;
}

export interface ChatData {
  id: number;
  created_at: string;
  text: string;
  user_uuid: number;
}

export interface Recipient {
  id: number;
  full_name: string;
}
