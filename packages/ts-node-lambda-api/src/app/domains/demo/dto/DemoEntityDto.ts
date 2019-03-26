export default interface DemoEntityDto {
  id?: string;
  name?: string;
  description?: string;
  date?: Date;
  number?: number;
  boolean?: boolean;
  nested?: {
    name?: string;
    description?: string;
  }
};