import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  CreditCard, 
  Mail,
  Phone,
  Calendar,
  Heart,
  Star,
  Check,
  Download,
  Send
} from 'lucide-react';

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('classic');

  const predefinedAmounts = [1000, 2000, 3000, 5000, 10000];

  const designs = [
    {
      id: 'classic',
      name: 'Классический',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Элегантный дизайн с фермерскими мотивами'
    },
    {
      id: 'seasonal',
      name: 'Сезонный',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Дизайн с зимними овощами и фруктами'
    },
    {
      id: 'premium',
      name: 'Премиум',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Роскошный дизайн для особых случаев'
    },
    {
      id: 'eco',
      name: 'Эко',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Экологичный дизайн с зеленью'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Подарочные карты</h1>
            <p className="text-xl text-pink-100 mb-8">
              Подарите близким возможность выбрать свежие фермерские продукты. 
              Идеальный подарок для тех, кто ценит качество и натуральность
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Gift className="h-4 w-4 mr-2" />
                Любая сумма
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Calendar className="h-4 w-4 mr-2" />
                Срок действия 1 год
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Heart className="h-4 w-4 mr-2" />
                Красивый дизайн
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Gift Card Creator */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5" />
                  Создать подарочную карту
                </CardTitle>
                <CardDescription>
                  Настройте подарочную карту по своему вкусу
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <Label className="text-base font-medium mb-4 block">Сумма подарочной карты</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount.toString() ? 'default' : 'outline'}
                        onClick={() => {
                          setSelectedAmount(amount.toString());
                          setCustomAmount('');
                        }}
                        className="h-12"
                      >
                        {amount.toLocaleString()}₽
                      </Button>
                    ))}
                  </div>
                  <div>
                    <Label htmlFor="customAmount">Или введите свою сумму</Label>
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="Минимум 500₽"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount('');
                      }}
                    />
                  </div>
                </div>

                {/* Design Selection */}
                <div>
                  <Label className="text-base font-medium mb-4 block">Выберите дизайн</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {designs.map((design) => (
                      <div
                        key={design.id}
                        className={`relative cursor-pointer rounded-lg border-2 overflow-hidden ${
                          selectedDesign === design.id ? 'border-purple-500' : 'border-gray-200'
                        }`}
                        onClick={() => setSelectedDesign(design.id)}
                      >
                        <img 
                          src={design.image} 
                          alt={design.name}
                          className="w-full h-24 object-cover"
                        />
                        <div className="p-3">
                          <h4 className="font-medium text-sm">{design.name}</h4>
                          <p className="text-xs text-gray-600">{design.description}</p>
                        </div>
                        {selectedDesign === design.id && (
                          <div className="absolute top-2 right-2">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                              <Check className="h-4 w-4 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recipient Info */}
                <div>
                  <Label className="text-base font-medium mb-4 block">Информация о получателе</Label>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="recipientName">Имя получателя</Label>
                        <Input id="recipientName" placeholder="Анна Иванова" />
                      </div>
                      <div>
                        <Label htmlFor="recipientEmail">Email получателя</Label>
                        <Input id="recipientEmail" type="email" placeholder="anna@example.com" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Персональное сообщение</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Поздравляю с днем рождения! Желаю здоровья и счастья..."
                        className="min-h-[100px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="senderName">Ваше имя</Label>
                      <Input id="senderName" placeholder="От кого подарок" />
                    </div>
                  </div>
                </div>

                {/* Delivery Options */}
                <div>
                  <Label className="text-base font-medium mb-4 block">Способ доставки</Label>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <input type="radio" name="delivery" value="email" defaultChecked />
                      <div className="flex items-center gap-3 flex-1">
                        <Mail className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Email</p>
                          <p className="text-sm text-gray-600">Мгновенная доставка на email</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Бесплатно</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-3 p-3 border rounded-lg">
                      <input type="radio" name="delivery" value="physical" />
                      <div className="flex items-center gap-3 flex-1">
                        <Gift className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">Физическая карта</p>
                          <p className="text-sm text-gray-600">Красивая карта в подарочной упаковке</p>
                        </div>
                      </div>
                      <span className="font-medium">200₽</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview and Purchase */}
          <div className="space-y-8">
            {/* Gift Card Preview */}
            <Card>
              <CardHeader>
                <CardTitle>Предварительный просмотр</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-6 text-white">
                  <div className="absolute top-4 right-4">
                    <Gift className="h-8 w-8 text-green-200" />
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">ФермаДом</h3>
                    <p className="text-green-100">Подарочная карта</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-3xl font-bold">
                      {(selectedAmount || customAmount || '0').toLocaleString()}₽
                    </div>
                  </div>
                  <div className="text-sm text-green-100">
                    Действительна до: {new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU')}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Purchase Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Итого к оплате</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Номинал карты:</span>
                  <span className="font-medium">
                    {(selectedAmount || customAmount || '0').toLocaleString()}₽
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Доставка:</span>
                  <span className="font-medium">Бесплатно</span>
                </div>
                <div className="flex justify-between">
                  <span>Комиссия:</span>
                  <span className="font-medium">0₽</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>К оплате:</span>
                  <span className="text-green-600">
                    {(selectedAmount || customAmount || '0').toLocaleString()}₽
                  </span>
                </div>

                <Button 
                  size="lg" 
                  className="w-full"
                  disabled={!selectedAmount && !customAmount}
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Купить подарочную карту
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Преимущества наших подарочных карт</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Срок действия 1 год</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Можно использовать частями</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Действует на все товары</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm">Бесплатная доставка карты</span>
                </div>
              </CardContent>
            </Card>

            {/* How it Works */}
            <Card>
              <CardHeader>
                <CardTitle>Как это работает</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Выберите сумму и дизайн</p>
                    <p className="text-sm text-gray-600">Настройте карту под получателя</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Оплатите и отправьте</p>
                    <p className="text-sm text-gray-600">Карта будет доставлена получателю</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Получатель делает покупки</p>
                    <p className="text-sm text-gray-600">Использует карту для заказов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Gift Sets */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Популярные подарочные наборы</h2>
            <p className="text-lg text-gray-600">Готовые решения для подарков</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Овощной набор"
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600">
                  Хит продаж
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>Овощной набор "Здоровье"</CardTitle>
                <CardDescription>Набор свежих органических овощей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">4.9 (156 отзывов)</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Помидоры, огурцы, перец, зелень, морковь
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">1,200₽</span>
                    <Button size="sm">
                      <Gift className="h-4 w-4 mr-1" />
                      Подарить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Молочный набор"
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Молочный набор "Традиция"</CardTitle>
                <CardDescription>Натуральные молочные продукты</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">4.8 (89 отзывов)</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Молоко, творог, сметана, масло, яйца
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">800₽</span>
                    <Button size="sm">
                      <Gift className="h-4 w-4 mr-1" />
                      Подарить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Фруктовый набор"
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Фруктовый набор "Витамины"</CardTitle>
                <CardDescription>Сезонные фрукты и ягоды</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">4.7 (124 отзыва)</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Яблоки, груши, апельсины, бананы
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">950₽</span>
                    <Button size="sm">
                      <Gift className="h-4 w-4 mr-1" />
                      Подарить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Часто задаваемые вопросы</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Как долго действует подарочная карта?</h4>
                    <p className="text-sm text-gray-600">
                      Подарочная карта действует в течение 1 года с момента покупки.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Можно ли использовать карту частями?</h4>
                    <p className="text-sm text-gray-600">
                      Да, остаток средств сохраняется и может быть использован в следующих заказах.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Что если карта потерялась?</h4>
                    <p className="text-sm text-gray-600">
                      Обратитесь в службу поддержки с номером карты для восстановления.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Можно ли вернуть подарочную карту?</h4>
                    <p className="text-sm text-gray-600">
                      Неиспользованные карты можно вернуть в течение 14 дней.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Есть ли ограничения по товарам?</h4>
                    <p className="text-sm text-gray-600">
                      Карта действует на все товары в каталоге без ограничений.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Как проверить баланс карты?</h4>
                    <p className="text-sm text-gray-600">
                      Введите номер карты на сайте или позвоните в службу поддержки.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default GiftCards;