export interface Message {
  id: number;
  user_uuid: number;
  created_at: string;
  text: string;
}
export type PackageType = 'parcel' | 'air' | 'land' | 'sea';
export interface Shipment {
  id: number;
  type: PackageType;
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
