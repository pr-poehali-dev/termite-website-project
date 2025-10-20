import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("ecology");

  const sections = [
    {
      id: "ecology",
      title: "Экология и роль в природе",
      icon: "Trees",
      description: "Влияние термитов на экосистемы и окружающую среду",
      image: "https://cdn.poehali.dev/projects/f0a08bc8-3da2-4a1f-946f-8e6c36e5e250/files/6896a00a-9a19-42b7-b5c0-5e5798207398.jpg",
      facts: [
        { label: "Переработка целлюлозы", value: "До 100 кг/год на колонию", icon: "Leaf" },
        { label: "Аэрация почвы", value: "Улучшение на 30-40%", icon: "Wind" },
        { label: "Биоразнообразие", value: "Поддержка 200+ видов", icon: "Bug" },
      ],
      content: "Термиты играют ключевую роль в круговороте питательных веществ, перерабатывая мертвую древесину и растительные остатки. Их деятельность способствует аэрации почвы и созданию микросред для других организмов."
    },
    {
      id: "biology",
      title: "Биология и поведение",
      icon: "Microscope",
      description: "Физиология, анатомия и поведенческие особенности",
      image: "https://cdn.poehali.dev/projects/f0a08bc8-3da2-4a1f-946f-8e6c36e5e250/files/84b073c5-b2ed-4ce2-a2ff-378937d4560a.jpg",
      facts: [
        { label: "Длина тела", value: "3-20 мм", icon: "Ruler" },
        { label: "Продолжительность жизни королевы", value: "До 50 лет", icon: "Clock" },
        { label: "Симбионты в кишечнике", value: "200+ видов микроорганизмов", icon: "Dna" },
      ],
      content: "Термиты имеют мягкое тело с прямыми усиками. Их способность переваривать целлюлозу обусловлена симбиозом с простейшими и бактериями в кишечнике. Развиваются через неполное превращение."
    },
    {
      id: "research",
      title: "Научные исследования",
      icon: "FlaskConical",
      description: "Актуальные исследования и научные открытия",
      image: "https://cdn.poehali.dev/projects/f0a08bc8-3da2-4a1f-946f-8e6c36e5e250/files/e88db303-30ec-4df4-9293-cb56ee284fd1.jpg",
      facts: [
        { label: "Публикаций в год", value: "~1500", icon: "FileText" },
        { label: "Исследуемых видов", value: "3000+", icon: "Search" },
        { label: "Лабораторий по всему миру", value: "150+", icon: "Building" },
      ],
      content: "Современные исследования фокусируются на изучении социального поведения, механизмов коммуникации, биотехнологического потенциала ферментов термитов и их роли в изменении климата."
    },
    {
      id: "structure",
      title: "Структура колоний",
      icon: "Network",
      description: "Организация и иерархия термитного общества",
      image: "https://cdn.poehali.dev/projects/f0a08bc8-3da2-4a1f-946f-8e6c36e5e250/files/e88db303-30ec-4df4-9293-cb56ee284fd1.jpg",
      facts: [
        { label: "Размер колонии", value: "До 3 млн особей", icon: "Users" },
        { label: "Касты", value: "Рабочие, солдаты, репродуктивные", icon: "Crown" },
        { label: "Производительность королевы", value: "30 000 яиц/день", icon: "Egg" },
      ],
      content: "Колония термитов представляет собой высокоорганизованное общество с четким разделением труда. Королева и король отвечают за размножение, рабочие — за строительство и заботу о потомстве, солдаты — за защиту."
    },
  ];

  const activeData = sections.find(s => s.id === activeSection) || sections[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Bug" className="text-primary" size={32} />
            <h1 className="text-3xl font-bold text-foreground">Термиты: научный портал</h1>
          </div>
          <p className="text-muted-foreground">Образовательный ресурс о биологии, экологии и поведении термитов</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-background p-2">
            {sections.map((section) => (
              <TabsTrigger 
                key={section.id} 
                value={section.id}
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Icon name={section.icon} size={24} />
                <span className="text-sm font-medium text-center leading-tight">{section.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {sections.map((section) => (
            <TabsContent key={section.id} value={section.id} className="space-y-8 animate-fade-in">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name={section.icon} className="text-primary" size={28} />
                      <h2 className="text-3xl font-bold">{section.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">{section.description}</p>
                  </div>

                  <Card className="border-2 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Info" className="text-primary" size={20} />
                        Научные данные
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/90 leading-relaxed">{section.content}</p>
                    </CardContent>
                  </Card>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {section.facts.map((fact, idx) => (
                      <Card key={idx} className="text-center hover:shadow-md transition-shadow hover:scale-105 duration-200">
                        <CardHeader className="pb-3">
                          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                            <Icon name={fact.icon} className="text-primary" size={24} />
                          </div>
                          <CardDescription className="text-xs font-medium">{fact.label}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-lg font-bold text-primary">{fact.value}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Card className="overflow-hidden border-2 hover:shadow-xl transition-shadow">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <CardContent className="p-4">
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="Microscope" size={12} className="mr-1" />
                          Научная фотография
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Icon name="BookOpen" size={12} className="mr-1" />
                          Образовательный материал
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/50 border-2 border-accent">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="Lightbulb" className="text-accent-foreground" size={20} />
                        Интересный факт
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {section.id === "ecology" && (
                        <p className="text-foreground/90">Термитники могут достигать высоты 9 метров и служить домом для тысяч других видов организмов, создавая уникальные микроэкосистемы.</p>
                      )}
                      {section.id === "biology" && (
                        <p className="text-foreground/90">Термиты существуют на Земле более 150 миллионов лет, пережив динозавров и оставаясь практически неизменными.</p>
                      )}
                      {section.id === "research" && (
                        <p className="text-foreground/90">Ферменты из кишечника термитов изучаются для производства биотоплива второго поколения из растительных отходов.</p>
                      )}
                      {section.id === "structure" && (
                        <p className="text-foreground/90">Королева термитов может прожить до 50 лет и отложить за свою жизнь более 500 миллионов яиц.</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <section className="mt-16 space-y-6">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold">Классификация термитов</h2>
            <p className="text-muted-foreground">Основные семейства и их характеристики</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { family: "Kalotermitidae", name: "Сухие термиты", species: "~400", habitat: "Сухая древесина" },
              { family: "Rhinotermitidae", name: "Подземные термиты", species: "~350", habitat: "Почва и влажная древесина" },
              { family: "Termitidae", name: "Высшие термиты", species: "~2000", habitat: "Почва, древесина, трава" },
              { family: "Hodotermitidae", name: "Жнецы", species: "~20", habitat: "Аридные зоны" },
              { family: "Mastotermitidae", name: "Примитивные термиты", species: "1", habitat: "Древесина" },
              { family: "Serritermitidae", name: "Зубчатые термиты", species: "~2", habitat: "Тропические леса" },
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 duration-200 border-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="text-xs italic">{item.family}</CardDescription>
                    </div>
                    <Icon name="Bug" className="text-primary" size={24} />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="List" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Видов:</span>
                    <span className="font-semibold">{item.species}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="MapPin" size={16} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Среда обитания:</span>
                  </div>
                  <p className="text-sm pl-6">{item.habitat}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t mt-20 bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Bug" className="text-primary" size={24} />
              <span className="font-semibold">Термиты: научный портал</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Образовательный ресурс для изучения биологии и экологии термитов
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
