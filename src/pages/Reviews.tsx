import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  Star, 
  Search, 
  Filter,
  ThumbsUp,
  MessageSquare,
  Calendar,
  User,
  Award,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState('all');

  const overallStats = {
    averageRating: 4.8,
    totalReviews: 2847,
    ratings: {
      5: 2156,
      4: 512,
      3: 134,
      2: 32,
      1: 13
    }
  };

  const reviews = [
    {
      id: 1,
      author: 'Анна Смирнова',
      avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-15',
      product: 'Органические помидоры',
      text: 'Потрясающие помидоры! Очень сочные и ароматные, чувствуется, что выращены с любовью. Заказываю уже не первый раз и всегда довольна качеством. Доставка быстрая, упаковка отличная.',
      helpful: 24,
      verified: true,
      photos: ['https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=200']
    },
    {
      id: 2,
      author: 'Михаил Петров',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-12',
      product: 'Фермерское молоко',
      text: 'Наконец-то нашел место, где можно купить настоящее деревенское молоко! Вкус как в детстве у бабушки. Дети пьют с удовольствием. Спасибо за качество!',
      helpful: 18,
      verified: true,
      photos: []
    },
    {
      id: 3,
      author: 'Елена Козлова',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2024-01-10',
      product: 'Свежая зелень',
      text: 'Зелень действительно свежая, но цена немного высоковата. В целом качеством довольна, буду заказывать еще.',
      helpful: 12,
      verified: false,
      photos: []
    },
    {
      id: 4,
      author: 'Дмитрий Волков',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-08',
      product: 'Домашние яйца',
      text: 'Яйца просто супер! Желток ярко-оранжевый, скорлупа крепкая. Видно, что куры действительно на свободном выгуле. Рекомендую всем!',
      helpful: 31,
      verified: true,
      photos: ['https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=200']
    },
    {
      id: 5,
      author: 'Ольга Сидорова',
      avatar: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 5,
      date: '2024-01-05',
      product: 'Сезонные яблоки',
      text: 'Заказывала яблоки для детей. Очень сладкие и хрустящие, без воска и химии. Дети едят с удовольствием. Доставили точно в срок.',
      helpful: 19,
      verified: true,
      photos: []
    },
    {
      id: 6,
      author: 'Александр Морозов',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100',
      rating: 4,
      date: '2024-01-03',
      product: 'Фермерская говядина',
      text: 'Мясо хорошего качества, мраморность отличная. Готовил стейки — получились очень вкусными. Единственный минус — хотелось бы больше вариантов нарезки.',
      helpful: 15,
      verified: true,
      photos: []
    }
  ];

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = filterRating === 'all' || review.rating.toString() === filterRating;
    return matchesSearch && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Отзывы покупателей</h1>
            <p className="text-lg text-gray-600 mb-8">
              Читайте честные отзывы наших клиентов о качестве продуктов и сервисе
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Поиск отзывов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Рейтинг" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все оценки</SelectItem>
                  <SelectItem value="5">5 звезд</SelectItem>
                  <SelectItem value="4">4 звезды</SelectItem>
                  <SelectItem value="3">3 звезды</SelectItem>
                  <SelectItem value="2">2 звезды</SelectItem>
                  <SelectItem value="1">1 звезда</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Stats */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-center">Общая оценка</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-2">
                  {overallStats.averageRating}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(overallStats.averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600">Основано на {overallStats.totalReviews.toLocaleString()} отзывах</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Распределение оценок</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm w-8">{rating}</span>
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Progress 
                      value={(overallStats.ratings[rating] / overallStats.totalReviews) * 100} 
                      className="flex-1 h-2"
                    />
                    <span className="text-sm text-gray-600 w-12">
                      {overallStats.ratings[rating]}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Статистика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Проверенные покупки:</span>
                  <span className="text-sm font-medium">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">С фотографиями:</span>
                  <span className="text-sm font-medium">34%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Рекомендуют друзьям:</span>
                  <span className="text-sm font-medium">94%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Отзывы ({filteredReviews.length})
              </h2>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Сначала новые</SelectItem>
                  <SelectItem value="oldest">Сначала старые</SelectItem>
                  <SelectItem value="highest">Высокий рейтинг</SelectItem>
                  <SelectItem value="lowest">Низкий рейтинг</SelectItem>
                  <SelectItem value="helpful">По полезности</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img 
                        src={review.avatar} 
                        alt={review.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-gray-900">{review.author}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Проверенная покупка
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">для товара:</span>
                          <span className="text-sm font-medium text-green-600">{review.product}</span>
                        </div>

                        <p className="text-gray-700 mb-4">{review.text}</p>

                        {review.photos.length > 0 && (
                          <div className="flex gap-2 mb-4">
                            {review.photos.map((photo, index) => (
                              <img 
                                key={index}
                                src={photo} 
                                alt="Фото от покупателя"
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            Полезно ({review.helpful})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Ответить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Показать еще отзывы
              </Button>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <CardContent className="p-12 text-center">
              <Award className="h-16 w-16 mx-auto mb-6 text-yellow-200" />
              <h2 className="text-3xl font-bold mb-4">Награды и признание</h2>
              <p className="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
                Наши высокие рейтинги и положительные отзывы были отмечены экспертами отрасли
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Лучший сервис 2023</div>
                  <div className="text-sm text-yellow-200">Премия "Выбор покупателей"</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Топ-3 в категории</div>
                  <div className="text-sm text-yellow-200">Рейтинг "Продукты года"</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">4.8/5 звезд</div>
                  <div className="text-sm text-yellow-200">Средняя оценка клиентов</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Write Review CTA */}
        <section className="mt-16">
          <Card>
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Поделитесь своим мнением
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Ваш отзыв поможет другим покупателям сделать правильный выбор, 
                а нам — улучшить качество продуктов и сервиса
              </p>
              <Button size="lg" className="px-12">
                <Star className="h-4 w-4 mr-2" />
                Написать отзыв
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Reviews;