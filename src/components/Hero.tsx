import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Icon name="Zap" className="text-blue-500" size={64} />
        </div>
        <h1 className="text-5xl font-bold mb-6">СЕВЕР-ЭНЕРГОСТРОЙ</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Профессиональные услуги в области электротехники, автоматизации и
          испытаний оборудования
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
            Наши услуги
          </button>
          <button className="border border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
            Связаться с нами
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
