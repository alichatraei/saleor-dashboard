import TProvinceCities from "../types/TProvinceCities";

interface IProvinces {
  province_id: number;
  province_name: string;
  children: TProvinceCities[] | [];
}

export default IProvinces;
