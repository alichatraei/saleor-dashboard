import TProvinceCities from "../types/TProvinceCities";

interface IProvinces {
  province_id: number;
  province_name: string;
  province_priority: number;
  children: TProvinceCities[] | [];
}

export default IProvinces;
