import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-orange-500/20 to-green-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('/img/ce0e0bc4-077c-46e0-a2d2-c96a3debc626.jpg')] bg-cover bg-center opacity-20"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-6">
            <Badge className="bg-green-500 text-white px-4 py-2 text-sm font-semibold animate-bounce">
              🎮 ВАНИЛЬНЫЙ СЕРВЕР
            </Badge>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-orange-400 to-green-400 bg-clip-text text-transparent animate-fade-in">
            MINECRAFT
            <br />
            <span className="text-4xl md:text-5xl">СЕРВЕР</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Присоединяйся к лучшему ванильному серверу! Классический Minecraft
            без модов, дружелюбное сообщество и невероятные приключения ждут
            тебя.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Icon name="Play" className="mr-2" size={20} />
              НАЧАТЬ ИГРАТЬ
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Icon name="Users" className="mr-2" size={20} />
              СООБЩЕСТВО
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">150+</div>
              <div className="text-sm">ИГРОКОВ</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">24/7</div>
              <div className="text-sm">ОНЛАЙН</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">1.20</div>
              <div className="text-sm">ВЕРСИЯ</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Как начать играть?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Всего 3 простых шага отделяют тебя от незабываемых приключений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Download" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Шаг 1</CardTitle>
                <CardDescription className="text-green-400 font-semibold">
                  Скачай Minecraft
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Установи официальную версию Minecraft 1.20 с официального
                  сайта
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Server" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Шаг 2</CardTitle>
                <CardDescription className="text-orange-400 font-semibold">
                  Подключись к серверу
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Добавь наш сервер в список:
                </p>
                <div className="bg-slate-800 p-3 rounded-lg text-center">
                  <code className="text-green-400 font-mono text-lg">
                    mc.server.ru
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-green-500/30 hover:border-green-500/60 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gamepad2" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Шаг 3</CardTitle>
                <CardDescription className="text-green-400 font-semibold">
                  Начни играть!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Исследуй мир, стройй, выживай и заводи новых друзей!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Нужна помощь?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Наша команда всегда готова помочь! Свяжись с нами любым удобным
            способом
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="MessageCircle"
                  size={48}
                  className="text-blue-400 mx-auto mb-4"
                />
                <CardTitle className="text-white text-2xl">Discord</CardTitle>
                <CardDescription className="text-blue-400">
                  Самый быстрый способ получить помощь
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Присоединиться к Discord
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
              <CardHeader className="text-center">
                <Icon
                  name="Mail"
                  size={48}
                  className="text-purple-400 mx-auto mb-4"
                />
                <CardTitle className="text-white text-2xl">Email</CardTitle>
                <CardDescription className="text-purple-400">
                  Для более подробных вопросов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                >
                  support@server.ru
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Поддержи сервер
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Твоя поддержка помогает нам развивать сервер и добавлять новые
              возможности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-yellow-500/30 hover:border-yellow-500/60 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Базовый</CardTitle>
                <CardDescription className="text-yellow-400 font-semibold text-xl">
                  199 ₽
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>✨ Цветной ник</li>
                  <li>🎒 +10 слотов в инвентаре</li>
                  <li>🏠 Больше приватов</li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-orange-500/60 hover:border-orange-500 transition-all duration-300 hover:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-orange-500 text-white px-4 py-1">
                  ПОПУЛЯРНЫЙ
                </Badge>
              </div>
              <CardHeader className="text-center pt-8">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Crown" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Премиум</CardTitle>
                <CardDescription className="text-orange-400 font-semibold text-xl">
                  399 ₽
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>🌟 Всё из базового</li>
                  <li>🚀 Возможность летать</li>
                  <li>⚡ Быстрая телепортация</li>
                  <li>🎁 Ежедневные бонусы</li>
                </ul>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/50 border-red-500/30 hover:border-red-500/60 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gem" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-2xl">VIP</CardTitle>
                <CardDescription className="text-red-400 font-semibold text-xl">
                  699 ₽
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>💎 Всё из премиум</li>
                  <li>🏆 Эксклюзивные команды</li>
                  <li>🎨 Кастомные эффекты</li>
                  <li>👑 VIP статус</li>
                </ul>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-slate-900 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Minecraft Server
          </h3>
          <p className="text-gray-400 mb-6">
            Лучший ванильный сервер для настоящих игроков
          </p>
          <div className="flex justify-center items-center gap-6">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Discord
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Mail" size={20} className="mr-2" />
              Email
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Icon name="Globe" size={20} className="mr-2" />
              Сайт
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-sm text-gray-500">
            © 2024 Minecraft Server. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
