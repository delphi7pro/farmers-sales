import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard,
  Truck,
  MapPin,
  Clock,
  Phone,
  Mail,
  User,
  Home,
  Calendar,
  Shield
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Checkout = () => {
  const { state } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState('courier');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [deliveryDate, setDeliveryDate] = useState('today');

  const deliveryFee = state.total > 1000 ? 0 : 200;
  const discount = state.total > 2000 ? state.total * 0.1 : 0;
  const finalTotal = state.total + deliveryFee - discount;

  const deliveryOptions = [
    {
      id: 'courier',
      name: 'Курьерская доставка',
      description: 'Доставка по указанному адресу',
      price: deliveryFee,
      icon: Truck
    },
    {
      id: 'pickup',
      name: 'Самовывоз',
      description: 'Забрать в пункте выдачи',
      price: 0,
      icon: MapPin
    }
  ];

  const paymentOptions = [
    {
      id: 'card',
      name: 'Банковская карта',
      description: 'Visa, MasterCard, МИР',
      icon: CreditCard
    },
    {
      id: 'cash',
      name: 'Наличными курьеру',
      description: 'Оплата при получении',
      icon: Home
    }
  ];

  const timeSlots = [
    { id: 'today', label: 'Сегодня', time: '18:00 - 22:00', available: true },
    { id: 'tomorrow', label: 'Завтра', time: '10:00 - 14:00', available: true },
    { id: 'tomorrow-evening', label: 'Завтра', time: '18:00 - 22:00', available: true },
    { id: 'day-after', label: 'Послезавтра', time: '10:00 - 14:00', available: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Оформление заказа</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Контактная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Имя *</Label>
                      <Input id="firstName" placeholder="Введите имя" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия *</Label>
                      <Input id="lastName" placeholder="Введите фамилию" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="example@mail.ru" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5" />
                    Способ доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                    <div className="space-y-3">
                      {deliveryOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <div className="flex items-center gap-3 flex-1">
                            <option.icon className="h-5 w-5 text-gray-400" />
                            <div className="flex-1">
                              <Label htmlFor={option.id} className="font-medium cursor-pointer">
                                {option.name}
                              </Label>
                              <p className="text-sm text-gray-600">{option.description}</p>
                            </div>
                            <div className="text-right">
                              {option.price === 0 ? (
                                <Badge variant="secondary">Бесплатно</Badge>
                              ) : (
                                <span className="font-medium">{option.price}₽</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              {deliveryMethod === 'courier' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Адрес доставки
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address">Адрес *</Label>
                      <Input id="address" placeholder="Улица, дом, квартира" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">Город *</Label>
                        <Input id="city" placeholder="Москва" />
                      </div>
                      <div>
                        <Label htmlFor="entrance">Подъезд</Label>
                        <Input id="entrance" placeholder="1" />
                      </div>
                      <div>
                        <Label htmlFor="floor">Этаж</Label>
                        <Input id="floor" placeholder="5" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="comment">Комментарий к адресу</Label>
                      <Textarea id="comment" placeholder="Дополнительная информация для курьера" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Delivery Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Время доставки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={deliveryDate} onValueChange={setDeliveryDate}>
                    <div className="space-y-3">
                      {timeSlots.map((slot) => (
                        <div key={slot.id} className={`flex items-center space-x-3 p-3 border rounded-lg ${!slot.available ? 'opacity-50' : ''}`}>
                          <RadioGroupItem value={slot.id} id={slot.id} disabled={!slot.available} />
                          <div className="flex-1">
                            <Label htmlFor={slot.id} className={`font-medium ${slot.available ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                              {slot.label}
                            </Label>
                            <p className="text-sm text-gray-600">{slot.time}</p>
                          </div>
                          {!slot.available && (
                            <Badge variant="outline">Недоступно</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Способ оплаты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-3">
                      {paymentOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <RadioGroupItem value={option.id} id={option.id} />
                          <div className="flex items-center gap-3 flex-1">
                            <option.icon className="h-5 w-5 text-gray-400" />
                            <div>
                              <Label htmlFor={option.id} className="font-medium cursor-pointer">
                                {option.name}
                              </Label>
                              <p className="text-sm text-gray-600">{option.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Additional Options */}
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter" className="text-sm">
                        Подписаться на новости и специальные предложения
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        Я согласен с <Link to="/terms" className="text-green-600 hover:underline">условиями использования</Link> и <Link to="/privacy" className="text-green-600 hover:underline">политикой конфиденциальности</Link>
                      </Label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Ваш заказ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Order Items */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.farmer}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-gray-600">{item.quantity} шт.</span>
                            <span className="font-medium text-sm">{(item.price * item.quantity).toLocaleString()}₽</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Order Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Товары ({state.items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                      <span>{state.total.toLocaleString()}₽</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Доставка</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <Badge variant="secondary" className="text-xs">Бесплатно</Badge>
                        ) : (
                          `${deliveryFee}₽`
                        )}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>Скидка 10%</span>
                        <span>-{discount.toLocaleString()}₽</span>
                      </div>
                    )}
                  </div>

                  <Separator />

                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого</span>
                    <span className="text-green-600">{finalTotal.toLocaleString()}₽</span>
                  </div>

                  <Button size="lg" className="w-full">
                    Подтвердить заказ
                  </Button>

                  {/* Security Info */}
                  <div className="flex items-center gap-2 text-xs text-gray-600 pt-4 border-t">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Ваши данные защищены SSL-шифрованием</span>
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

export default Checkout;