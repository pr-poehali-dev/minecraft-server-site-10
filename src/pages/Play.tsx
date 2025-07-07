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
import { useNavigate } from "react-router-dom";

const Play = () => {
  const navigate = useNavigate();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="p-6 border-b border-slate-700">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-white hover:text-green-400"
          >
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
          <Badge className="bg-green-500 text-white">
            🎮 ПРИСОЕДИНЯЙСЯ К ИГРЕ
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-orange-400 to-green-400 bg-clip-text text-transparent">
              Начни играть прямо сейчас!
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Копируй IP адрес сервера и присоединяйся к незабываемым
              приключениям
            </p>
          </div>

          {/* Server IP Section */}
          <div className="mb-12">
            <Card className="bg-slate-900/50 border-green-500/50 hover:border-green-500 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Server" size={40} className="text-white" />
                </div>
                <CardTitle className="text-white text-3xl">
                  IP адрес сервера
                </CardTitle>
                <CardDescription className="text-green-400 text-lg">
                  Добавь этот адрес в Minecraft для подключения
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-slate-800 p-6 rounded-lg mb-6 border-2 border-green-500/30">
                  <div className="text-4xl font-mono text-green-400 mb-2">
                    mc.server.ru
                  </div>
                  <div className="text-gray-400">
                    Версия: 1.20 | Онлайн: 150+ игроков
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => copyToClipboard("mc.server.ru")}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
                  >
                    <Icon name="Copy" className="mr-2" size={20} />
                    Скопировать IP
                  </Button>
                  <Button
                    variant="outline"
                    className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 text-lg"
                  >
                    <Icon name="ExternalLink" className="mr-2" size={20} />
                    Открыть Minecraft
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Instructions */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Как подключиться за 30 секунд
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-900/50 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <CardTitle className="text-white">Запусти игру</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">
                    Открой Minecraft и перейди в "Сетевая игра"
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <CardTitle className="text-white">Добавь сервер</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">
                    Нажми "Добавить сервер" и вставь IP адрес
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <CardTitle className="text-white">Играй!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">
                    Подключись к серверу и начни приключения
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Donation Call-to-Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 border-yellow-500/50">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gem" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-3xl">
                  Хочешь больше возможностей?
                </CardTitle>
                <CardDescription className="text-yellow-400 text-lg">
                  Поддержи сервер и получи эксклюзивные привилегии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  <div className="text-center">
                    <div className="text-green-400 text-lg font-semibold">
                      ✨ Цветной ник
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-400 text-lg font-semibold">
                      🚀 Возможность летать
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-red-400 text-lg font-semibold">
                      💎 VIP статус
                    </div>
                  </div>
                </div>

                <Button
                  onClick={() => navigate("/#donation")}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-10 py-4 text-xl font-bold transition-all duration-300 hover:scale-105"
                >
                  <Icon name="Heart" className="mr-2" size={24} />
                  Поддержать сервер
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Play;
