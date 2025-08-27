import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag,
  ArrowRight,
  Truck,
  Gift,
  Percent
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const deliveryFee = state.total > 1000 ? 0 : 200;
  const discount = state.total > 2000 ? state.total * 0.1 : 0;
  const finalTotal = state.total + deliveryFee - discount;

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Корзина пуста</h1>
            <p className="text-gray-600 mb-8">
              Добавьте товары в корзину, чтобы оформить заказ
            </p>
            <Button size="lg" asChild>
              <Link to="/products">
                Перейти к покупкам
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Корзина</h1>
          <Button variant="outline" onClick={clearCart}>
            <Trash2 className="h-4 w-4 mr-2" />
            Очистить корзину
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                          <p className="text-green-600 font-medium">{item.farmer}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-4 py-2 min-w-[60px] text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold text-green-600">
                            {(item.price * item.quantity).toLocaleString()}₽
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.price}₽ за шт.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Promo Code */}
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input placeholder="Введите промокод" />
                  </div>
                  <Button variant="outline">
                    <Gift className="h-4 w-4 mr-2" />
                    Применить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Итого по заказу</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Товары ({state.items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
                  <span>{state.total.toLocaleString()}₽</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Доставка
                  </span>
                  <span>
                    {deliveryFee === 0 ? (
                      <Badge variant="secondary">Бесплатно</Badge>
                    ) : (
                      `${deliveryFee}₽`
                    )}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span className="flex items-center gap-2">
                      <Percent className="h-4 w-4" />
                      Скидка 10%
                    </span>
                    <span>-{discount.toLocaleString()}₽</span>
                  </div>
                )}

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>К оплате</span>
                  <span className="text-green-600">{finalTotal.toLocaleString()}₽</span>
                </div>

                <Button size="lg" className="w-full" asChild>
                  <Link to="/checkout">
                    Оформить заказ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <div className="text-center">
                  <Button variant="ghost" asChild>
                    <Link to="/products">Продолжить покупки</Link>
                  </Button>
                </div>

                {/* Benefits */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Truck className="h-4 w-4 text-green-600" />
                    <span>Бесплатная доставка от 1000₽</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Gift className="h-4 w-4 text-blue-600" />
                    <span>Скидка 10% от 2000₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recommended Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуем также</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                id: '5',
                name: 'Свежие огурцы',
                price: 280,
                image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=300',
                farmer: 'Ферма Солнечная'
              },
              {
                id: '6',
                name: 'Молодая морковь',
                price: 180,
                image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=300',
                farmer: 'Овощная грядка'
              },
              {
                id: '7',
                name: 'Свежий салат',
                price: 120,
                image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=300',
                farmer: 'Зеленая грядка'
              },
              {
                id: '8',
                name: 'Домашний творог',
                price: 320,
                image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300',
                farmer: 'Молочная ферма'
              }
            ].map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Link to={`/products/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-green-600 mb-2">{product.farmer}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-green-600">{product.price}₽</span>
                    <Button size="sm">В корзину</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;