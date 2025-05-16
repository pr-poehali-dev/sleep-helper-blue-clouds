import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const sleepTips = [
  {
    title: "Соблюдайте режим",
    description:
      "Ложитесь спать и просыпайтесь в одно и то же время, даже в выходные",
    icon: "Moon",
  },
  {
    title: "Создайте ритуал",
    description:
      "Тёплая ванна, чтение или медитация перед сном помогут организму подготовиться",
    icon: "BookOpen",
  },
  {
    title: "Оптимизируйте окружение",
    description:
      "Тихая, прохладная и тёмная комната - идеальное место для здорового сна",
    icon: "BedDouble",
  },
  {
    title: "Избегайте стимуляторов",
    description: "Ограничьте кофеин, алкоголь и тяжёлую пищу перед сном",
    icon: "Coffee",
  },
];

// Данные статистики сна
const sleepData = [
  {
    day: "Понедельник",
    hours: 6.5,
    quality: "Среднее",
    notes: "Трудно заснуть",
  },
  {
    day: "Вторник",
    hours: 7.2,
    quality: "Хорошее",
    notes: "Проснулся отдохнувшим",
  },
  { day: "Среда", hours: 5.8, quality: "Плохое", notes: "Частые пробуждения" },
  {
    day: "Четверг",
    hours: 8.1,
    quality: "Отличное",
    notes: "Глубокий сон всю ночь",
  },
  {
    day: "Пятница",
    hours: 6.9,
    quality: "Хорошее",
    notes: "Небольшие трудности с засыпанием",
  },
  {
    day: "Суббота",
    hours: 9.2,
    quality: "Отличное",
    notes: "Выспался полностью",
  },
  {
    day: "Воскресенье",
    hours: 7.5,
    quality: "Хорошее",
    notes: "Спокойный сон",
  },
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
            <li>
              <a href="#" className="hover:text-[#D3E4FD] transition-colors">
                О нас
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D3E4FD] transition-colors">
                Советы
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#D3E4FD] transition-colors">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Главная секция */}
      <main className="relative z-10">
        <section className="py-20 px-6 flex flex-col items-center justify-center min-h-[70vh] text-center">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#E5DEFF]/10 rounded-full blur-xl animate-pulse" />
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 font-montserrat text-white relative">
              Спокойный сон <br />
              <span className="text-[#D3E4FD]">каждую ночь</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300 font-rubik max-w-2xl mx-auto">
              Мы помогаем обрести здоровый сон и восстановить естественные ритмы
              вашего организма с помощью проверенных методик и персональных
              рекомендаций.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#E5DEFF] text-[#1A1F2C] hover:bg-[#D3E4FD] font-medium px-6 py-2 text-lg">
                Начать программу
              </Button>
              <Button
                variant="outline"
                className="border-[#E5DEFF] text-[#E5DEFF] hover:bg-[#E5DEFF]/10 font-medium px-6 py-2 text-lg"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        {/* НОВАЯ СЕКЦИЯ: Таблица статистики сна */}
        <section className="py-16 px-6 bg-[#182030]/60 backdrop-blur-md relative overflow-hidden">
          <div className="absolute -top-10 right-20 w-32 h-32 bg-[#E5DEFF]/5 rounded-full blur-2xl animate-float" />
          <div className="absolute bottom-10 left-20 w-40 h-24 bg-[#D3E4FD]/5 rounded-full blur-2xl animate-float-slow" />

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-montserrat text-[#E5DEFF]">
              Дневник сна
            </h2>
            <p className="text-center text-gray-300 font-rubik mb-10 max-w-2xl mx-auto">
              Отслеживайте продолжительность и качество вашего сна, чтобы
              увидеть прогресс и выявить проблемные паттерны
            </p>

            <div className="rounded-xl overflow-hidden border border-[#E5DEFF]/20 shadow-lg bg-[#1A1F2C]/80 backdrop-blur-md">
              <Table>
                <TableHeader className="bg-[#242B40]">
                  <TableRow>
                    <TableHead className="text-[#E5DEFF] font-montserrat">
                      День недели
                    </TableHead>
                    <TableHead className="text-[#E5DEFF] font-montserrat text-center">
                      Часы сна
                    </TableHead>
                    <TableHead className="text-[#E5DEFF] font-montserrat">
                      Качество
                    </TableHead>
                    <TableHead className="text-[#E5DEFF] font-montserrat hidden md:table-cell">
                      Заметки
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sleepData.map((entry, index) => (
                    <TableRow
                      key={index}
                      className="border-b border-[#E5DEFF]/10 hover:bg-[#242B40]/50 transition-colors"
                    >
                      <TableCell className="font-medium text-white">
                        {entry.day}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-full max-w-[100px] h-3 bg-[#242B40] rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getQualityColor(entry.quality)}`}
                              style={{ width: `${(entry.hours / 10) * 100}%` }}
                            />
                          </div>
                          <span className="text-gray-300">{entry.hours}ч</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${getQualityBadgeColor(entry.quality)}`}
                        >
                          {entry.quality}
                        </span>
                      </TableCell>
                      <TableCell className="text-gray-300 hidden md:table-cell">
                        {entry.notes}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 text-center">
              <Button
                variant="outline"
                className="border-[#E5DEFF]/50 text-[#E5DEFF] hover:bg-[#E5DEFF]/10"
              >
                <Icon name="FileText" className="w-4 h-4 mr-2" />
                Полный отчет о сне
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
                <Card
                  key={index}
                  className="bg-[#242B40] border-none shadow-lg hover:shadow-xl transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-[#E5DEFF]/20 flex items-center justify-center mb-2">
                      <Icon
                        name={tip.icon}
                        className="h-6 w-6 text-[#E5DEFF]"
                      />
                    </div>
                    <CardTitle className="text-xl font-montserrat text-white">
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 font-rubik">
                      {tip.description}
                    </CardDescription>
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
              Начните путь к здоровому сну{" "}
              <span className="text-[#D3E4FD]">сегодня</span>
            </h2>
            <p className="text-lg mb-8 text-center text-gray-300 font-rubik">
              Присоединяйтесь к тысячам людей, которые уже улучшили качество
              своего сна с помощью нашей методики и экспертных рекомендаций.
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
            <a href="#" className="hover:text-[#D3E4FD] transition-colors">
              Правила
            </a>
            <a href="#" className="hover:text-[#D3E4FD] transition-colors">
              Конфиденциальность
            </a>
            <a href="#" className="hover:text-[#D3E4FD] transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Вспомогательные функции для стилизации таблицы
function getQualityColor(quality: string): string {
  switch (quality) {
    case "Отличное":
      return "bg-[#8B5CF6]";
    case "Хорошее":
      return "bg-[#6E59A5]";
    case "Среднее":
      return "bg-[#FEC6A1]";
    case "Плохое":
      return "bg-[#FDE1D3]";
    default:
      return "bg-[#D3E4FD]";
  }
}

function getQualityBadgeColor(quality: string): string {
  switch (quality) {
    case "Отличное":
      return "bg-[#8B5CF6]/20 text-[#D6BCFA]";
    case "Хорошее":
      return "bg-[#6E59A5]/20 text-[#E5DEFF]";
    case "Среднее":
      return "bg-[#FEC6A1]/20 text-[#FEC6A1]";
    case "Плохое":
      return "bg-[#FDE1D3]/20 text-[#FDE1D3]";
    default:
      return "bg-[#D3E4FD]/20 text-[#D3E4FD]";
  }
}

export default Index;
