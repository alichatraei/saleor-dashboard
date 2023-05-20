import IProvinces from "../interfaces/IProvinces";

const provincesList: IProvinces[] = [
  {
    province_id: 1,
    province_name: "استان تهران",
    children: [
      {
        city_id: "1",
        city_name: "کرج",
        city_priority: 1,
      },
      {
        city_id: "2",
        city_name: "دهخدا",
        city_priority: 2,
      },
    ],
  },
  {
    province_id: 2,
    province_name: "استان اصفهان",
    children: [],
  },
  {
    province_id: 3,
    province_name: "استان یزد",
    children: [],
  },
];

export default provincesList;
