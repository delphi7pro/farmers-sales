import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Truck, 
  Clock, 
  MapPin, 
  Package,
  Shield,
  CreditCard,
  Phone,
  CheckCircle
} from 'lucide-react';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Доставка и оплата</h1>
            <p className="text-lg text-gray-600">
              Быстро, надежно и с заботой о качестве ваших продуктов
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Delivery Options */}
          <div className="lg:col-span-2 space-y-8">
            {/* Delivery Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Способы доставки
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Truck className="h-6 w-6 text-green-600" />
                      <h3 className="text-lg font-semibold">Курьерская доставка</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Доставка по указанному адресу в удобное время
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>По Москве:</span>
                        <span className="font-medium">200₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Московская область:</span>
                        <span className="font-medium">350₽</span>
                      </div>
                      <div className="flex justify-between">
                        <span>При заказе от 1000₽:</span>
                        <Badge variant="secondary">Бесплатно</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="h-6 w-6 text-blue-600" />
                      <h3 className="text-lg font-semibold">Самовывоз</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      Забрать заказ в пункте выдачи
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Стоимость:</span>
                        <Badge variant="secondary">Бесплатно</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Пунктов выдачи:</span>
                        <span className="font-medium">15 в Москве</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Время работы:</span>
                        <span className="font-medium">9:00 - 21:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  График доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Экспресс-доставка</h3>
                      <p className="text-sm text-green-700 mb-2">
                        Заказ до 14:00 - доставка в тот же день
                      </p>
                      <div className="text-xs text-green-600">
                        Временные слоты: 18:00-20:00, 20:00-22:00
                      </div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Плановая доставка</h3>
                      <p className="text-sm text-blue-700 mb-2">
                        Выберите удобный день и время
                      </p>
                      <div className="text-xs text-blue-600">
                        Временные слоты: 10:00-14:00, 14:00-18:00, 18:00-22:00
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50">
                    <p className="text-sm text-yellow-800">
                      <strong>Важно:</strong> Для сохранения свежести продуктов убедитесь, 
                      что кто-то будет дома в указанное время доставки.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Способы оплаты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Онлайн-оплата</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <span>Банковские карты (Visa, MasterCard, МИР)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                        <span>Apple Pay, Google Pay, Samsung Pay</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-gray-400" />
                        <span>Яндекс.Деньги, WebMoney</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">Оплата при получении</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Package className="h-5 w-5 text-gray-400" />
                        <span>Наличными курьеру</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CreditCard className="h-5 w-5 text-gray-400" />
                        <span>Картой курьеру</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Zones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Зоны доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-2">Москва</h3>
                      <p className="text-sm text-green-700 mb-2">В пределах МКАД</p>
                      <div className="text-lg font-bold text-green-600">200₽</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-2">Ближнее Подмосковье</h3>
                      <p className="text-sm text-blue-700 mb-2">До 30 км от МКАД</p>
                      <div className="text-lg font-bold text-blue-600">350₽</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-2">Дальнее Подмосковье</h3>
                      <p className="text-sm text-purple-700 mb-2">30-50 км от МКАД</p>
                      <div className="text-lg font-bold text-purple-600">500₽</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Условия доставки</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Бесплатная доставка от 1000₽</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Доставка в день заказа</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Холодовая цепь</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>SMS уведомления</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Гарантия свежести</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-semibold">Контакты службы доставки</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span>+7 (495) 123-45-67</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>Ежедневно 8:00 - 22:00</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full" asChild>
                  <a href="tel:+74951234567">Позвонить курьеру</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;