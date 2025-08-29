import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Calendar, 
  User, 
  Clock,
  ArrowRight,
  Tag,
  TrendingUp
} from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: '1',
      title: 'Как выбрать самые свежие овощи: гид покупателя',
      excerpt: 'Делимся секретами выбора качественных овощей и фруктов. Узнайте, на что обращать внимание при покупке.',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Мария Петрова',
      date: '2024-01-15',
      readTime: '5 мин',
      category: 'Советы',
      featured: true
    },
    {
      id: '2',
      title: 'Органическое земледелие: мифы и реальность',
      excerpt: 'Разбираемся в особенностях органического сельского хозяйства и его преимуществах для здоровья.',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Алексей Иванов',
      date: '2024-01-12',
      readTime: '8 мин',
      category: 'Экология',
      featured: false
    },
    {
      id: '3',
      title: 'Сезонное питание: что покупать зимой',
      excerpt: 'Рассказываем о зимних продуктах, которые помогут поддержать иммунитет и получить максимум витаминов.',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Елена Смирнова',
      date: '2024-01-10',
      readTime: '6 мин',
      category: 'Здоровье',
      featured: true
    },
    {
      id: '4',
      title: 'История нашей фермы: от идеи до успеха',
      excerpt: 'Узнайте историю создания ФермаДом и о том, как мы стали лидерами в сфере фермерских продуктов.',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Дмитрий Козлов',
      date: '2024-01-08',
      readTime: '10 мин',
      category: 'О компании',
      featured: false
    },
    {
      id: '5',
      title: 'Рецепты с фермерскими продуктами: зимние салаты',
      excerpt: 'Коллекция вкусных и полезных салатов из свежих фермерских овощей для зимнего меню.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Анна Волкова',
      date: '2024-01-05',
      readTime: '7 мин',
      category: 'Рецепты',
      featured: false
    },
    {
      id: '6',
      title: 'Как правильно хранить фермерские продукты',
      excerpt: 'Практические советы по хранению овощей, фруктов и молочных продуктов для максимального сохранения свежести.',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Игорь Петров',
      date: '2024-01-03',
      readTime: '4 мин',
      category: 'Советы',
      featured: false
    }
  ];

  const categories = [
    { name: 'Все статьи', count: 24 },
    { name: 'Советы', count: 8 },
    { name: 'Рецепты', count: 6 },
    { name: 'Экология', count: 4 },
    { name: 'Здоровье', count: 3 },
    { name: 'О компании', count: 3 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Блог ФермаДом</h1>
            <p className="text-lg text-gray-600 mb-8">
              Полезные статьи о здоровом питании, фермерских продуктах и экологии
            </p>
            
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Поиск статей..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.name} value={category.name.toLowerCase()}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
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
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    Категории
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.name} className="flex justify-between items-center py-2 border-b last:border-b-0">
                      <span className="text-sm hover:text-green-600 cursor-pointer">{category.name}</span>
                      <Badge variant="secondary">{category.count}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Популярные статьи
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex gap-3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <Link to={`/blog/${post.id}`} className="text-sm font-medium hover:text-green-600 line-clamp-2">
                          {post.title}
                        </Link>
                        <p className="text-xs text-gray-500 mt-1">{post.readTime}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуемые статьи</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.filter(post => post.featured).map((post) => (
                  <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Link to={`/blog/${post.id}`}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <Badge className="absolute top-4 left-4">
                        {post.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">
                        <Link to={`/blog/${post.id}`} className="hover:text-green-600">
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Все статьи</h2>
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="w-32 h-32 flex-shrink-0">
                          <Link to={`/blog/${post.id}`}>
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </Link>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            {post.featured && <Badge>Рекомендуем</Badge>}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            <Link to={`/blog/${post.id}`} className="hover:text-green-600">
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{post.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/blog/${post.id}`}>
                                Читать далее
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
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
      </div>
    </div>
  );
};

export default Blog;