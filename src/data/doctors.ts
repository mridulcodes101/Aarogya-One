export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  services: string[]; // Service IDs they specialize in
}

export const doctorsData: Doctor[] = [
  {
    id: "dr-narendra-pal",
    name: "Dr. Narendra Pal",
    specialty: "General Physician & Critical Care Expert",
    services: ["general-consultation", "executive-wellness-scan", "cardiovascular-screening"]
  },
  {
    id: "dr-anuj-nigam",
    name: "Dr. Anuj Nigam",
    specialty: "Orthopedic Surgeon",
    services: ["general-consultation"]
  },
  {
    id: "dr-netrakamla-gupta",
    name: "Dr. Netrakamla Gupta",
    specialty: "Obstetrics & Gynaecology (OBGYN) Specialist",
    services: ["general-consultation", "executive-wellness-scan"]
  },
  {
    id: "dr-sudhir-thakur",
    name: "Dr. Sudhir Thakur",
    specialty: "General Physician",
    services: ["general-consultation", "executive-wellness-scan", "cardiovascular-screening"]
  },
  {
    id: "dr-anubhav-agrawal",
    name: "Dr. Anubhav Agrawal",
    specialty: "Gastroenterologist",
    services: ["general-consultation", "executive-wellness-scan"]
  }
];
