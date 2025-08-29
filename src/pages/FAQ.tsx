import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  HelpCircle, 
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Truck,
  CreditCard,
  Shield,
  Users
} from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      id: 'orders',
      name: 'Заказы и оплата',
      icon: CreditCard,
      questions: [
        {
          question: 'Как оформить заказ?',
          answer: 'Выберите товары в каталоге, добавьте их в корзину, заполните данные для доставки и выберите способ оплаты. После подтверждения заказа мы свяжемся с вами для уточнения деталей.'
        },
        {
          question: 'Какие способы оплаты доступны?',
          answer: 'Мы принимаем оплату банковскими картами (Visa, MasterCard, МИР), электронными кошельками (Яндекс.Деньги, WebMoney), а также наличными и картой при получении заказа.'
        },
        {
          question: 'Можно ли отменить или изменить заказ?',
          answer: 'Заказ можно отменить или изменить до момента его сборки на складе. Обычно это возможно в течение 2-3 часов после оформления. Свяжитесь с нами по телефону +7 (495) 123-45-67.'
        },
        {
          question: 'Есть ли минимальная сумма заказа?',
          answer: 'Минимальная сумма заказа составляет 500₽. При заказе от 1000₽ доставка по Москве бесплатная.'
        }
      ]
    },
    {
      id: 'delivery',
      name: 'Доставка',
      icon: Truck,
      questions: [
        {
          question: 'В какие районы вы доставляете?',
          answer: 'Мы доставляем по Москве в пределах МКАД, а также в ближнее и дальнее Подмосковье (до 50 км от МКАД). Полный список районов доставки можно посмотреть на странице "Доставка".'
        },
        {
          question: 'Сколько стоит доставка?',
          answer: 'Доставка по Москве стоит 200₽, по ближнему Подмосковью — 350₽, по дальнему — 500₽. При заказе от 1000₽ доставка по Москве бесплатная.'
        },
        {
          question: 'Можно ли выбрать время доставки?',
          answer: 'Да, вы можете выбрать удобный временной интервал: 10:00-14:00, 14:00-18:00 или 18:00-22:00. При заказе до 14:00 возможна доставка в тот же день.'
        },
        {
          question: 'Как отслеживать заказ?',
          answer: 'После оформления заказа вы получите SMS с номером заказа. За час до доставки курьер свяжется с вами для уточнения времени.'
        }
      ]
    },
    {
      id: 'products',
      name: 'Продукты и качество',
      icon: Shield,
      questions: [
        {
          question: 'Как вы гарантируете качество продуктов?',
          answer: 'Мы проводим многоступенчатый контроль качества: отбор фермеров, лабораторные тесты, соблюдение холодовой цепи и финальную проверку перед отправкой. Все продукты имеют сертификаты качества.'
        },
        {
          question: 'Что делать, если продукт не понравился?',
          answer: 'Если продукт не соответствует заявленному качеству или не понравился по вкусу, мы вернем деньги или заменим товар. Обратитесь в службу поддержки в течение 24 часов после получения заказа.'
        },
        {
          question: 'Все ли продукты органические?',
          answer: 'Не все, но большинство наших продуктов выращены по органическим стандартам. Органические продукты отмечены специальным значком "Органик" в каталоге.'
        },
        {
          question: 'Как долго хранятся ваши продукты?',
          answer: 'Срок хранения зависит от типа продукта. Мы гарантируем минимум 70% срока годности на момент доставки. Рекомендации по хранению указаны на упаковке каждого товара.'
        }
      ]
    },
    {
      id: 'account',
      name: 'Личный кабинет',
      icon: Users,
      questions: [
        {
          question: 'Нужно ли регистрироваться для заказа?',
          answer: 'Регистрация не обязательна, но рекомендуется. Зарегистрированные пользователи получают бонусы, могут отслеживать заказы и сохранять адреса доставки.'
        },
        {
          question: 'Как восстановить пароль?',
          answer: 'На странице входа нажмите "Забыли пароль?" и введите ваш email. Мы отправим ссылку для восстановления пароля.'
        },
        {
          question: 'Можно ли изменить данные в профиле?',
          answer: 'Да, все данные профиля можно изменить в личном кабинете в разделе "Настройки профиля".'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h1>
            <p className="text-lg text-gray-600 mb-8">
              Найдите ответы на самые популярные вопросы о наших продуктах и услугах
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Категории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {faqCategories.map((category) => (
                  <div key={category.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <category.icon className="h-5 w-5 text-gray-400" />
                    <div className="flex-1">
                      <span className="text-sm font-medium">{category.name}</span>
                      <div className="text-xs text-gray-500">{category.questions.length} вопросов</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Не нашли ответ?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  Позвонить
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Написать email
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Онлайн-чат
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {filteredCategories.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ничего не найдено</h3>
                  <p className="text-gray-600 mb-6">
                    По вашему запросу "{searchQuery}" ничего не найдено. 
                    Попробуйте изменить поисковый запрос или свяжитесь с нами напрямую.
                  </p>
                  <Button>Связаться с поддержкой</Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {filteredCategories.map((category) => (
                  <Card key={category.id}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <category.icon className="h-5 w-5" />
                        {category.name}
                        <Badge variant="secondary">{category.questions.length}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent>
                              <p className="text-gray-600">{faq.answer}</p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Popular Questions */}
        {searchQuery === '' && (
          <section className="mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Самые популярные вопросы</CardTitle>
                <CardDescription className="text-center">
                  Вопросы, которые задают чаще всего
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Как быстро доставляете?</h4>
                      <p className="text-sm text-gray-600">При заказе до 14:00 доставляем в тот же день</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Есть ли гарантия качества?</h4>
                      <p className="text-sm text-gray-600">Да, возврат денег если продукт не понравился</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Все продукты органические?</h4>
                      <p className="text-sm text-gray-600">85% продуктов имеют органические сертификаты</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">Работаете ли в выходные?</h4>
                      <p className="text-sm text-gray-600">Да, доставляем 7 дней в неделю</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Contact Support */}
        <section className="mt-16">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-12 text-center">
              <MessageSquare className="h-16 w-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Остались вопросы?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Наша служба поддержки работает 24/7 и готова помочь с любыми вопросами
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Позвонить: +7 (495) 123-45-67
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Написать: support@fermadom.ru
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-600">
                <Clock className="h-4 w-4" />
                <span>Среднее время ответа: 15 минут</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQ;