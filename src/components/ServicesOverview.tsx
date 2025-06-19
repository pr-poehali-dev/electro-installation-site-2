import Icon from "@/components/ui/icon";

const ServicesOverview = () => {
  const services = [
    {
      icon: "Cable",
      title: "Монтажные работы систем электроснабжения",
      description:
        "Проектирование и монтаж электрических сетей любой сложности",
    },
    {
      icon: "Settings",
      title: "Пусконаладочные работы АСУТП",
      description: "Настройка и запуск автоматизированных систем управления",
    },
    {
      icon: "TestTube",
      title: "Испытания оборудования ЭТЛ",
      description: "Комплексные испытания электротехнической лаборатории",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Предоставляем полный спектр услуг в области электротехники и
            автоматизации
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={service.icon}
                    className="text-blue-600"
                    size={32}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
