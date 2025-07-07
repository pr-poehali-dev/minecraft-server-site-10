import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const floatingServers = [
    "v-no-rules",
    "v-classic",
    "v-full-rp",
    "v-events",
    "v-medium-rp",
    "юг-no-rules",
    "юг-classic",
    "юг-full-rp",
    "юг-events",
    "юг-medium-rp",
  ];

  const FloatingServer = ({ name, index }: { name: string; index: number }) => {
    const animations = ["animate-pulse", "animate-bounce"];
    const animation = animations[index % animations.length];
    const speeds = ["15s", "18s", "12s"];
    const speed = speeds[index % speeds.length];

    return (
      <div
        className={`absolute text-purple-300/20 text-sm font-mono ${animation} pointer-events-none select-none`}
        style={{
          left: `${5 + ((index * 13) % 85)}%`,
          top: `${10 + ((index * 18) % 75)}%`,
          animationDuration: speed,
          animationDelay: `${index * 0.7}s`,
        }}
      >
        {name}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 overflow-hidden relative">
      {/* Floating Server Names */}
      {floatingServers.map((server, index) => (
        <FloatingServer key={server} name={server} index={index} />
      ))}

      {/* Additional floating elements for more density */}
      {floatingServers.map((server, index) => (
        <FloatingServer key={`${server}-2`} name={server} index={index + 10} />
      ))}

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="mb-6">
            <Badge className="bg-purple-600 text-white px-4 py-2 text-sm font-semibold">
              🔒 SCP: SECRET LABORATORY
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            DISTORTING
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Погрузись в мир SCP Foundation. Множество серверов, различные режимы
            игры и незабываемые приключения ждут тебя.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Icon name="Play" className="mr-2" size={20} />
              ИГРАТЬ
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open(
                  "https://discord.gg/distorting-scp-foundation-1091852388299702422",
                  "_blank",
                )
              }
              className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Icon name="Users" className="mr-2" size={20} />
              DISCORD
            </Button>
          </div>

          {/* Server ID */}
          <div className="mb-8">
            <div className="bg-purple-900/30 rounded-lg p-6 border border-purple-700">
              <h3 className="text-purple-300 text-lg font-semibold mb-2">
                ID сервера:
              </h3>
              <div className="bg-purple-950 rounded-lg p-4">
                <code className="text-purple-200 font-mono text-xl">
                  1091852388299702422
                </code>
              </div>
            </div>
          </div>

          {/* Server Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-purple-900/50 border-purple-700">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center">
                  <Icon name="Server" className="mr-2" size={20} />
                  Серверы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">
                  10 активных серверов с различными режимами игры
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/50 border-purple-700">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center">
                  <Icon name="Shield" className="mr-2" size={20} />
                  Безопасность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">
                  Защищённые серверы с активной модерацией
                </p>
              </CardContent>
            </Card>

            <Card className="bg-purple-900/50 border-purple-700">
              <CardHeader>
                <CardTitle className="text-purple-300 flex items-center">
                  <Icon name="Clock" className="mr-2" size={20} />
                  24/7 онлайн
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-200">
                  Стабильная работа серверов круглосуточно
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
