import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const sleepTips = [
  {
    title: "Соблюдайте режим",
    description: "Ложитесь спать и просыпайтесь в одно и то же время, даже в выходные",
    icon: "Moon"
  },
  {
    title: "Создайте ритуал",
    description: "Тёплая ванна, чтение или медитация перед сном помогут организму подготовиться",
    icon: "BookOpen"
  },
  {
    title: "Оптимизируйте окружение",
    description: "Тихая, прохладная и тёмная комната - идеальное место для здорового сна",
    icon: "BedDouble"
  },
  {
    title: "Избегайте стимуляторов",
    description: "Ограничьте кофеин, алкоголь и тяжёлую пищу перед сном",
    icon: "Coffee"
  }
];

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#0d1117] text-white relative overflow-hidden">
      {/* Анимированные облака */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-30">
        <div 
          className="absolute top-24 left-[5%] w-64 h-36 bg-white rounded-full blur-lg"
          style={{ transform: `translateX(${scrollY * 0.1}px)` }}
        />
        <div 
          className="absolute top-40 left-[35%] w-80 h-32 bg-white rounded-full blur-lg"
          style={{ transform: `translateX(${-scrollY * 0.07}px)` }}
        />
        <div 
          className="absolute top-16 right-[15%] w-56 h-24 bg-white rounded-full blur-lg"
          style={{ transform: `translateX(${-scrollY * 0.12}px)` }}
        />
        <div 
          className="absolute bottom-32 left-[20%] w-72 h-28 bg-white rounded-full blur-lg opacity-20"
          style={{ transform: `translateX(${scrollY * 0.08}px)` }}
        />
      </div>
      
      {/* Навигация */}
      <header className="relative z-10 flex justify-between items-center p-6 bg-[#1A1F2C]/60 backdrop-blur-md">
        <div className="flex items-center">
          <Icon name="MoonStar" className="h-8 w-8 mr-2 text-[#E5DEFF]" />
          <h1 className="text-2xl font-bold font-montserrat tracking-tight text-[#E5DEFF]">
            Сохайсат
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6 font-rubik">
            <li><a href="#" className="hover:text-[#D3E4FD] transition-colors">О нас</a></li>
            <li><a href="#" className="hover:text-[#D3E4FD] transition-colors">Советы</a></li>
            <li><a href="#" className="hover:text-[#D3E4FD] transition-colors">Контакты</a></li>
          </ul>
        </nav>
      </header>
      
      {/* Главная секция */}
      <main className="relative z-10">
        <section className="py-20 px-6 flex flex-col items-center justify-center min-h-[70vh] text-center">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#E5DEFF]/10 rounded-full blur-xl animate-pulse" />
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 font-montserrat text-white relative">
              Спокойный сон <br/>
              <span className="text-[#D3E4FD]">каждую ночь</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300 font-rubik max-w-2xl mx-auto">
              Мы помогаем обрести здоровый сон и восстановить естественные ритмы вашего организма
              с помощью проверенных методик и персональных рекомендаций.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#E5DEFF] text-[#1A1F2C] hover:bg-[#D3E4FD] font-medium px-6 py-2 text-lg">
                Начать программу
              </Button>
              <Button variant="outline" className="border-[#E5DEFF] text-[#E5DEFF] hover:bg-[#E5DEFF]/10 font-medium px-6 py-2 text-lg">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>
        
        {/* Секция с советами */}
        <section className="py-16 px-6 bg-[#1A1F2C]/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-montserrat text-[#E5DEFF]">
              Советы для качественного сна
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sleepTips.map((tip, index) => (
                <Card key={index} className="bg-[#242B40] border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-[#E5DEFF]/20 flex items-center justify-center mb-2">
                      <Icon name={tip.icon} className="h-6 w-6 text-[#E5DEFF]" />
                    </div>
                    <CardTitle className="text-xl font-montserrat text-white">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 font-rubik">{tip.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Секция с дополнительной информацией */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E5DEFF]/10 rounded-full blur-xl" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-montserrat text-white">
              Начните путь к здоровому сну <span className="text-[#D3E4FD]">сегодня</span>
            </h2>
            <p className="text-lg mb-8 text-center text-gray-300 font-rubik">
              Присоединяйтесь к тысячам людей, которые уже улучшили качество своего сна
              с помощью нашей методики и экспертных рекомендаций.
            </p>
            <div className="flex justify-center">
              <Button className="bg-[#E5DEFF] text-[#1A1F2C] hover:bg-[#D3E4FD] font-medium px-6 py-2 text-lg">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Подвал */}
      <footer className="relative z-10 py-8 px-6 bg-[#111520] text-gray-400 font-rubik">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Icon name="MoonStar" className="h-6 w-6 mr-2 text-[#E5DEFF]" />
            <span className="text-[#E5DEFF]">Сохайсат © 2025</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-[#D3E4FD] transition-colors">Правила</a>
            <a href="#" className="hover:text-[#D3E4FD] transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-[#D3E4FD] transition-colors">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
