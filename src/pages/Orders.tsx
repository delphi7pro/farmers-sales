import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Package, 
  Truck,
  CheckCircle,
  Clock,
  Eye,
  RotateCcw,
  Star,
  Calendar,
  Filter
} from 'lucide-react';

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'delivered',
      total: 1250,
      items: [
        { name: 'Органические помидоры', quantity: 2, price: 350, image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Домашние яйца', quantity: 1, price: 120, image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Фермерское молоко', quantity: 3, price: 80, image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      deliveryAddress: 'г. Москва, ул. Ленина, д. 123, кв. 45',
      deliveryDate: '2024-01-15',
      canReview: true,
      canReorder: true
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-18',
      status: 'in_transit',
      total: 890,
      items: [
        { name: 'Свежая зелень', quantity: 2, price: 150, image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Сезонные яблоки', quantity: 1, price: 200, image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      deliveryAddress: 'г. Москва, ул. Тверская, д. 10, оф. 205',
      deliveryDate: '2024-01-19',
      canReview: false,
      canReorder: false,
      trackingNumber: 'TRK123456789'
    },
    {
      id: 'ORD-2024-003',
      date: '2024-01-20',
      status: 'processing',
      total: 1580,
      items: [
        { name: 'Фермерская говядина', quantity: 1, price: 850, image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=100' },
        { name: 'Органические помидоры', quantity: 1, price: 350, image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=100' }
      ],
      deliveryAddress: 'г. Москва, ул. Ленина, д. 123, кв. 45',
      deliveryDate: '2024-01-21',
      canReview: false,
      canReorder: false
    }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'processing':
        return { label: 'Обрабатывается', color: 'bg-yellow-600', icon: Clock };
      case 'in_transit':
        return { label: 'В пути', color: 'bg-blue-600', icon: Truck };
      case 'delivered':
        return { label: 'Доставлен', color: 'bg-green-600', icon: CheckCircle };
      case 'cancelled':
        return { label: 'Отменен', color: 'bg-red-600', icon: Package };
      default:
        return { label: 'Неизвестно', color: 'bg-gray-600', icon: Package };
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Мои заказы</h1>
            <p className="text-lg text-gray-600 mb-8">
              История ваших заказов и текущий статус доставки
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Поиск по номеру заказа или товару..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Статус заказа" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все заказы</SelectItem>
                  <SelectItem value="processing">Обрабатывается</SelectItem>
                  <SelectItem value="in_transit">В пути</SelectItem>
                  <SelectItem value="delivered">Доставлен</SelectItem>
                  <SelectItem value="cancelled">Отменен</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Orders List */}
          <div className="space-y-6">
            {filteredOrders.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Заказы не найдены</h3>
                  <p className="text-gray-600 mb-6">
                    {searchQuery ? 'По вашему запросу ничего не найдено' : 'У вас пока нет заказов'}
                  </p>
                  <Button asChild>
                    <Link to="/products">Начать покупки</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              filteredOrders.map((order) => {
                const statusInfo = getStatusInfo(order.status);
                const StatusIcon = statusInfo.icon;

                return (
                  <Card key={order.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">Заказ {order.id}</CardTitle>
                          <CardDescription>
                            Оформлен {new Date(order.date).toLocaleDateString('ru-RU')}
                          </CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge className={statusInfo.color}>
                            <StatusIcon className="h-3 w-3 mr-1" />
                            {statusInfo.label}
                          </Badge>
                          <p className="text-lg font-bold text-green-600 mt-1">
                            {order.total.toLocaleString()}₽
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {/* Order Items */}
                      <div className="space-y-3 mb-6">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div className="flex-1">
                              <p className="font-medium text-sm">{item.name}</p>
                              <p className="text-xs text-gray-600">{item.quantity} шт. × {item.price}₽</p>
                            </div>
                            <span className="font-medium text-sm">
                              {(item.quantity * item.price).toLocaleString()}₽
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Delivery Info */}
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-gray-600">Адрес доставки:</p>
                            <p className="font-medium">{order.deliveryAddress}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Дата доставки:</p>
                            <p className="font-medium">
                              {new Date(order.deliveryDate).toLocaleDateString('ru-RU')}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          Подробнее
                        </Button>
                        
                        {order.status === 'in_transit' && order.trackingNumber && (
                          <Button variant="outline" size="sm">
                            <Truck className="h-4 w-4 mr-1" />
                            Отследить
                          </Button>
                        )}
                        
                        {order.canReorder && (
                          <Button variant="outline" size="sm">
                            <RotateCcw className="h-4 w-4 mr-1" />
                            Повторить заказ
                          </Button>
                        )}
                        
                        {order.canReview && (
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-1" />
                            Оставить отзыв
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}
          </div>

          {/* Pagination */}
          {filteredOrders.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" disabled>Предыдущая</Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Следующая</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;