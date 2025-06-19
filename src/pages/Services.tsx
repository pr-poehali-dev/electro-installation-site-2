import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Cable",
      title: "Монтажные работы систем электроснабжения",
      description:
        "Полный цикл работ по проектированию, монтажу и вводу в эксплуатацию электрических сетей",
      features: [
        "Проектирование электрических схем",
        "Монтаж кабельных линий",
        "Установка распределительных щитов",
        "Подключение электрооборудования",
      ],
    },
    {
      icon: "Settings",
      title: "Пусконаладочные работы АСУТП",
      description:
        "Настройка и запуск автоматизированных систем управления технологическими процессами",
      features: [
        "Программирование контроллеров",
        "Настройка человеко-машинного интерфейса",
        "Интеграция систем",
        "Обучение персонала",
      ],
    },
    {
      icon: "TestTube",
      title: "Испытания оборудования ЭТЛ",
      description:
        "Комплексные испытания в аккредитованной электротехнической лаборатории",
      features: [
        "Испытания изоляции",
        "Проверка защитных устройств",
        "Измерение сопротивления заземления",
        "Выдача протоколов испытаний",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Профессиональные электротехнические услуги для промышленных
              предприятий
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gray-900 p-8 text-white flex items-center justify-center">
                    <div className="text-center">
                      <Icon
                        name={service.icon}
                        className="text-blue-500 mx-auto mb-4"
                        size={64}
                      />
                      <h3 className="text-2xl font-semibold">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-gray-600 mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <Icon
                            name="CheckCircle"
                            className="text-green-600"
                            size={20}
                          />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
