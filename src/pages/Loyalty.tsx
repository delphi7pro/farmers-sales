import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Gift, 
  Crown,
  TrendingUp,
  Award,
  Calendar,
  ShoppingCart,
  Heart,
  Users,
  Zap,
  Target
} from 'lucide-react';

const Loyalty = () => {
  const userStats = {
    currentLevel: 'gold',
    points: 2345,
    pointsToNext: 655,
    totalSpent: 23450,
    ordersCount: 47,
    joinDate: '2022-03-15'
  };

  const levels = [
    {
      name: 'Новичок',
      id: 'bronze',
      minSpent: 0,
      color: 'bg-amber-600',
      benefits: ['1% кэшбэк', 'Базовая поддержка'],
      icon: Star
    },
    {
      name: 'Постоянный',
      id: 'silver',
      minSpent: 5000,
      color: 'bg-gray-400',
      benefits: ['2% кэшбэк', 'Приоритетная поддержка', 'Скидка на доставку'],
      icon: Award
    },
    {
      name: 'VIP',
      id: 'gold',
      minSpent: 15000,
      color: 'bg-yellow-500',
      benefits: ['3% кэшбэк', 'Персональный менеджер', 'Бесплатная доставка', 'Эксклюзивные товары'],
      icon: Crown,
      current: true
    },
    {
      name: 'Платиновый',
      id: 'platinum',
      minSpent: 50000,
      color: 'bg-purple-600',
      benefits: ['5% кэшбэк', 'VIP поддержка', 'Все привилегии', 'Индивидуальные предложения'],
      icon: Zap
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'earned',
      amount: 125,
      description: 'Заказ ORD-2024-001',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'spent',
      amount: -500,
      description: 'Скидка на заказ',
      date: '2024-01-12'
    },
    {
      id: 3,
      type: 'earned',
      amount: 89,
      description: 'Заказ ORD-2024-002',
      date: '2024-01-10'
    },
    {
      id: 4,
      type: 'bonus',
      amount: 200,
      description: 'Бонус за отзыв',
      date: '2024-01-08'
    }
  ];

  const availableRewards = [
    {
      id: 1,
      name: 'Скидка 10%',
      cost: 500,
      description: 'Скидка на следующий заказ',
      type: 'discount',
      available: true
    },
    {
      id: 2,
      name: 'Бесплатная доставка',
      cost: 200,
      description: 'Бесплатная доставка любого заказа',
      type: 'delivery',
      available: true
    },
    {
      id: 3,
      name: 'Эксклюзивный товар',
      cost: 1000,
      description: 'Доступ к ограниченной коллекции',
      type: 'product',
      available: true
    },
    {
      id: 4,
      name: 'Скидка 20%',
      cost: 1500,
      description: 'Большая скидка на заказ',
      type: 'discount',
      available: true
    },
    {
      id: 5,
      name: 'VIP консультация',
      cost: 800,
      description: 'Персональная консультация диетолога',
      type: 'service',
      available: true
    },
    {
      id: 6,
      name: 'Подарочный набор',
      cost: 2000,
      description: 'Эксклюзивный набор фермерских продуктов',
      type: 'gift',
      available: false
    }
  ];

  const currentLevel = levels.find(level => level.id === userStats.currentLevel);
  const nextLevel = levels.find(level => level.minSpent > userStats.totalSpent);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Программа лояльности</h1>
            <p className="text-xl text-purple-100 mb-8">
              Покупайте фермерские продукты, накапливайте баллы и получайте эксклюзивные привилегии
            </p>
            <div className="flex items-center justify-center gap-2">
              {currentLevel && (
                <Badge variant="secondary" className="text-lg px-6 py-3">
                  <currentLevel.icon className="h-5 w-5 mr-2" />
                  Ваш статус: {currentLevel.name}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* User Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">{userStats.points}</div>
                <div className="text-gray-600">Баллов</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">{userStats.ordersCount}</div>
                <div className="text-gray-600">Заказов</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{userStats.totalSpent.toLocaleString()}₽</div>
                <div className="text-gray-600">Потрачено</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {Math.floor((Date.now() - new Date(userStats.joinDate).getTime()) / (1000 * 60 * 60 * 24 * 30))}
                </div>
                <div className="text-gray-600">Месяцев с нами</div>
              </CardContent>
            </Card>
          </div>

          {/* Current Level Progress */}
          {nextLevel && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Прогресс до следующего уровня
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>До уровня "{nextLevel.name}"</span>
                    <span className="font-medium">
                      {(nextLevel.minSpent - userStats.totalSpent).toLocaleString()}₽ осталось
                    </span>
                  </div>
                  <Progress 
                    value={(userStats.totalSpent / nextLevel.minSpent) * 100} 
                    className="h-3"
                  />
                  <p className="text-sm text-gray-600">
                    Совершите покупок еще на {(nextLevel.minSpent - userStats.totalSpent).toLocaleString()}₽ 
                    и получите статус "{nextLevel.name}" с дополнительными привилегиями!
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <Tabs defaultValue="rewards" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="rewards">Награды</TabsTrigger>
              <TabsTrigger value="levels">Уровни</TabsTrigger>
              <TabsTrigger value="history">История</TabsTrigger>
              <TabsTrigger value="rules">Правила</TabsTrigger>
            </TabsList>

            <TabsContent value="rewards">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Доступные награды</h2>
                  <p className="text-gray-600">У вас {userStats.points} баллов</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availableRewards.map((reward) => (
                    <Card key={reward.id} className={`hover:shadow-lg transition-shadow ${!reward.available ? 'opacity-50' : ''}`}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{reward.name}</CardTitle>
                            <CardDescription>{reward.description}</CardDescription>
                          </div>
                          <Badge variant={reward.available ? 'default' : 'secondary'}>
                            {reward.cost} баллов
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          className="w-full"
                          disabled={!reward.available || userStats.points < reward.cost}
                        >
                          {userStats.points >= reward.cost ? 'Обменять' : 'Недостаточно баллов'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="levels">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Уровни программы лояльности</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {levels.map((level) => {
                    const LevelIcon = level.icon;
                    return (
                      <Card key={level.id} className={`${level.current ? 'border-purple-500 border-2' : ''}`}>
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 ${level.color} rounded-full flex items-center justify-center`}>
                              <LevelIcon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="flex items-center gap-2">
                                {level.name}
                                {level.current && <Badge>Текущий</Badge>}
                              </CardTitle>
                              <CardDescription>
                                От {level.minSpent.toLocaleString()}₽ покупок
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {level.benefits.map((benefit, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">История баллов</h2>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex justify-between items-center py-3 border-b last:border-b-0">
                          <div>
                            <p className="font-medium text-gray-900">{transaction.description}</p>
                            <p className="text-sm text-gray-600">
                              {new Date(transaction.date).toLocaleDateString('ru-RU')}
                            </p>
                          </div>
                          <div className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount > 0 ? '+' : ''}{transaction.amount} баллов
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="rules">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Правила программы</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Как накапливать баллы</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <ShoppingCart className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">За покупки</p>
                          <p className="text-sm text-gray-600">1-5% от суммы заказа в зависимости от уровня</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-yellow-500 mt-1" />
                        <div>
                          <p className="font-medium">За отзывы</p>
                          <p className="text-sm text-gray-600">50-200 баллов за каждый отзыв с фото</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">За приглашение друзей</p>
                          <p className="text-sm text-gray-600">500 баллов за каждого нового клиента</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-purple-600 mt-1" />
                        <div>
                          <p className="font-medium">В день рождения</p>
                          <p className="text-sm text-gray-600">Специальный бонус 1000 баллов</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Как тратить баллы</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Gift className="h-5 w-5 text-green-600 mt-1" />
                        <div>
                          <p className="font-medium">Скидки на заказы</p>
                          <p className="text-sm text-gray-600">1 балл = 1₽ скидки</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-blue-600 mt-1" />
                        <div>
                          <p className="font-medium">Эксклюзивные товары</p>
                          <p className="text-sm text-gray-600">Доступ к ограниченным коллекциям</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Heart className="h-5 w-5 text-red-600 mt-1" />
                        <div>
                          <p className="font-medium">Подарки</p>
                          <p className="text-sm text-gray-600">Фирменные подарки и сувениры</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Важные условия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>• Баллы начисляются в течение 24 часов после доставки заказа</p>
                      <p>• Баллы действительны в течение 2 лет с момента начисления</p>
                      <p>• Минимальная сумма для списания баллов — 100 баллов</p>
                      <p>• Баллами можно оплатить до 50% стоимости заказа</p>
                      <p>• Баллы не начисляются при оплате баллами</p>
                      <p>• При возврате товара баллы списываются с баланса</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Loyalty;