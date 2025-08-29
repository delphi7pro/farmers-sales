import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Clock, Users, ChefHat, Star, Heart, Share2, ArrowLeft, ShoppingCart, CheckCircle, Printer as Print } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const RecipeDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();

  // Mock recipe data
  const recipe = {
    id: '1',
    title: 'Салат из органических помидоров с базиликом',
    description: 'Простой и вкусный салат из свежих помидоров с ароматным базиликом и моцареллой',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    cookTime: 15,
    prepTime: 10,
    servings: 4,
    difficulty: 'Легко',
    category: 'Салаты',
    rating: 4.8,
    reviews: 45,
    author: 'Шеф Анна',
    authorImage: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
    ingredients: [
      { name: 'Органические помидоры', amount: '500 г', price: 350, available: true },
      { name: 'Свежий базилик', amount: '30 г', price: 120, available: true },
      { name: 'Моцарелла', amount: '200 г', price: 280, available: true },
      { name: 'Оливковое масло Extra Virgin', amount: '3 ст.л.', price: 450, available: true },
      { name: 'Бальзамический уксус', amount: '1 ст.л.', price: 320, available: false },
      { name: 'Морская соль', amount: 'по вкусу', price: 80, available: true },
      { name: 'Черный перец', amount: 'по вкусу', price: 150, available: true }
    ],
    instructions: [
      'Помойте помидоры и нарежьте их крупными дольками',
      'Моцареллу нарежьте кубиками среднего размера',
      'Листья базилика аккуратно порвите руками',
      'В большой миске смешайте помидоры, моцареллу и базилик',
      'Приготовьте заправку: смешайте оливковое масло с бальзамическим уксусом',
      'Заправьте салат, добавьте соль и перец по вкусу',
      'Дайте салату настояться 5-10 минут перед подачей',
      'Подавайте при комнатной температуре'
    ],
    tips: [
      'Используйте помидоры комнатной температуры для лучшего вкуса',
      'Не режьте базилик ножом — это может привести к потемнению',
      'Добавляйте соль непосредственно перед подачей'
    ],
    nutrition: {
      calories: 245,
      protein: 12,
      carbs: 8,
      fat: 18,
      fiber: 3
    }
  };

  const relatedRecipes = [
    {
      id: '2',
      title: 'Домашний творог с медом',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300',
      cookTime: 5,
      difficulty: 'Легко'
    },
    {
      id: '3',
      title: 'Овощное рагу',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=300',
      cookTime: 45,
      difficulty: 'Средне'
    },
    {
      id: '4',
      title: 'Зеленый смузи',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300',
      cookTime: 10,
      difficulty: 'Легко'
    }
  ];

  const addIngredientsToCart = () => {
    recipe.ingredients.filter(ing => ing.available).forEach(ingredient => {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: Math.random().toString(),
          name: ingredient.name,
          price: ingredient.price,
          image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
          farmer: 'Различные фермеры'
        }
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-green-600">Главная</Link>
          <span>/</span>
          <Link to="/recipes" className="hover:text-green-600">Рецепты</Link>
          <span>/</span>
          <span className="text-gray-900">{recipe.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recipe Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <Card>
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4">
                  {recipe.category}
                </Badge>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={recipe.authorImage} 
                      alt={recipe.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">{recipe.author}</p>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{recipe.rating}</span>
                        <span className="text-sm text-gray-500">({recipe.reviews} отзывов)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Print className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardTitle className="text-3xl mb-4">{recipe.title}</CardTitle>
                <CardDescription className="text-lg">{recipe.description}</CardDescription>
                
                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Время готовки</p>
                      <p className="text-sm text-gray-600">{recipe.cookTime} минут</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Порций</p>
                      <p className="text-sm text-gray-600">{recipe.servings}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Сложность</p>
                      <p className="text-sm text-gray-600">{recipe.difficulty}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Instructions */}
            <Card>
              <CardHeader>
                <CardTitle>Пошаговое приготовление</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recipe.instructions.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle>Советы шеф-повара</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Button variant="outline" className="w-full" asChild>
              <Link to="/recipes">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Все рецепты
              </Link>
            </Button>

            {/* Ingredients */}
            <Card>
              <CardHeader>
                <CardTitle>Ингредиенты</CardTitle>
                <CardDescription>На {recipe.servings} порции</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex-1">
                        <p className="text-sm font-medium">{ingredient.name}</p>
                        <p className="text-xs text-gray-600">{ingredient.amount}</p>
                      </div>
                      {ingredient.available ? (
                        <span className="text-sm text-green-600 font-medium">{ingredient.price}₽</span>
                      ) : (
                        <Badge variant="outline" className="text-xs">Нет в наличии</Badge>
                      )}
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Общая стоимость:</span>
                    <span className="font-bold text-green-600">
                      {recipe.ingredients.filter(ing => ing.available).reduce((sum, ing) => sum + ing.price, 0)}₽
                    </span>
                  </div>
                  <Button className="w-full" onClick={addIngredientsToCart}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Купить все ингредиенты
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Nutrition */}
            <Card>
              <CardHeader>
                <CardTitle>Пищевая ценность</CardTitle>
                <CardDescription>На 1 порцию</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{recipe.nutrition.calories}</div>
                    <div className="text-xs text-gray-600">ккал</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{recipe.nutrition.protein}</div>
                    <div className="text-xs text-gray-600">белки, г</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{recipe.nutrition.carbs}</div>
                    <div className="text-xs text-gray-600">углеводы, г</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{recipe.nutrition.fat}</div>
                    <div className="text-xs text-gray-600">жиры, г</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Recipes */}
            <Card>
              <CardHeader>
                <CardTitle>Похожие рецепты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedRecipes.map((relatedRecipe) => (
                  <div key={relatedRecipe.id} className="group">
                    <Link to={`/recipes/${relatedRecipe.id}`}>
                      <img 
                        src={relatedRecipe.image} 
                        alt={relatedRecipe.title}
                        className="w-full h-24 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <h4 className="font-medium text-sm hover:text-green-600 mb-1">
                      <Link to={`/recipes/${relatedRecipe.id}`}>
                        {relatedRecipe.title}
                      </Link>
                    </h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{relatedRecipe.cookTime} мин</span>
                      <span>{relatedRecipe.difficulty}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comments Section */}
        <section className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Отзывы о рецепте ({recipe.reviews})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    author: "Мария Иванова",
                    rating: 5,
                    date: "2024-01-16",
                    text: "Потрясающий рецепт! Готовила для семьи, всем очень понравилось. Обязательно буду готовить еще.",
                    helpful: 12
                  },
                  {
                    author: "Дмитрий Петров",
                    rating: 4,
                    date: "2024-01-14",
                    text: "Хороший рецепт, но я добавил немного больше базилика. Получилось очень ароматно!",
                    helpful: 8
                  },
                  {
                    author: "Елена Смирнова",
                    rating: 5,
                    date: "2024-01-12",
                    text: "Простой и вкусный салат. Идеально подходит для летнего ужина. Спасибо за рецепт!",
                    helpful: 15
                  }
                ].map((review, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium">{review.author}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString('ru-RU')}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3">{review.text}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-1" />
                        Полезно ({review.helpful})
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default RecipeDetail;