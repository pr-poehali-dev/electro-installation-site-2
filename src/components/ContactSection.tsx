import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-300">
            Готовы обсудить ваш проект? Мы всегда готовы помочь!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="Phone" className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Телефон</h3>
            <p className="text-gray-300">+7 (495) 123-45-67</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="Mail" className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300">info@elektrotech.ru</p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="MapPin" className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Адрес</h3>
            <p className="text-gray-300">г. Москва, ул. Промышленная, 15</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
