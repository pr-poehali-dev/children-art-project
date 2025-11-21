import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [prompt, setPrompt] = useState('');
  
  const galleryImages = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/3573fb70-071d-467e-a5eb-a60cd03827f9/files/3d810674-dcb3-47cd-819f-e0d1af24833c.jpg',
      prompt: 'Futuristic cyberpunk portrait'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/3573fb70-071d-467e-a5eb-a60cd03827f9/files/359d4816-dd5f-46a1-8b23-4469e2a021f7.jpg',
      prompt: 'AI neural network visualization'
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/3573fb70-071d-467e-a5eb-a60cd03827f9/files/f3f3c3e3-d00e-41c7-9152-4bb7ee657dba.jpg',
      prompt: 'Sci-fi cityscape at night'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 pointer-events-none" />
      
      <div className="relative z-10">
        <header className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center glow-purple">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">AI Gallery</h1>
            </div>
            <Button variant="outline" className="glass-panel border-primary/30 hover:glow-purple transition-all">
              <Icon name="User" size={18} className="mr-2" />
              Войти
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
              Генерируй фото <br />с помощью AI
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Превращай текст в потрясающие изображения за секунды
            </p>
            
            <div className="glass-panel p-2 rounded-2xl glow-purple max-w-3xl mx-auto">
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Опиши изображение которое хочешь создать..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-1 bg-background/50 border-0 text-lg h-14 focus-visible:ring-primary"
                />
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all glow-purple px-8"
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Создать
                </Button>
              </div>
            </div>
          </div>

          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold">Галерея примеров</h3>
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                Смотреть всё
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl glass-panel hover:glow-purple transition-all duration-300 cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.prompt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium mb-3">{image.prompt}</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 bg-primary/20 hover:bg-primary/30 border border-primary/50">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать
                      </Button>
                      <Button size="sm" variant="ghost" className="border border-primary/50 hover:bg-primary/20">
                        <Icon name="Heart" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel p-12 rounded-3xl text-center glow-blue">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-6 animate-glow-pulse">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Готов создавать?</h3>
              <p className="text-muted-foreground mb-8">
                Присоединяйся к тысячам креаторов, которые уже используют AI для создания потрясающих визуалов
              </p>
              <Button size="lg" className="bg-gradient-to-r from-secondary to-primary hover:opacity-90 transition-all glow-blue">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать бесплатно
              </Button>
            </div>
          </section>
        </main>

        <footer className="container mx-auto px-6 py-12 mt-24 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Icon name="Sparkles" size={18} className="text-white" />
              </div>
              <span className="font-semibold">AI Gallery</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 AI Gallery. Создано с помощью нейросетей
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
