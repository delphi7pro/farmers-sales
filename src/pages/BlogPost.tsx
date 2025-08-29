import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  User, 
  Clock,
  Share2,
  Heart,
  MessageSquare,
  ArrowLeft,
  Tag,
  Eye
} from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data
  const post = {
    id: '1',
    title: 'Как выбрать самые свежие овощи: гид покупателя',
    content: `
      <p>Выбор качественных овощей и фруктов — это искусство, которому можно научиться. В этой статье мы поделимся профессиональными секретами, которые помогут вам всегда покупать самые свежие и вкусные продукты.</p>

      <h2>Основные признаки свежести</h2>
      <p>При выборе овощей обращайте внимание на несколько ключевых факторов:</p>
      
      <h3>Внешний вид</h3>
      <p>Свежие овощи должны иметь яркий, насыщенный цвет без темных пятен, вмятин или признаков увядания. Кожура должна быть упругой и блестящей.</p>

      <h3>Запах</h3>
      <p>Качественные овощи имеют приятный, характерный аромат. Избегайте продуктов с кислым, затхлым или неприятным запахом.</p>

      <h3>Текстура</h3>
      <p>Овощи должны быть твердыми на ощупь. Мягкость может указывать на начало процесса порчи.</p>

      <h2>Сезонность продуктов</h2>
      <p>Покупайте овощи и фрукты в сезон их естественного созревания. Сезонные продукты не только вкуснее, но и содержат больше витаминов и полезных веществ.</p>

      <h2>Особенности выбора разных овощей</h2>
      
      <h3>Помидоры</h3>
      <p>Выбирайте помидоры с равномерной окраской, без зеленых пятен у плодоножки. Они должны быть упругими, но не твердыми.</p>

      <h3>Огурцы</h3>
      <p>Свежие огурцы имеют темно-зеленый цвет и твердую текстуру. Избегайте желтых или мягких экземпляров.</p>

      <h3>Листовая зелень</h3>
      <p>Листья должны быть ярко-зелеными, без желтизны или темных пятен. Стебли должны быть сочными и хрустящими.</p>

      <h2>Заключение</h2>
      <p>Следуя этим простым правилам, вы всегда сможете выбрать самые качественные и свежие продукты для своей семьи. Помните: хорошие овощи — основа здорового питания!</p>
    `,
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Мария Петрова',
    authorImage: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
    date: '2024-01-15',
    readTime: '5 мин',
    category: 'Советы',
    views: 1247,
    likes: 89,
    comments: 23,
    tags: ['овощи', 'качество', 'выбор', 'свежесть', 'советы']
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'Органическое земледелие: мифы и реальность',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Экология'
    },
    {
      id: '3',
      title: 'Сезонное питание: что покупать зимой',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Здоровье'
    },
    {
      id: '5',
      title: 'Рецепты с фермерскими продуктами: зимние салаты',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Рецепты'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-green-600">Главная</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-green-600">Блог</Link>
          <span>/</span>
          <span className="text-gray-900">{post.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <Card>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} просмотров</span>
                  </div>
                </div>
                
                <CardTitle className="text-3xl">{post.title}</CardTitle>
                
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.authorImage} 
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-600">Эксперт по качеству</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                <Separator className="my-8" />
                
                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">Теги:</span>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Comments Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Комментарии ({post.comments})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      author: "Анна Смирнова",
                      date: "2024-01-16",
                      text: "Очень полезная статья! Теперь знаю, как правильно выбирать помидоры.",
                      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100"
                    },
                    {
                      author: "Михаил Петров",
                      date: "2024-01-16",
                      text: "Спасибо за советы! Особенно понравилась информация о сезонности продуктов.",
                      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
                    }
                  ].map((comment, index) => (
                    <div key={index} className="flex gap-4">
                      <img 
                        src={comment.avatar} 
                        alt={comment.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-gray-900">{comment.author}</span>
                          <span className="text-sm text-gray-500">
                            {new Date(comment.date).toLocaleDateString('ru-RU')}
                          </span>
                        </div>
                        <p className="text-gray-600">{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Back to Blog */}
              <Button variant="outline" className="w-full" asChild>
                <Link to="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Вернуться к блогу
                </Link>
              </Button>

              {/* Related Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Похожие статьи</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="group">
                      <Link to={`/blog/${relatedPost.id}`}>
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-32 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <Badge variant="outline" className="text-xs mb-2">
                        {relatedPost.category}
                      </Badge>
                      <h4 className="font-medium text-sm hover:text-green-600">
                        <Link to={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h4>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card>
                <CardHeader>
                  <CardTitle>Подписка на блог</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Получайте новые статьи на email
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Ваш email"
                      className="w-full px-3 py-2 border rounded-md text-sm"
                    />
                    <Button size="sm" className="w-full">
                      Подписаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;