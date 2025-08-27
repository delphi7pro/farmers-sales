import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { 
  Search, 
  Filter, 
  Heart, 
  Star, 
  ShoppingCart,
  Grid3X3,
  List,
  SlidersHorizontal
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const { dispatch } = useCart();

  const categories = [
    { id: 'all', name: 'Все категории', count: 147 },
    { id: 'vegetables', name: 'Овощи', count: 45 },
    { id: 'fruits', name: 'Фрукты', count: 32 },
    { id: 'dairy', name: 'Молочные продукты', count: 18 },
    { id: 'meat', name: 'Мясо и птица', count: 24 },
    { id: 'greens', name: 'Зелень и травы', count: 28 }
  ];

  const products = [
    {
      id: '1',
      name: 'Органические помидоры',
      price: 350,
      originalPrice: 400,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Ферма Солнечная',
      rating: 4.9,
      reviews: 124,
      category: 'vegetables',
      inStock: true,
      isOrganic: true,
      description: 'Сочные красные помидоры, выращенные без химикатов'
    },
    {
      id: '2',
      name: 'Домашние яйца',
      price: 120,
      image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Птицеферма Утренняя',
      rating: 4.8,
      reviews: 89,
      category: 'dairy',
      inStock: true,
      isOrganic: true,
      description: 'Свежие яйца от кур свободного выгула'
    },
    {
      id: '3',
      name: 'Фермерское молоко',
      price: 80,
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Молочная ферма',
      rating: 4.9,
      reviews: 156,
      category: 'dairy',
      inStock: true,
      isOrganic: false,
      description: 'Натуральное цельное молоко высшего качества'
    },
    {
      id: '4',
      name: 'Свежая зелень',
      price: 150,
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Зеленая грядка',
      rating: 4.7,
      reviews: 67,
      category: 'greens',
      inStock: true,
      isOrganic: true,
      description: 'Микс свежей зелени: укроп, петрушка, базилик'
    },
    {
      id: '5',
      name: 'Сезонные яблоки',
      price: 200,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Яблоневый сад',
      rating: 4.6,
      reviews: 93,
      category: 'fruits',
      inStock: true,
      isOrganic: true,
      description: 'Хрустящие сладкие яблоки сорта Антоновка'
    },
    {
      id: '6',
      name: 'Фермерская говядина',
      price: 850,
      image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400',
      farmer: 'Мясная ферма',
      rating: 4.9,
      reviews: 45,
      category: 'meat',
      inStock: true,
      isOrganic: false,
      description: 'Мраморная говядина от коров травяного откорма'
    }
  ];

  const addToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        farmer: product.farmer
      }
    });
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Каталог продуктов</h1>
              <p className="text-gray-600">Свежие фермерские продукты высшего качества</p>
            </div>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Поиск продуктов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                  <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Категории</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <Checkbox
                            checked={selectedCategory === category.id}
                            onCheckedChange={() => setSelectedCategory(category.id)}
                          />
                          <span className="text-sm">{category.name}</span>
                        </label>
                        <span className="text-xs text-gray-500">({category.count})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Цена, ₽</h3>
                  <div className="flex gap-2">
                    <Input placeholder="От" type="number" />
                    <Input placeholder="До" type="number" />
                  </div>
                </div>

                <Separator />

                {/* Features */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Особенности</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm">Органические</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm">Сезонные</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm">Со скидкой</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <Checkbox />
                      <span className="text-sm">В наличии</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Найдено {filteredProducts.length} товаров
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Link to={`/products/${product.id}`}>
                        <img 
                          src={product.image} 
                          alt={product.name}
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
                      {product.isOrganic && (
                        <Badge className="absolute top-2 left-2 bg-green-600">
                          Органик
                        </Badge>
                      )}
                      {product.originalPrice && (
                        <Badge variant="destructive" className="absolute bottom-2 left-2">
                          Скидка
                        </Badge>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>
                      <CardTitle className="text-lg">
                        <Link to={`/products/${product.id}`} className="hover:text-green-600">
                          {product.name}
                        </Link>
                      </CardTitle>
                      <CardDescription>{product.farmer}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{product.originalPrice}₽</span>
                          )}
                        </div>
                        <Button size="sm" onClick={() => addToCart(product)}>
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          В корзину
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <Link to={`/products/${product.id}`}>
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </Link>
                          {product.isOrganic && (
                            <Badge className="absolute top-1 left-1 bg-green-600 text-xs">
                              Органик
                            </Badge>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                <Link to={`/products/${product.id}`} className="hover:text-green-600">
                                  {product.name}
                                </Link>
                              </h3>
                              <p className="text-green-600 font-medium">{product.farmer}</p>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600">{product.rating}</span>
                            <span className="text-xs text-gray-500">({product.reviews} отзывов)</span>
                          </div>
                          <p className="text-gray-600 mb-4">{product.description}</p>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold text-green-600">{product.price}₽</span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">{product.originalPrice}₽</span>
                              )}
                            </div>
                            <Button onClick={() => addToCart(product)}>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              В корзину
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

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
    </div>
  );
};

export default Products;