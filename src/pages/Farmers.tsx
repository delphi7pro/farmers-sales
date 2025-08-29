import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  MapPin, 
  Award, 
  Star,
  Users,
  Leaf,
  Calendar,
  Phone
} from 'lucide-react';

const Farmers = () => {
  const farmers = [
    {
      id: '1',
      name: 'Алексей Иванов',
      farmName: 'Ферма Солнечная',
      location: 'Московская область, Подольск',
      experience: 15,
      speciality: 'Органические овощи',
      rating: 4.9,
      reviews: 124,
      products: 23,
      image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmImage: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Семейная ферма, специализирующаяся на выращивании органических овощей без использования химикатов.',
      certifications: ['Органик', 'Эко-продукт'],
      established: 2009
    },
    {
      id: '2',
      name: 'Мария Петрова',
      farmName: 'Молочная ферма Утро',
      location: 'Тульская область, Ясногорск',
      experience: 12,
      speciality: 'Молочные продукты',
      rating: 4.8,
      reviews: 89,
      products: 8,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmImage: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Производим натуральные молочные продукты от коров, которые пасутся на экологически чистых лугах.',
      certifications: ['Качество', 'ХАССП'],
      established: 2012
    },
    {
      id: '3',
      name: 'Дмитрий Сидоров',
      farmName: 'Птицеферма Утренняя',
      location: 'Калужская область, Обнинск',
      experience: 8,
      speciality: 'Домашние яйца и птица',
      rating: 4.7,
      reviews: 67,
      products: 12,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmImage: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Выращиваем птицу свободного выгула и производим свежие домашние яйца каждый день.',
      certifications: ['Свободный выгул', 'Без антибиотиков'],
      established: 2016
    },
    {
      id: '4',
      name: 'Елена Козлова',
      farmName: 'Зеленая грядка',
      location: 'Московская область, Серпухов',
      experience: 10,
      speciality: 'Зелень и травы',
      rating: 4.9,
      reviews: 156,
      products: 18,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmImage: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Выращиваем свежую зелень и пряные травы в теплицах круглый год.',
      certifications: ['Органик', 'Гидропоника'],
      established: 2014
    },
    {
      id: '5',
      name: 'Игорь Волков',
      farmName: 'Ягодная поляна',
      location: 'Владимирская область, Суздаль',
      experience: 20,
      speciality: 'Ягоды и фрукты',
      rating: 4.8,
      reviews: 203,
      products: 15,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmImage: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Семейная ферма с многолетними традициями выращивания ягод и фруктов.',
      certifications: ['Традиционное земледелие', 'Семейная ферма'],
      established: 2004
    },
    {
      id: '6',
      name: 'Андрей Морозов',
      farmName: 'Мясная ферма Традиция',
      location: 'Рязанская область, Касимов',
      experience: 18,
      speciality: 'Мясо и мясопродукты',
      rating: 4.9,
      reviews: 78,
      products: 10,
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmImage: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Разводим крупный рогатый скот на натуральных кормах без гормонов роста.',
      certifications: ['Натуральные корма', 'Без гормонов'],
      established: 2006
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Наши фермеры</h1>
            <p className="text-lg text-gray-600 mb-8">
              Знакомьтесь с людьми, которые с любовью выращивают для вас натуральные продукты
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Поиск фермеров..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Специализация" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все специализации</SelectItem>
                  <SelectItem value="vegetables">Овощи</SelectItem>
                  <SelectItem value="dairy">Молочные продукты</SelectItem>
                  <SelectItem value="meat">Мясо</SelectItem>
                  <SelectItem value="fruits">Фрукты и ягоды</SelectItem>
                  <SelectItem value="greens">Зелень</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Фермеров</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
              <div className="text-gray-600">Регионов</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600">Продуктов</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">4.8</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </CardContent>
          </Card>
        </div>

        {/* Farmers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {farmers.map((farmer) => (
            <Card key={farmer.id} className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={farmer.farmImage} 
                  alt={farmer.farmName}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {farmer.certifications.slice(0, 2).map((cert) => (
                    <Badge key={cert} className="bg-white/90 text-gray-800">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={farmer.image} 
                    alt={farmer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-lg">{farmer.name}</CardTitle>
                    <CardDescription className="text-green-600 font-medium">
                      {farmer.farmName}
                    </CardDescription>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{farmer.rating}</span>
                    <span>({farmer.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>{farmer.experience} лет</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{farmer.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Leaf className="h-4 w-4 text-gray-400" />
                    <span>{farmer.speciality}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span>С {farmer.established} года</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {farmer.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-sm text-gray-500">
                      {farmer.products} продуктов
                    </span>
                    <Button size="sm" asChild>
                      <Link to={`/farmers/${farmer.id}`}>
                        Подробнее
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-12">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Хотите стать нашим партнером?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Если вы фермер и производите качественные натуральные продукты, 
                мы будем рады сотрудничеству с вами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/partnership">
                    Стать партнером
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Связаться с нами
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Farmers;