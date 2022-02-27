export interface Resources {
    data: Resource[];
}
export interface Resource {
    id: number;
    name: string;
}
export interface CreateBookingForm {
  resourceId: number,
  FromDate: string,
  toDate: string,
  quantity: number
}
