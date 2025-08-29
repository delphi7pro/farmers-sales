import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  User, 
  Settings, 
  Bell,
  CreditCard,
  MapPin,
  Shield,
  Gift,
  Star,
  Edit,
  Save,
  Camera
} from 'lucide-react';

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);

  const userProfile = {
    name: 'Анна Смирнова',
    email: 'anna.smirnova@example.com',
    phone: '+7 (495) 123-45-67',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
    memberSince: '2022-03-15',
    totalOrders: 47,
    totalSpent: 23450,
    loyaltyPoints: 2345,
    favoriteProducts: 12,
    reviews: 8
  };

  const addresses = [
    {
      id: 1,
      title: 'Дом',
      address: 'г. Москва, ул. Ленина, д. 123, кв. 45',
      isDefault: true
    },
    {
      id: 2,
      title: 'Офис',
      address: 'г. Москва, ул. Тверская, д. 10, оф. 205',
      isDefault: false
    }
  ];

  const paymentMethods = [
    {
      id: 1,
      type: 'card',
      last4: '1234',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: 2,
      type: 'card',
      last4: '5678',
      brand: 'MasterCard',
      isDefault: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="relative">
              <img 
                src={userProfile.avatar} 
                alt={userProfile.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              <Button size="icon" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
              <p className="text-gray-600">Клиент с {new Date(userProfile.memberSince).toLocaleDateString('ru-RU')}</p>
              <div className="flex items-center gap-4 mt-2">
                <Badge className="bg-green-600">
                  <Star className="h-3 w-3 mr-1" />
                  VIP клиент
                </Badge>
                <span className="text-sm text-gray-600">{userProfile.loyaltyPoints} бонусных баллов</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{userProfile.totalOrders}</div>
                <div className="text-sm text-gray-600">Заказов</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{userProfile.totalSpent.toLocaleString()}₽</div>
                <div className="text-sm text-gray-600">Потрачено</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">{userProfile.favoriteProducts}</div>
                <div className="text-sm text-gray-600">В избранном</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">{userProfile.reviews}</div>
                <div className="text-sm text-gray-600">Отзывов</div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Профиль
              </TabsTrigger>
              <TabsTrigger value="addresses" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Адреса
              </TabsTrigger>
              <TabsTrigger value="payment" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Оплата
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Уведомления
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Безопасность
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Личная информация</CardTitle>
                      <CardDescription>Управляйте своими личными данными</CardDescription>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      {isEditing ? <Save className="h-4 w-4 mr-2" /> : <Edit className="h-4 w-4 mr-2" />}
                      {isEditing ? 'Сохранить' : 'Редактировать'}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">Имя</Label>
                      <Input 
                        id="firstName" 
                        defaultValue="Анна" 
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Фамилия</Label>
                      <Input 
                        id="lastName" 
                        defaultValue="Смирнова" 
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email"
                        defaultValue={userProfile.email} 
                        disabled={!isEditing}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон</Label>
                      <Input 
                        id="phone" 
                        defaultValue={userProfile.phone} 
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="birthdate">Дата рождения</Label>
                    <Input 
                      id="birthdate" 
                      type="date"
                      defaultValue="1990-05-15" 
                      disabled={!isEditing}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Адреса доставки</h2>
                  <Button>Добавить адрес</Button>
                </div>

                {addresses.map((address) => (
                  <Card key={address.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{address.title}</h3>
                            {address.isDefault && (
                              <Badge variant="outline">По умолчанию</Badge>
                            )}
                          </div>
                          <p className="text-gray-600">{address.address}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Изменить</Button>
                          <Button variant="ghost" size="sm" className="text-red-600">Удалить</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="payment">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Способы оплаты</h2>
                  <Button>Добавить карту</Button>
                </div>

                {paymentMethods.map((method) => (
                  <Card key={method.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-xs font-medium">{method.brand}</span>
                          </div>
                          <div>
                            <p className="font-medium">•••• •••• •••• {method.last4}</p>
                            {method.isDefault && (
                              <Badge variant="outline" className="mt-1">По умолчанию</Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">Изменить</Button>
                          <Button variant="ghost" size="sm" className="text-red-600">Удалить</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Настройки уведомлений</CardTitle>
                  <CardDescription>Выберите, о чем вы хотите получать уведомления</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Статус заказа</p>
                      <p className="text-sm text-gray-600">Уведомления о изменении статуса заказа</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Новые продукты</p>
                      <p className="text-sm text-gray-600">Информация о новинках в каталоге</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Специальные предложения</p>
                      <p className="text-sm text-gray-600">Скидки и акции для вас</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Рекомендации</p>
                      <p className="text-sm text-gray-600">Персональные рекомендации продуктов</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Новости блога</p>
                      <p className="text-sm text-gray-600">Новые статьи и рецепты</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Изменить пароль</CardTitle>
                    <CardDescription>Обновите пароль для защиты аккаунта</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="currentPassword">Текущий пароль</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="newPassword">Новый пароль</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Подтвердите пароль</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                    <Button>Изменить пароль</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Двухфакторная аутентификация</CardTitle>
                    <CardDescription>Дополнительная защита вашего аккаунта</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS-подтверждение</p>
                        <p className="text-sm text-gray-600">Получать код подтверждения по SMS</p>
                      </div>
                      <Switch />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Активные сессии</CardTitle>
                    <CardDescription>Устройства, с которых выполнен вход в аккаунт</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Текущее устройство</p>
                        <p className="text-sm text-gray-600">Chrome на Windows • Москва</p>
                      </div>
                      <Badge variant="outline" className="text-green-600">Активно</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">iPhone</p>
                        <p className="text-sm text-gray-600">Safari на iOS • 2 дня назад</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        Завершить
                      </Button>
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

export default Account;