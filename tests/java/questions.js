const QUESTIONS = [
  {
    id: 1,
    topic: "JVM",
    score: 1,
    question: [
      `Какой компонент платформы Java непосредственно отвечает за интерпретацию и выполнение скомпилированного байт-кода .class файлов на конкретной машине?`
    ],
    options: [
      "Java Virtual Machine (JVM)",
      "Java Development Kit (JDK)",
      "Java Runtime Environment (JRE)",
      "Java ClassLoader"
    ],
    correct: 0,
    explanation: "JVM выполняет/интерпретирует байт-код на целевой платформе."
  },
  {
    id: 2,
    topic: "Modifiers",
    score: 1,
    question: [
      `Вы проектируете программу, в которой значение переменной не должно изменяться после\nинициализации, даже при наличии доступа из методов класса. Какое ключевое слово следует использовать?`
    ],
    options: ["final", "static", "private", "volatile"],
    correct: 0,
    explanation: "final делает ссылку/значение неизменяемым после инициализации."
  },
  {
    id: 3,
    topic: "Types",
    score: 1,
    question: ["Какой примитивный тип данных наиболее корректно использовать для хранения чисел с плавающей точкой двойной точности?"],
    options: ["double", "float", "long", "BigDecimal"],
    correct: 0,
    explanation: "double — стандартный примитив для чисел двойной точности."
  },
  {
    id: 4,
    topic: "Modifiers",
    score: 1,
    question: ["Вы хотите, чтобы поле класса было общим для всех экземпляров и существовало в единственном экземпляре в памяти. Какой модификатор необходимо применить?"],
    options: ["static", "final", "transient", "volatile"],
    correct: 0,
    explanation: "static делает поле общим для всех экземпляров класса."
  },
  {
    id: 5,
    topic: "Inheritance",
    score: 1,
    question: ["Какое утверждение о классе Object является корректным с точки зрения иерархии наследования?"],
    options: ["Все классы наследуют от Object", "Object не может быть суперклассом", "Object — интерфейс", "Классы не могут наследовать от Object"],
    correct: 0,
    explanation: "В Java все классы неявно наследуют от java.lang.Object."
  },
  {
    id: 6,
    topic: "Access",
    score: 1,
    question: ["Какой уровень доступа имеют поля с модификатором private ?"],
    options: ["Доступны только внутри того же класса", "Доступны внутри пакета", "Доступны всем классам", "Доступны подклассам из других пакетов"],
    correct: 0,
    explanation: "private ограничивает доступ только текущим классом."
  },
  {
    id: 7,
    topic: "Interfaces",
    score: 1,
    question: ["Какое ключевое слово необходимо использовать, чтобы класс реализовал интерфейс?"],
    options: ["implements", "extends", "uses", "implementsInterface"],
    correct: 0,
    explanation: "implements используется для реализации интерфейсов."
  },
  {
    id: 8,
    topic: "toString",
    score: 1,
    question: ["Если в пользовательском классе не переопределять метод toString(), какое поведение будет наблюдаться при выводе объекта в консоль?"],
    options: ["Выведется имя класса@хеш-код в шестнадцатеричном виде", "Будет выведено null", "Произойдёт компиляционная ошибка", "Будет выведено содержимое всех полей"],
    correct: 0,
    explanation: "По умолчанию Object.toString() возвращает ClassName@hexHashCode."
  },
  {
    id: 9,
    topic: "this, super",
    score: 1,
    question: ["Какое ключевое слово позволяет обратиться к методам и полям родительского класса из подкласса?"],
    options: ["super", "this", "parent", "base"],
    correct: 0,
    explanation: "super используется для доступа к членам суперкласса."
  },
  {
    id: 10,
    topic: "OOP",
    score: 1,
    question: ["В объектно-ориентированном программировании инкапсуляция играет важную роль. Что именно она обеспечивает?"],
    options: ["Сокрытие внутреннего состояния и контроль доступа через методы", "Наследование поведения из родительских классов", "Полиморфизм при вызове методов", "Разделение данных по пакетам"],
    correct: 0,
    explanation: "Инкапсуляция скрывает внутреннее состояние и предоставляет контролируемый доступ через геттеры/сеттеры."
  },
  {
    id: 11,
    topic: "Control flow",
    score: 1,
    question: ["Внутри вложенного цикла for вы хотите немедленно прекратить выполнение текущего цикла и выйти из него, не завершая остальные итерации. Какое ключевое слово вам понадобится?"],
    options: ["break", "continue", "return", "exit"],
    correct: 0,
    explanation: "break немедленно выходит из ближайшего цикла."
  },
  {
    id: 12,
    topic: "Inheritance",
    score: 1,
    question: ["Какой элемент иерархии наследования получает методы и поля другого класса?"],
    options: ["Подкласс (субкласс)", "Суперкласс", "Интерфейс", "Пакет"],
    correct: 0,
    explanation: "Подкласс наследует методы и поля суперкласса."
  },
  {
    id: 13,
    topic: "Collections",
    score: 1,
    question: ["Какой метод класса ArrayList возвращает текущее количество элементов в списке?"],
    options: ["size()", "length()", "count()", "getSize()"],
    correct: 0,
    explanation: "size() возвращает количество элементов коллекции."
  },
  {
    id: 14,
    topic: "String",
    score: 1,
    question: ["Какой метод следует использовать для получения длины строки String ?"],
    options: ["length()", "size()", "lengthOf()", "getLength()"],
    correct: 0,
    explanation: "У String метод length() возвращает длину."
  },
  {
    id: 15,
    topic: "Methods",
    score: 1,
    question: ["Какой тип возвращаемого значения используется у метода, который не возвращает результат?"],
    options: ["void", "null", "None", "empty"],
    correct: 0,
    explanation: "void указывает, что метод ничего не возвращает."
  },
  {
    id: 16,
    topic: "Encapsulation",
    score: 1,
    question: ["Что представляет собой геттер в контексте инкапсуляции?"],
    options: ["Метод для получения значения поля", "Метод для установки значения поля", "Поля класса", "Конструктор"],
    correct: 0,
    explanation: "Геттер предоставляет доступ к значению приватного поля."
  },
  {
    id: 17,
    topic: "Encapsulation",
    score: 1,
    question: ["Что представляет собой сеттер?"],
    options: ["Метод для установки/изменения значения поля", "Метод для получения значения поля", "Статическая переменная", "Конструктор"],
    correct: 0,
    explanation: "Сеттер устанавливает значение приватного поля с проверкой при необходимости."
  },
  {
    id: 18,
    topic: "Overloading",
    score: 1,
    question: ["Какое утверждение о перегрузке методов является корректным?"],
    options: ["Методы перегружаются разными сигнатурами (разные параметры)", "Перегрузка требует разного имени метода", "Перегрузка меняет возвращаемый тип без изменения параметров", "Перегрузка возможна только в интерфейсах"],
    correct: 0,
    explanation: "Перегрузка — это наличие методов с одним именем, но разными параметрами."
  },
  {
    id: 19,
    topic: "this",
    score: 1,
    question: ["Какое утверждение о ключевом слове this является верным?"],
    options: ["this ссылается на текущий экземпляр объекта", "this ссылается на суперкласс", "this — псевдоним для static методов", "this используется для вызова конструктора суперкласса"],
    correct: 0,
    explanation: "this указывает на текущий объект (экземпляр класса)."
  },
  {
    id: 20,
    topic: "Constructors",
    score: 1,
    question: ["Какова основная задача конструктора?"],
    options: ["Инициализация нового объекта", "Освобождение ресурсов", "Выполнение статических инициализаций", "Определение интерфейса объекта"],
    correct: 0,
    explanation: "Конструктор инициализирует состояние нового экземпляра класса."
  },
  {
    id: 21,
    topic: "Classes",
    score: 1,
    question: ["Как лучше всего описать класс?"],
    options: ["Шаблон (Blueprint) для создания объектов", "Единственный экземпляр программы", "Пакет функций", "Набор статических методов"],
    correct: 0,
    explanation: "Класс — шаблон для создания объектов с полями и методами."
  },
  {
    id: 22,
    topic: "Inheritance",
    score: 1,
    question: ["Какой тип наследования не поддерживается напрямую для классов?"],
    options: ["Множественное наследование классов", "Одинарное наследование", "Наследование интерфейсов", "Наследование по композиции"],
    correct: 0,
    explanation: "Java не поддерживает множественное наследование классов (несколько суперклассов)."
  },
  {
    id: 23,
    topic: "Abstract",
    score: 1,
    question: ["Какое утверждение об абстрактных классах является корректным?"],
    options: ["Абстрактный класс может содержать абстрактные и конкретные методы", "Абстрактный класс нельзя расширять", "Абстрактные классы не могут иметь полей", "Абстрактный класс всегда интерфейс"],
    correct: 0,
    explanation: "Абстрактный класс может содержать абстрактные и реализованные методы и поля."
  },
  {
    id: 24,
    topic: "Switch",
    score: 1,
    question: ["Какой вариант правильно использует конструкцию switch-case для ввода значения типа int ? (пример с Scanner)"],
    options: ["int x = sc.nextInt(); switch(x){ case 1: ... }", "String s = sc.next(); switch(s){ case 1: ... }", "int x = Integer.parseInt(sc.nextLine()); switch(x) нельзя использовать", "Scanner не может читать int для switch"],
    correct: 0,
    explanation: "Scanner.nextInt() возвращает int, который можно использовать в switch."
  },
  {
    id: 25,
    topic: "NullPointer",
    score: 1,
    question: ["Что произойдёт при выполнении следующего кода?\nString s = null;\nSystem.out.println(s.length());"],
    options: ["Будет брошено NullPointerException", "Выведется 0", "Выведется null", "Компиляция завершится ошибкой"],
    correct: 0,
    explanation: "Вызов метода у null-ссылки вызывает NullPointerException во время выполнения."
  },
  {
    id: 26,
    topic: "Exceptions",
    score: 1,
    question: ["Зачем в сигнатуре метода указывать ключевое слово throws ?"],
    options: ["Чтобы объявить проверяемые исключения, которые может выбросить метод", "Чтобы поймать исключение внутри метода", "Чтобы игнорировать исключения", "Чтобы сделать метод синхронным"],
    correct: 0,
    explanation: "throws объявляет проверяемые исключения, которые вызывающий должен обработать или пробросить."
  },
  {
    id: 27,
    topic: "finally",
    score: 1,
    question: ["Как ведёт себя блок finally в конструкции try–catch ?"],
    options: ["Выполняется всегда после try/catch, даже при исключениях или return", "Выполняется только при исключении", "Выполняется только если нет исключений", "Выполняется до try"],
    correct: 0,
    explanation: "finally выполняется всегда (за исключением System.exit и некоторых критических сбоев)."
  },
  {
    id: 28,
    topic: "CheckedException",
    score: 1,
    question: ["Какое из перечисленных исключений относится к проверяемым?"],
    options: ["IOException", "NullPointerException", "ArrayIndexOutOfBoundsException", "IllegalArgumentException"],
    correct: 0,
    explanation: "IOException — пример проверяемого (checked) исключения."
  },
  {
    id: 29,
    topic: "Abstraction",
    score: 1,
    question: ["Какова основная цель применения абстракции в объектно-ориентированном проектировании?"],
    options: ["Выделить важные характеристики и скрыть детали реализации", "Повысить скорость выполнения", "Увеличить видимость полей", "Гарантировать безопасность"],
    correct: 0,
    explanation: "Абстракция выделяет существенные черты и скрывает детали реализации."
  },
  {
    id: 30,
    topic: "Interface",
    score: 1,
    question: ["Чем на самом деле является объявление интерфейса?"],
    options: ["Контрактом (набором методов без реализации)", "Классом с реализацией", "Пакетом утилит", "Объектом времени выполнения"],
    correct: 0,
    explanation: "Интерфейс — контракт, который определяет набор методов, требуемых к реализации классом."
  },
  {
    id: 31,
    topic: "instanceof",
    score: 1,
    question: ["Для чего используется оператор instanceof ?"],
    options: ["Проверить, является ли объект экземпляром указанного типа", "Привести тип объекта", "Создать новый объект заданного типа", "Получить имя класса объекта"],
    correct: 0,
    explanation: "instanceof проверяет принадлежность объекта к указанному типу/интерфейсу."
  },
  {
    id: 32,
    topic: "try-with-resources",
    score: 1,
    question: ["Для чего предназначен механизм try-with-resources ?"],
    options: ["Автоматическое закрытие ресурсов, реализующих AutoCloseable", "Отлов только unchecked исключений", "Запуск потоков в блоке try", "Повторная попытка выполнения кода"],
    correct: 0,
    explanation: "try-with-resources автоматически закрывает ресурсы по окончании блока."
  },
  {
    id: 33,
    topic: "Multi-catch",
    score: 1,
    question: ["Зачем используется синтаксис catch (IOException | SQLException e) ?"],
    options: ["Чтобы обработать несколько исключений одним блоком catch", "Чтобы объединить исключения в одно", "Чтобы игнорировать оба исключения", "Чтобы преобразовать одно исключение в другое"],
    correct: 0,
    explanation: "Multi-catch позволяет обрабатывать несколько типов исключений в одном блоке."
  },
  {
    id: 34,
    topic: "IO",
    score: 1,
    question: ["Какой класс отвечает за вывод в System.out ?"],
    options: ["PrintStream", "PrintWriter", "SystemClass", "OutputStreamWriter"],
    correct: 0,
    explanation: "System.out — это экземпляр java.io.PrintStream."
  },
  {
    id: 35,
    topic: "InputStream",
    score: 1,
    question: ["Какой метод InputStream читает один байт?"],
    options: ["int read()", "int read(byte[])", "void read()", "String readLine()"],
    correct: 0,
    explanation: "int read() читает один байт и возвращает -1 при конце потока."
  },
  {
    id: 36,
    topic: "File",
    score: 1,
    question: ["Что возвращает File.length() ?"],
    options: ["Длину файла в байтах", "Имя файла", "Путь к файлу", "Список записей"],
    correct: 0,
    explanation: "File.length() возвращает размер файла в байтах."
  },
  {
    id: 37,
    topic: "IO",
    score: 1,
    question: ["Какой класс преобразует байтовый поток в символьный?"],
    options: ["InputStreamReader", "BufferedInputStream", "FileInputStream", "ByteArrayInputStream"],
    correct: 0,
    explanation: "InputStreamReader декодирует байты в символы с указанной кодировкой."
  },
  {
    id: 38,
    topic: "Scanner",
    score: 1,
    question: ["Какой метод класса Scanner читает строку полностью?"],
    options: ["nextLine()", "next()", "readLine()", "nextString()"],
    correct: 0,
    explanation: "nextLine() возвращает всю оставшуюся строку ввода."
  },
  {
    id: 39,
    topic: "Streams",
    score: 1,
    question: [
      `Что в Java понимается под «потоком ввода-вывода»?`
    ],
    options: ["Источник или приемник последовательных данных (байтов/символов)", "Поток исполнения (Thread)", "Класс для архивации", "Сеть"],
    correct: 0,
    explanation: "IO-поток абстрагирует источник или приёмник последовательных данных."
  },
  {
    id: 40,
    topic: "Streams",
    score: 1,
    question: ["На какие категории делятся потоки ввода-вывода?"],
    options: ["Байтовые (InputStream/OutputStream) и символьные (Reader/Writer)", "Серийные и параллельные", "Синхронные и асинхронные", "Входящие и исходящие"],
    correct: 0,
    explanation: "Разделение по типу данных: байтовые и символьные потоки."
  },
  {
    id: 41,
    topic: "File",
    score: 1,
    question: ["Каково назначение класса java.io.File ?"],
    options: ["Представляет файловую систему: путь к файлу/каталогу и операции над ним", "Читает содержимое файла построчно", "Записывает байты в файл", "Является потоковым буфером"],
    correct: 0,
    explanation: "File представляет путь в файловой системе и операции с ним."
  },
  {
    id: 42,
    topic: "Polymorphism",
    score: 1,
    question: [
      `Дан следующий код:\nclass Parent {\n  int calculate(int a, int b) {\n    return (a + b) * 2;\n  }\n}\nclass Child extends Parent {\n  @Override\n  int calculate(int a, int b) {\n    int parentResult = super.calculate(a, b);\n    return parentResult - (a * b) + (a - b);\n  }\n}\npublic class Main {\n  public static void main(String[] args) {\n    Parent obj = new Child();\n    System.out.println(obj.calculate(5, 3));\n  }\n}`
    ],
    options: ["3", "16", "11", "23"],
    correct: 0,
    explanation: "Parent: (5+3)*2=16; Child: 16 - (5*3) + (5-3) = 16 -15 +2 = 3."
  },
  {
    id: 43,
    topic: "OOP",
    score: 1,
    question: [
      `Какой принцип ООП используется для ограничения доступа к radius ?\nclass Circle {\n  private double radius = 5;\n  double getRadius() {\n    return radius + 2;\n  }\n  public static void main(String[] args) {\n    Circle c = new Circle();\n    System.out.println("Радиус: " + c.getRadius());\n  }\n}`
    ],
    options: ["Инкапсуляция", "Наследование", "Полиморфизм", "Абстракция"],
    correct: 0,
    explanation: "private поле и доступ через метод — пример инкапсуляции."
  },
  {
    id: 44,
    topic: "Output",
    score: 1,
    question: [
      `Какой будет вывод следующей программы?\nclass Circle {\n  private double radius = 5;\n  double getRadius() {\n    return radius + 2;\n  }\n  public static void main(String[] args) {\n    Circle c = new Circle();\n    System.out.println("Радиус: " + c.getRadius());\n  }\n}`
    ],
    options: ["Радиус: 7.0", "Радиус: 5.0", "Радиус: 2.0", "Ошибка компиляции"],
    correct: 0,
    explanation: "getRadius() возвращает 5 + 2 = 7.0."
  },
  {
    id: 45,
    topic: "Polymorphism",
    score: 1,
    question: [
      `Какой будет вывод следующей программы?\nclass Parent {\n  int calculate(int a, int b) {\n    return (a + b) * 2;\n  }\n}\nclass Child extends Parent {\n  @Override\n  int calculate(int a, int b) {\n    int parentResult = super.calculate(a, b);\n    return parentResult - (a * b) + (a - b);\n  }\n}\npublic class Main {\n  public static void main(String[] args) {\n    Parent obj = new Child();\n    System.out.println(obj.calculate(5, 3));\n  }\n}`
    ],
    options: ["3", "16", "11", "23"],
    correct: 0,
    explanation: "То же, что и ранее — результат 3."
  },
  {
    id: 46,
    topic: "Initialization",
    score: 1,
    question: [
      `Какой порядок вывода сообщений в приведённом фрагменте?\nclass Battery {\n  Battery(int capacity) {\n    System.out.println("Батарея установлена: " + capacity + " мАч");\n  }\n}\nclass Phone {\n  Battery power;\n  Phone(int capacity) {\n    power = new Battery(capacity);\n    System.out.println("Телефон собран.");\n  }\n  void turnOn() {\n    System.out.println("Телефон включается...");\n    System.out.println("Загрузка системы завершена!");\n  }\n  public static void main(String[] args) {\n    Phone p = new Phone(5000);\n    p.turnOn();\n  }\n}`
    ],
    options: ["Батарея установлена: 5000 мАч -> Телефон собран. -> Телефон включается... -> Загрузка системы завершена!", "Телефон собран. -> Батарея установлена...", "Телефон включается... -> Батарея установлена...", "Загрузка системы завершена! -> Телефон собран."],
    correct: 0,
    explanation: "При создании Phone конструктор создаёт Battery, сначала выводится сообщение батареи, затем 'Телефон собран.' Затем при turnOn() два сообщения."
  },
  {
    id: 47,
    topic: "Getters",
    score: 1,
    question: ["Допустим, у нас есть класс Person. Какой из вариантов корректно получает значение возраста объекта?\nclass Person {\n  private int age = 25;\n  int getAge() {\n    return age;\n  }\n  static String species = \"Human\";\n}\n"],
    options: ["p.getAge()", "Person.getAge()", "p.age", "Person.age"],
    correct: 0,
    explanation: "getAge() — нестатический метод экземпляра, вызывают через объект p.getAge()."
  },
  {
    id: 48,
    topic: "Static",
    score: 1,
    question: ["Что верно относительно поля species исходя из приведённого фрагмента?\nclass Person {\n  private int age = 25;\n  int getAge() { return age; }\n  static String species = \"Human\";\n}\n"],
    options: ["species едина для всех экземпляров (статическое поле)", "species уникальна для каждого объекта", "species — приватное поле", "species — метод"],
    correct: 0,
    explanation: "static поле принадлежит классу и общее для всех экземпляров."
  },
  {
    id: 49,
    topic: "This vs Field",
    score: 1,
    question: [
      `Просмотрите фрагмент кода и укажите, что будет выведено в консоль.\nclass Movie {\n  private String name;\n  void setName(String name) {\n    name = name;\n  }\n  void showInfo() {\n    System.out.println("Название фильма: " + name);\n  }\n  public static void main(String[] args) {\n    Movie m = new Movie();\n    m.setName("Ghostbusters");\n    m.showInfo();\n  }\n}`
    ],
    options: ["Название фильма: null", "Название фильма: Ghostbusters", "Ошибка компиляции", "Название фильма: \"\""],
    correct: 0,
    explanation: "В setName происходит присвоение локальной переменной самому себе; поле name остаётся null."
  },
  {
    id: 50,
    topic: "This fix",
    score: 1,
    question: ["Просмотрите фрагмент кода и укажите верное решение для исправления метода setName .\nclass Movie {\n  private String name;\n  void setName(String name) {\n    name = name;\n  }\n  void showInfo() { System.out.println(\"Название фильма: \" + name); }\n}"],
    options: ["Использовать this.name = name;", "Оставить как есть", "Сделать name static", "Переименовать параметр в movieName и присвоить name = movieName;"],
    correct: 0,
    explanation: "this.name = name; связывает поле класса с параметром; альтернативно переименовать параметр."
  },
  {
    id: 51,
    topic: "Operators",
    score: 1,
    question: ["Что будет выведено на экран при выполнении следующей программы?\npublic class Main {\n  public static void main(String[] args) {\n    byte x = 10;\n    short y = 20;\n    int z = 30;\n    double result = x + y * z / 2.0;\n    System.out.println(result);\n  }\n}"],
    options: ["310.0", "50.0", "160.0", "Не скомпилируется"],
    correct: 0,
    explanation: "y*z = 600; 600/2.0 = 300.0; x + 300.0 = 310.0."
  },
  {
    id: 52,
    topic: "File API",
    score: 1,
    question: ["Какой метод создаёт файл, если его не существует?"],
    options: ["createNewFile()", "open()", "new File()", "mkdir()"],
    correct: 0,
    explanation: "File.createNewFile() создаёт файл в файловой системе, если его нет."
  },
  {
    id: 53,
    topic: "FileNotFound",
    score: 1,
    question: ["Что произойдёт, если попытаться открыть файл, которого не существует?"],
    options: ["Будет брошено FileNotFoundException при попытке открыть потоки", "Будет возвращён null", "Создастся пустой файл автоматически", "Ничего не произойдёт"],
    correct: 0,
    explanation: "При попытке открытия потока на чтение будет брошено FileNotFoundException (checked)."
  },
  {
    id: 54,
    topic: "FileOutputStream",
    score: 1,
    question: ["Рассмотрите код: FileOutputStream fileOut = new FileOutputStream(\"files/txt/stream.txt\", true); byte[] buffer = text.getBytes(); fileOut.write(buffer); Как поведёт себя программа при повторных запусках?"],
    options: ["Данные будут дописываться в конец файла (append)", "Файл будет перезаписываться каждый запуск", "Будет выброшено исключение", "Файл будет удаляться"],
    correct: 0,
    explanation: "Параметр true включает режим дописывания (append)."
  },
  {
    id: 55,
    topic: "FileOutputStream param",
    score: 1,
    question: ["Для чего используется второй параметр true в конструкторе FileOutputStream ?"],
    options: ["Включить режим дописывания (append)", "Открыть файл в бинарном режиме", "Создать временный файл", "Отключить буферизацию"],
    correct: 0,
    explanation: "true задаёт режим append — запись в конец файла."
  },
  {
    id: 56,
    topic: "read",
    score: 1,
    question: ["Что означает значение -1, возвращаемое методом read() в фрагменте: while ((i = inputStream.read()) != -1) { System.out.print((char) i); } ?"],
    options: ["Конец потока (EOF)", "Ошибка чтения", "Нулевой байт", "Следующий байт равен -1"],
    correct: 0,
    explanation: "-1 означает конец потока; чтение завершено."
  },
  {
    id: 57,
    topic: "Streams",
    score: 1,
    question: ["Почему класс FileOutputStream не подходит для работы со строками напрямую?"],
    options: ["Он работает с байтами, а не с символами/строками", "Он не может записывать данные", "Он читает только файлы", "Он устарел и удалён"],
    correct: 0,
    explanation: "FileOutputStream оперирует байтами; для строк удобнее использовать Writer/PrintWriter."
  },
  {
    id: 58,
    topic: "IO Exception",
    score: 1,
    question: ["Какое исключение является базовым для всех ошибок ввода-вывода?"],
    options: ["IOException", "RuntimeException", "Error", "FileNotFoundException"],
    correct: 0,
    explanation: "IOException — базовый checked тип для ошибок ввода-вывода."
  },
  {
    id: 59,
    topic: "Readers",
    score: 1,
    question: ["Какой из ниже приведённых классов лучше использовать для чтения текста, а не байтов?"],
    options: ["BufferedReader (или InputStreamReader)", "FileInputStream", "ByteArrayInputStream", "BufferedInputStream"],
    correct: 0,
    explanation: "BufferedReader (в связке с InputStreamReader) предназначен для чтения символов/строк."
  },
  {
    id: 60,
    topic: "Permission",
    score: 1,
    question: ["Какое исключение выбрасывается при попытке записи в файл без прав?"],
    options: ["IOException / FileNotFoundException (с причиной)", "NullPointerException", "SecurityException", "IllegalStateException"],
    correct: 0,
    explanation: "При проблемах с доступом могут быть FileNotFoundException или IOException с причиной SecurityException; наиболее общим — IOException."
  },
  {
    id: 61,
    topic: "Design",
    score: 1,
    question: ["Что важно для применения стратегии (Strategy pattern)?"],
    options: ["Определять семейство взаимозаменяемых алгоритмов и инкапсулировать их", "Использовать статические методы", "Наследовать все реализации от одного класса", "Хранить состояние в singletons"],
    correct: 0,
    explanation: "Strategy отделяет алгоритмы и делает их взаимозаменяемыми."
  },
  {
    id: 62,
    topic: "Factory Method",
    score: 1,
    question: ["В каком месте находится основная «точка расширения» при применении паттерна Фабричный метод в базовом фреймворке?"],
    options: ["В подклассе, реализующем фабричный метод", "В базовом классе, который использует фабрику", "В утилитном классе", "В main()"],
    correct: 0,
    explanation: "Подклассы расширяют поведение, переопределяя фабричный метод."
  },
  {
    id: 63,
    topic: "Factory separation",
    score: 1,
    question: ["Что именно позволяет отделить подход создания объектов от их использования в паттерне «Фабричный метод»?"],
    options: ["Инкапсуляция логики создания в фабричном методе/классе", "Использование статических конструкторов", "Прямое создание через new везде", "Наследование от конкретного класса"],
    correct: 0,
    explanation: "Фабрика инкапсулирует создание объектов, клиент использует интерфейс/абстракцию."
  },
  {
    id: 64,
    topic: "Generics/typing",
    score: 1,
    question: ["Дан фрагмент: List<String> names = new ArrayList<>(); names.add(\"Alice\"); names.add(\"Bob\"); Какой принцип следует применять при объявлении переменной names ?"],
    options: ["Использовать тип интерфейса (List) вместо конкретной реализации (ArrayList)", "Использовать конкретный тип ArrayList в объявлении", "Использовать массив String[]", "Использовать raw type List"],
    correct: 0,
    explanation: "Объявление по интерфейсу повышает гибкость: List<String> names = new ArrayList<>();"
  },
  {
    id: 65,
    topic: "Map",
    score: 1,
    question: [
      `Рассмотрите итерацию по Map:
for (Map.Entry<String, Integer> e : map.entrySet()) {
  System.out.println(e.getKey() + ":" + e.getValue());
}
Что представляет объект Map.Entry ?`
    ],
    options: ["Пару ключ-значение (entry) в Map", "Ключ списка", "Индекс массива", "Поток данных"],
    correct: 0,
    explanation: "Map.Entry представляет пару ключ-значение, доступную при итерации."
  },
  {
    id: 66,
    topic: "System.out redirection",
    score: 1,
    question: ["Как можно перенаправить стандартный поток вывода System.out на другой поток или файл?"],
    options: ["System.setOut(new PrintStream(new FileOutputStream(\"out.txt\")))", "Нельзя перенаправить System.out", "Использовать Logger только", "Переопределить System класс"],
    correct: 0,
    explanation: "System.setOut позволяет заменить стандартный PrintStream."
  },
  {
    id: 67,
    topic: "Singleton",
    score: 1,
    question: ["Какое основное назначение паттерна Singleton?"],
    options: ["Обеспечить единственный экземпляр класса и глобальную точку доступа", "Создавать множество экземпляров быстро", "Изолировать выполнение метода", "Обеспечить потокобезопасность по умолчанию"],
    correct: 0,
    explanation: "Singleton гарантирует единственный экземпляр и централизованный доступ."
  },
  {
    id: 68,
    topic: "Factory selection",
    score: 1,
    question: ["Какой паттерн проектирования целесообразно использовать для создания объектов EmailNotification и SMSNotification в зависимости от входных данных?\n(приведены интерфейс Notification и классы EmailNotification, SMSNotification)"],
    options: ["Factory (или Simple Factory/Factory Method)", "Singleton", "Observer", "Decorator"],
    correct: 0,
    explanation: "Фабрика выбирает конкретную реализацию Notification по входным данным."
  },
  {
    id: 69,
    topic: "Observer",
    score: 1,
    question: ["Какую задачу решает паттерн Observer?"],
    options: ["Уведомление заинтересованных объектов при изменении состояния субъекта", "Создание одного экземпляра класса", "Упаковка одного объекта в другой", "Создание сложных объектов по шагам"],
    correct: 0,
    explanation: "Observer позволяет подписчикам получать обновления при изменениях субъекта."
  },
  {
    id: 70,
    topic: "Strategy/selection",
    score: 1,
    question: ["Какой паттерн позволяет выбирать способ оплаты во время выполнения программы?\n(интерфейс Payment с реализациями CardPayment и CashPayment)"],
    options: ["Strategy (или Simple Factory вместе со Strategy)", "Singleton", "Adapter", "Builder"],
    correct: 0,
    explanation: "Strategy (или использование фабрики для выбора реализации) позволяет менять алгоритм оплаты во время выполнения."
  },
  {
    id: 71,
    topic: "Builder",
    score: 1,
    question: ["Необходимо создавать объекты Computer с разными наборами параметров, избегая большого количества конструкторов. Какой паттерн лучше использовать?"],
    options: ["Builder", "Singleton", "Prototype", "Observer"],
    correct: 0,
    explanation: "Builder позволяет последовательно задавать параметры и собрать объект без множества конструкторов."
  },
  {
    id: 72,
    topic: "File exists",
    score: 1,
    question: ["Рассмотрите код: File file = new File(\"data.txt\"); System.out.println(file.exists()); Файл data.txt отсутствует в текущей директории. Что будет выведено в консоль?"],
    options: ["false", "true", "null", "Ошибка компиляции"],
    correct: 0,
    explanation: "file.exists() вернёт false, если файла нет."
  },
  {
    id: 73,
    topic: "File write",
    score: 1,
    question: ["Какой символ будет записан в файл при выполнении следующего фрагмента: FileOutputStream out = new FileOutputStream(\"data.bin\"); out.write(65); out.close();"],
    options: ["ASCII символ 'A' (код 65)", "Число 65 как текст", "Нулевой байт", "Ничего не запишется"],
    correct: 0,
    explanation: "Запись байта со значением 65 соответствует символу 'A' в ASCII."
  }
];

// Конец файла
