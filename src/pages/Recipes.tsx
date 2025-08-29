import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Clock, 
  Users, 
  ChefHat,
  Star,
  Heart,
  Utensils,
  Filter
} from 'lucide-react';

const Recipes = () => {
  const recipes = [
    {
      id: '1',
      title: 'Салат из органических помидоров с базиликом',
      description: 'Простой и вкусный салат из свежих помидоров с ароматным базиликом и моцареллой',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: 15,
      servings: 4,
      difficulty: 'Легко',
      category: 'Салаты',
      rating: 4.8,
      reviews: 45,
      ingredients: ['Помидоры', 'Базилик', 'Моцарелла', 'Оливковое масло'],
      author: 'Шеф Анна',
      featured: true
    },
    {
      id: '2',
      title: 'Домашний творог с медом и орехами',
      description: 'Полезный завтрак из фермерского творога с натуральным медом и грецкими орехами',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: 5,
      servings: 2,
      difficulty: 'Легко',
      category: 'Завтраки',
      rating: 4.9,
      reviews: 67,
      ingredients: ['Творог', 'Мед', 'Грецкие орехи', 'Ягоды'],
      author: 'Мария Петрова',
      featured: false
    },
    {
      id: '3',
      title: 'Овощное рагу с фермерскими овощами',
      description: 'Сытное и полезное рагу из сезонных овощей с ароматными травами',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: 45,
      servings: 6,
      difficulty: 'Средне',
      category: 'Основные блюда',
      rating: 4.7,
      reviews: 89,
      ingredients: ['Кабачки', 'Баклажаны', 'Перец', 'Помидоры', 'Лук'],
      author: 'Дмитрий Козлов',
      featured: true
    },
    {
      id: '4',
      title: 'Зеленый смузи с фермерской зеленью',
      description: 'Витаминный смузи из свежей зелени, яблок и огурцов для здорового питания',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: 10,
      servings: 2,
      difficulty: 'Легко',
      category: 'Напитки',
      rating: 4.6,
      reviews: 34,
      ingredients: ['Шпинат', 'Яблоки', 'Огурцы', 'Лимон', 'Мед'],
      author: 'Елена Смирнова',
      featured: false
    },
    {
      id: '5',
      title: 'Запеченная курица с овощами',
      description: 'Сочная курица, запеченная с сезонными овощами в духовке',
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: 90,
      servings: 4,
      difficulty: 'Средне',
      category: 'Основные блюда',
      rating: 4.9,
      reviews: 156,
      ingredients: ['Курица', 'Картофель', 'Морковь', 'Лук', 'Розмарин'],
      author: 'Игорь Волков',
      featured: true
    },
    {
      id: '6',
      title: 'Ягодный пирог с фермерскими ягодами',
      description: 'Ароматный пирог с сезонными ягодами и хрустящей корочкой',
      image: 'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=600',
      cookTime: 60,
      servings: 8,
      difficulty: 'Сложно',
      category: 'Десерты',
      rating: 4.8,
      reviews: 78,
      ingredients: ['Мука', 'Ягоды', 'Сахар', 'Масло', 'Яйца'],
      author: 'Анна Волкова',
      featured: false
    }
  ];

  const categories = [
    { name: 'Все рецепты', count: 156 },
    { name: 'Салаты', count: 34 },
    { name: 'Основные блюда', count: 45 },
    { name: 'Завтраки', count: 28 },
    { name: 'Десерты', count: 23 },
    { name: 'Напитки', count: 26 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Рецепты с фермерскими продуктами</h1>
            <p className="text-lg text-gray-600 mb-8">
              Вкусные и полезные рецепты от наших шеф-поваров с использованием свежих фермерских продуктов
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Поиск рецептов..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.name} value={category.name.toLowerCase()}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Сложность" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">Легко</SelectItem>
                  <SelectItem value="medium">Средне</SelectItem>
                  <SelectItem value="hard">Сложно</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Категории</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.name} className="flex justify-between items-center">
                        <span className="text-sm hover:text-green-600 cursor-pointer">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Time Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Время приготовления</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">До 15 минут</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">15-30 минут</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">30-60 минут</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Более часа</span>
                    </label>
                  </div>
                </div>

                {/* Difficulty */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Сложность</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Легко</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Средне</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Сложно</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recipes Grid */}
          <div className="lg:col-span-3">
            {/* Featured Recipes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуемые рецепты</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recipes.filter(recipe => recipe.featured).map((recipe) => (
                  <Card key={recipe.id} className="group hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Link to={`/recipes/${recipe.id}`}>
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Badge className="absolute top-2 left-2">
                        {recipe.category}
                      </Badge>
                      <Badge variant="outline" className="absolute bottom-2 left-2 bg-white/90">
                        {recipe.difficulty}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        <Link to={`/recipes/${recipe.id}`} className="hover:text-green-600">
                          {recipe.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {recipe.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{recipe.cookTime} мин</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{recipe.servings} порций</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{recipe.rating}</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">от {recipe.author}</span>
                        <Button size="sm" asChild>
                          <Link to={`/recipes/${recipe.id}`}>
                            Готовить
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Recipes */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Все рецепты</h2>
                <p className="text-gray-600">Найдено {recipes.length} рецептов</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                  <Card key={recipe.id} className="group hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Link to={`/recipes/${recipe.id}`}>
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Badge className="absolute top-2 left-2">
                        {recipe.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{recipe.rating}</span>
                        <span className="text-xs text-gray-500">({recipe.reviews})</span>
                      </div>
                      <CardTitle className="text-lg">
                        <Link to={`/recipes/${recipe.id}`} className="hover:text-green-600">
                          {recipe.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {recipe.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{recipe.cookTime} мин</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{recipe.servings}</span>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {recipe.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">от {recipe.author}</span>
                        <Button size="sm" asChild>
                          <Link to={`/recipes/${recipe.id}`}>
                            <ChefHat className="h-4 w-4 mr-1" />
                            Готовить
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex gap-2">
                  <Button variant="outline" disabled>Предыдущая</Button>
                  <Button variant="default">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Следующая</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-green-600 to-green-800 text-white">
            <CardContent className="p-12 text-center">
              <Utensils className="h-16 w-16 mx-auto mb-6 text-green-200" />
              <h2 className="text-3xl font-bold mb-4">Поделитесь своим рецептом</h2>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                У вас есть интересный рецепт с фермерскими продуктами? 
                Поделитесь им с нашим сообществом!
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
                Добавить рецепт
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Recipes;