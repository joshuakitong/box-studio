import EquipmentSection from "../sections/Equipment";
import ServicesSection from "../sections/Services";

export default function Services() {
  return (
    <div
      className="min-h-screen flex flex-col w-full pt-12 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}services/servicesbackground.jpg)`,
      }}
    >
      <ServicesSection />
      <EquipmentSection />
    </div>
  );
}