const QUESTIONS = [
  {
    id: 1,
    topic: "Python",
    score: 1,
    question: [`n = 0\nwhile n <= 10:\n    n += 2\n    if n % 4 == 0:\n        print(n, end=" ")\n\nЧто выведет код?`],
    options: ["4 8 12", "0 4 8", "2 6 10", "Ошибка выполнения"],
    correct: 0,
    explanation: "Цикл добавляет 2 к n; выводятся значения, кратные 4: 4, 8, 12."
  },
  {
    id: 2,
    topic: "Strings",
    score: 1,
    question: ["Как объединить список строк в одну строку?"],
    options: ["'разделитель'.join(list)", "str.join(list)", "concat(list)", "' '.concat(list)"],
    correct: 0,
    explanation: "Метод str.join используется для объединения элементов списка в строку с указанным разделителем."
  },
  {
    id: 3,
    topic: "Files",
    score: 1,
    question: ["Как прочитать содержимое файла в Python 3?"],
    options: ["open(file_path).read()", "read(file_path)", "file.read(file_path)", "open.read(file_path)"] ,
    correct: 0,
    explanation: "open(...).read() возвращает весь текст файла как строку."
  },
  {
    id: 4,
    topic: "Files",
    score: 1,
    question: ["Укажите корректный синтаксис открытия файла."],
    options: ["myFile = open('mbox.txt')", "myFile = open:\\'mbox.txt\\'", "open mbox.txt", "file.open('mbox.txt')"],
    correct: 0,
    explanation: "Стандартный синтаксис: myFile = open('filename')."
  },
  {
    id: 5,
    topic: "Lists",
    score: 1,
    question: ["Для чего используется встроенный метод списка pop(x)?"],
    options: ["Для извлечения элемента списка по указанному индексу.", "Для удаления всех элементов списка.", "Для добавления элемента в конец списка.", "Для подсчёта элементов списка."],
    correct: 0,
    explanation: "pop(index) удаляет и возвращает элемент по индексу."
  },
  {
    id: 6,
    topic: "Tuples",
    score: 1,
    question: [`x = tuple({1: 2})\nprint(x)\n\nЧто выведет код?`],
    options: ["(1,)", "(2,)", "(1, 2)", "{}"],
    correct: 0,
    explanation: "tuple(d) для словаря возвращает кортеж ключей; ключ только 1."
  },
  {
    id: 7,
    topic: "Types",
    score: 1,
    question: ["Что обозначает тип данных int?"],
    options: ["Целочисленное", "Вещественное", "Строковое", "Логическое"],
    correct: 0,
    explanation: "int — тип для целых чисел."
  },
  {
    id: 8,
    topic: "OOP",
    score: 1,
    question: ["Что верно о наследовании в Python?"],
    options: ["Подклассы наследуют все атрибуты суперкласса.", "Подклассы не наследуют методы суперкласса.", "Наследование невозможно в Python.", "Подкласс может наследовать только поля, но не методы."],
    correct: 0,
    explanation: "Подклассы получают методы и атрибуты суперкласса (если не переопределены)."
  },
  {
    id: 9,
    topic: "Datetime",
    score: 1,
    question: ["Как изменить формат вывода даты и времени?"],
    options: ["strftime()", "strptime()", "formatdate()", "toString()"],
    correct: 0,
    explanation: "strftime используется для форматирования datetime в строку по шаблону."
  },
  {
    id: 10,
    topic: "Control flow",
    score: 1,
    question: [`while True:\n    print(1)\n    break\nelse:\n    print(0)\n\nЧто выведет код?`],
    options: ["1", "0", "1 0", "Ничего"],
    correct: 0,
    explanation: "break прерывает цикл, блок else не выполняется; выводится 1."
  },
  {
    id: 11,
    topic: "Files",
    score: 1,
    question: ["Как проверить существование файла в Python 3?"],
    options: ["os.path.isfile(file_path)", "file.exists(file_path)", "path.exists(file_path)", "open.exists(file_path)"],
    correct: 0,
    explanation: "os.path.isfile возвращает True, если путь указывает на существующий файл."
  },
  {
    id: 12,
    topic: "Lists",
    score: 1,
    question: [`a = [1, 2]\nb = list(a)\nprint(b)\n\nЧто выведет код?`],
    options: ["[1, 2]", "[2, 1]", "(1, 2)", "Ошибка"],
    correct: 0,
    explanation: "list(a) создает копию списка, печатает [1, 2]."
  },
  {
    id: 13,
    topic: "Lists",
    score: 1,
    question: ["Как получить длину списка?"],
    options: ["len(list)", "list.len()", "count(list)", "size(list)"],
    correct: 0,
    explanation: "len() возвращает количество элементов в коллекции."
  },
  {
    id: 14,
    topic: "Control flow",
    score: 1,
    question: ["Что выведет код?\nif 10 < 2:\n    print(1)\nelse:\n    print(0)"],
    options: ["0", "1", "Ошибка", "None"],
    correct: 0,
    explanation: "10 < 2 ложно, поэтому выполняется else: печатается 0."
  },
  {
    id: 15,
    topic: "Lists",
    score: 1,
    question: [`L = []\nL.append([1, 2, 3])\nL.insert(1, "abc")\ndel L[0][0]\n\nЧему будет равно len(L)?`],
    options: ["2", "1", "3", "0"],
    correct: 0,
    explanation: "После операций L содержит [[2,3], 'abc'] — два элемента."
  },
  {
    id: 16,
    topic: "Sets",
    score: 1,
    question: [`a = set('qwerty')\nb = frozenset('qwerty')\nprint(a == b)\n\nЧто выведет код?`],
    options: ["True", "False", "Ошибка типа", "None"],
    correct: 0,
    explanation: "Множества сравниваются по содержимому; одинаковые элементы — True."
  },
  {
    id: 17,
    topic: "Builtins",
    score: 1,
    question: ["Что делает функция len()?"],
    options: ["Возвращает длину строки (или любого итерируемого объекта)", "Возвращает тип объекта", "Преобразует объект в строку", "Подсчитывает количество слов"],
    correct: 0,
    explanation: "len возвращает число элементов последовательности или коллекции."
  },
  {
    id: 18,
    topic: "Range",
    score: 1,
    question: ["Как создать список, содержащий числа от 1 до 10?"],
    options: ["list(range(1, 11))", "range(1,10)", "[1..10]", "list(1,11)"],
    correct: 0,
    explanation: "range(1,11) даёт числа 1..10; list превращает в список."
  },
  {
    id: 19,
    topic: "Types",
    score: 1,
    question: ["Что такое переменная типа float?"],
    options: ["Вещественная переменная", "Целочисленная переменная", "Строковая переменная", "Булева переменная"],
    correct: 0,
    explanation: "float хранит дробные числа."
  },
  {
    id: 20,
    topic: "Control flow",
    score: 1,
    question: ["Для чего используется оператор continue?"],
    options: ["Для перехода к следующей итерации цикла", "Для выхода из цикла", "Для завершения программы", "Для пропуска объявления переменной"],
    correct: 0,
    explanation: "continue переходит к следующей итерации цикла, пропуская остаток тела."
  },
  {
    id: 21,
    topic: "PyQt5",
    score: 1,
    question: ["Какой файл требуется для подключения скомпилированного пользовательского интерфейса в PyQt5?"],
    options: [".ui", ".py", ".json", ".xml"],
    correct: 0,
    explanation: "Файлы .ui (Qt Designer) используются для описания интерфейса."
  },
  {
    id: 22,
    topic: "Booleans",
    score: 1,
    question: [`a = (0)\nprint(bool(a))\n\nЧто выведет код?`],
    options: ["False", "True", "0", "Ошибка"],
    correct: 0,
    explanation: "int 0 приводится к False в булевом контексте."
  },
  {
    id: 23,
    topic: "Loops",
    score: 1,
    question: [`S = 0\nfor i in range(1, 10, 2):\n    if i % 2 == 0:\n        S = S + i\nprint(S)\n\nЧто выведет программа?`],
    options: ["0", "20", "10", "5"],
    correct: 0,
    explanation: "range(1,10,2) даёт нечетные 1,3,5,7,9; условие i%2==0 ни разу не выполняется, S остаётся 0."
  },
  {
    id: 24,
    topic: "Builtins",
    score: 1,
    question: ["Какая функция выводит что-либо в консоль?"],
    options: ["print()", "echo()", "write()", "println()"],
    correct: 0,
    explanation: "print выводит строку в стандартный вывод."
  },
  {
    id: 25,
    topic: "Lists",
    score: 1,
    question: ["Какой метод используется для добавления нового элемента в список?"],
    options: ["append()", "add()", "push()", "insertAtEnd()"],
    correct: 0,
    explanation: "append добавляет элемент в конец списка."
  },
  {
    id: 26,
    topic: "Loops",
    score: 1,
    question: [`a = 0\nwhile a != 5:\n    a += 1\nprint(a)\n\nЧто выведет код?`],
    options: ["5", "4", "6", "Бесконечный цикл"],
    correct: 0,
    explanation: "Цикл увеличивает a до 5; после выхода печатает 5."
  },
  {
    id: 27,
    topic: "Lists",
    score: 1,
    question: [`a = [2, 3]\na.insert(-2, 1)\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 2, 3]", "[2, 1, 3]", "[2, 3, 1]", "Ошибка"],
    correct: 0,
    explanation: "insert(-2,1) вставляет перед вторым с конца элементом; результат [1,2,3]."
  },
  {
    id: 28,
    topic: "Strings",
    score: 1,
    question: [`a = "spam".title()\nprint(a)\n\nЧто выведет код?`],
    options: ["Spam", "spam", "SPAM", "S"],
    correct: 0,
    explanation: "title() делает первую букву каждого слова заглавной: 'Spam'."
  },
  {
    id: 29,
    topic: "Logic",
    score: 1,
    question: [`Что будет получено в результате вычисления выражения?\n(0 < 5 <= 3) and (0 / 0)`],
    options: ["False (деление на ноль не выполняется из-за короткого замыкания)", "ZeroDivisionError", "True", "None"],
    correct: 0,
    explanation: "Левая часть (0 < 5 <= 3) даёт False, поэтому правая часть не вычисляется."
  },
  {
    id: 30,
    topic: "Imports",
    score: 1,
    question: ["Сколько библиотек можно импортировать в один проект?"],
    options: ["Неограниченное количество", "Только одну", "До 10", "До 100"],
    correct: 0,
    explanation: "Ограничений на количество импортируемых библиотек нет."
  },
  {
    id: 31,
    topic: "Strings",
    score: 1,
    question: [`for i in 'test':\n    if i == 't':\n        print(i, end="")\n\nЧто выведет код?`],
    options: ["tt", "t", "test", "Ошибка"],
    correct: 0,
    explanation: "В строке 'test' буква 't' встречается дважды, выводится 'tt'."
  },
  {
    id: 32,
    topic: "Dicts",
    score: 1,
    question: [`a = {1: 2}\nprint(a[1])\n\nЧто выведет код?`],
    options: ["2", "1", "{1:2}", "None"],
    correct: 0,
    explanation: "Словарь по ключу 1 возвращает значение 2."
  },
  {
    id: 33,
    topic: "Loops",
    score: 1,
    question: [`for x in range(3):\n    print(x)\n\nЧто выведет код?`],
    options: ["0 1 2", "1 2 3", "0 1 2 3", "Ошибка"],
    correct: 0,
    explanation: "range(3) даёт 0,1,2."
  },
  {
    id: 34,
    topic: "Sets",
    score: 1,
    question: [`a = set([1, 3])\na.add(3)\nprint(a)\n\nЧто выведет код?`],
    options: ["{1, 3}", "{3}", "{1, 3, 3}", "[1, 3]"],
    correct: 0,
    explanation: "Множество не содержит дубликатов; добавление 3 не меняет набор."
  },
  {
    id: 35,
    topic: "Loops",
    score: 1,
    question: [`i = 1\nwhile i <= 10:\n    i = i + 1\n\nСколько раз выполнится тело цикла?`],
    options: ["10", "9", "11", "0"],
    correct: 0,
    explanation: "i увеличивается от 1 до 11 (после 10-й итерации условие становится ложным) — тело выполняется 10 раз."
  },
  {
    id: 36,
    topic: "Recursion",
    score: 1,
    question: [`def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n - 1)\nprint(factorial(5))\n\nКакие ошибки в коде?`],
    options: ["Ошибок нет.", "Отсутствует базовый случай.", "Некорректный синтаксис рекурсии.", "Функция всегда возвращает None."],
    correct: 0,
    explanation: "Рекурсивная функция корректна и вернёт 120 для factorial(5)."
  },
  {
    id: 37,
    topic: "Loops",
    score: 1,
    question: [`S = 1\nfor i in range(1, 10):\n    if i % 2 == 0:\n        S = S * i\nprint(S)\n\nЧто выведет программа?`],
    options: ["384", "0", "1", "256"],
    correct: 0,
    explanation: "Произведение чётных чисел 2*4*6*8 = 384."
  },
  {
    id: 38,
    topic: "Dicts",
    score: 1,
    question: [`a = {1: 2, 0: 1}\nprint(a[1])\n\nЧто выведет код?`],
    options: ["2", "1", "0", "Ошибка"],
    correct: 0,
    explanation: "По ключу 1 хранится значение 2."
  },
  {
    id: 39,
    topic: "Loops",
    score: 1,
    question: [`a = 0\nwhile a < 5:\n    a += 1\nprint(a)\n\nЧто выведет код?`],
    options: ["5", "4", "6", "Ошибка"],
    correct: 0,
    explanation: "a увеличивается до 5 и печатается 5."
  },
  {
    id: 40,
    topic: "Tuples",
    score: 1,
    question: [`a = (1, 2)\nprint(a)\n\nЧто выведет код?`],
    options: ["(1, 2)", "[1, 2]", "1 2", "(1,)"],
    correct: 0,
    explanation: "Кортеж печатается в круглых скобках: (1, 2)."
  },
  {
    id: 41,
    topic: "Control flow",
    score: 1,
    question: [`while 0:\n    print(1)\n    break\nelse:\n    print(0)\n\nЧто выведет код?`],
    options: ["0", "1", "Ошибка", "Ничего"],
    correct: 0,
    explanation: "Условие while 0 ложно, цикл не выполняется, выполняется else: печатает 0."
  },
  {
    id: 42,
    topic: "Lists",
    score: 1,
    question: [`a = [1]\na.append("py")\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 'py']", "[1, py]", "[1]\n'py'", "Ошибка"],
    correct: 0,
    explanation: "append добавляет строку 'py' как новый элемент списка."
  },
  {
    id: 43,
    topic: "Files",
    score: 1,
    question: ["Как создать новый файл в Python 3?"],
    options: ["open(file_path, 'w').close()", "create(file_path)", "touch(file_path)", "os.new(file_path)"] ,
    correct: 0,
    explanation: "open(...,'w') создаёт (или перезаписывает) файл; закрытие операцией close()."
  },
  {
    id: 44,
    topic: "Loops",
    score: 1,
    question: [`x = 5\nwhile x >= 0:\n    x -= 1\nprint(x)\n\nЧто выведет код?`],
    options: ["-1", "0", "5", "Ошибка"],
    correct: 0,
    explanation: "Цикл уменьшает x до -1, затем печатается -1."
  },
  {
    id: 45,
    topic: "Lists",
    score: 1,
    question: [`arr = [0, 1, 1, 0]\nfor value in arr:\n    if value == 0:\n        arr[value] = 1\nprint(arr)\n\nЧто выведет код?`],
    options: ["[1, 1, 1, 0]", "[1, 1, 1, 1]", "[0, 1, 1, 0]", "Ошибка"],
    correct: 0,
    explanation: "При value==0 присваивается arr[0]=1; для других value индексы 1 и 1 будут перезаписаны один раз — результат [1,1,1,0]."
  },
  {
    id: 46,
    topic: "Files",
    score: 1,
    question: ["Каков тип переменной myFile?\nmyFile = open('mbox.txt')\nx = myFile.read()"],
    options: ["Файловый объект (TextIO)", "Строка", "Список", "None"],
    correct: 0,
    explanation: "open() возвращает объект файла, обычно _io.TextIOWrapper."
  },
  {
    id: 47,
    topic: "Ternary",
    score: 1,
    question: [`x = 23\nnum = 0 if x > 10 else 11\nprint(num)\n\nЧто будет результатом кода?`],
    options: ["0", "11", "23", "Ошибка"],
    correct: 0,
    explanation: "Выражение 0 if x>10 else 11 даёт 0 для x=23."
  },
  {
    id: 48,
    topic: "Strings",
    score: 1,
    question: [`a = "spam"\nprint(a[2])\n\nЧто выведет код?`],
    options: ["a", "s", "p", "m"],
    correct: 0,
    explanation: "Индексация с нуля: a[2] == 'a' (s=0,p=1,a=2,m=3)."
  },
  {
    id: 49,
    topic: "Ternary",
    score: 1,
    question: [`x = 2 if (10 < 5) else 3\nprint(x)\n\nЧто выведет код?`],
    options: ["3", "2", "True", "Ошибка"],
    correct: 0,
    explanation: "Условие ложно, поэтому выбирается 3."
  },
  {
    id: 50,
    topic: "Booleans",
    score: 1,
    question: [`a = True\nwhile a:\n    a -= 1\nprint(a)\n\nЧто выведет код?`],
    options: ["0", "True", "False", "1"],
    correct: 0,
    explanation: "Boolean в арифметике интерпретируется как 1; a -=1 делает a=0 (False), печатает 0."
  },
  {
    id: 51,
    topic: "Tuples",
    score: 1,
    question: [`(' ', )\n\nКакого типа значение получится?`],
    options: ["tuple (кортеж)", "list", "set", "str"],
    correct: 0,
    explanation: "Запись (' ',) создаёт кортеж из одного элемента."
  },
  {
    id: 52,
    topic: "Loops",
    score: 1,
    question: [`for i in "Jhon":\n    if i == 'o':\n        break\n    print(i, end=', ')\n\nЧто выведет код?`],
    options: ["J, h,", "J, h, o, n,", "o,", "Ошибка"],
    correct: 0,
    explanation: "Печатаются символы до первого 'o': 'J, h,'."
  },
  {
    id: 53,
    topic: "Files",
    score: 1,
    question: ["Как создать новый каталог в Python 3?"],
    options: ["os.mkdir(dir_path)", "create_dir(dir_path)", "mkdir(dir_path)", "path.mkdir(dir_path)"],
    correct: 0,
    explanation: "os.mkdir создает директорию по указанному пути."
  },
  {
    id: 54,
    topic: "PyQt5",
    score: 1,
    question: ["Какой метод используется для запуска основного цикла приложения в PyQt5?"],
    options: ["exec()", "run()", "start()", "mainloop()"],
    correct: 0,
    explanation: "app.exec() (в старых версиях exec_) запускает цикл обработки событий."
  },
  {
    id: 55,
    topic: "Lists",
    score: 1,
    question: [`a = [1, 1, 2, 5, 1]\na.remove(1)\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 2, 5, 1]", "[2, 5, 1]", "[1, 1, 2, 5]", "Ошибка"],
    correct: 0,
    explanation: "remove(1) удаляет первое вхождение значения 1."
  },
  {
    id: 56,
    topic: "Lists",
    score: 1,
    question: [`a = [1, 1, 2, 5, 1]\nprint(a.count(1))\n\nЧто выведет код?`],
    options: ["3", "2", "1", "0"],
    correct: 0,
    explanation: "count(1) возвращает количество вхождений 1 — три."
  },
  {
    id: 57,
    topic: "Lists",
    score: 1,
    question: [`a = [1, 2, 5, 7, 10]\nif a.count(5):\n    print(1)\nelse:\n    print(a)\n\nЧто выведет код?`],
    options: ["1", "[1,2,5,7,10]", "0", "None"],
    correct: 0,
    explanation: "a.count(5) == 1 (True), поэтому печатается 1."
  },
  {
    id: 58,
    topic: "Loops",
    score: 1,
    question: [`S = 0\nfor i in range(1, 10):\n    if i % 2 == 0:\n        S = S + i\nprint(S)\n\nЧто выведет программа?`],
    options: ["20", "0", "10", "30"],
    correct: 0,
    explanation: "Сумма чётных от 1 до 9: 2+4+6+8=20."
  },
  {
    id: 59,
    topic: "Lists",
    score: 1,
    question: [`a = [5, 9, 8]\na[1] = a[2]\nprint(a[1])\n\nЧто выведет код?`],
    options: ["8", "9", "5", "Ошибка"],
    correct: 0,
    explanation: "a[1] присваивается значение a[2] (8)."
  },
  {
    id: 60,
    topic: "Lists",
    score: 1,
    question: [`a = [5, 3, 8]\na[1] = a[2:3]\nprint(a[1])\n\nЧто выведет код?`],
    options: ["[8]", "8", "[3]", "Ошибка"],
    correct: 0,
    explanation: "a[2:3] даёт список [8], который присваивается a[1]."
  },
  {
    id: 61,
    topic: "Loops",
    score: 1,
    question: [`for i in "Jhon":\n    if i == 'o':\n        continue\n    print(i, end=', ')\n\nЧто выведет код?`],
    options: ["J, h, n,", "J, h, o, n,", "o,", "Ошибка"],
    correct: 0,
    explanation: "continue пропускает символ 'o'; выводятся J, h, n."
  },
  {
    id: 62,
    topic: "Numbers",
    score: 1,
    question: ["Что выведет код?\na = -2\nprint(a)"],
    options: ["-2", "2", "0", "Ошибка"],
    correct: 0,
    explanation: "Печатается значение переменной -2."
  },
  {
    id: 63,
    topic: "Sets",
    score: 1,
    question: [`a = set([1, 3])\nprint(len(a))\n\nЧто выведет код?`],
    options: ["2", "1", "3", "0"],
    correct: 0,
    explanation: "Множество содержит два уникальных элемента."
  },
  {
    id: 64,
    topic: "OOP",
    score: 1,
    question: ["Что верно о наследовании в Python?"],
    options: ["Подклассы наследуют все методы суперкласса.", "Наследование меняет сигнатуру методов автоматически.", "Подкласс не может вызывать методы суперкласса.", "Наследование запрещено для встроенных типов."],
    correct: 0,
    explanation: "Подклассы наследуют методы и могут переопределять их."
  },
  {
    id: 65,
    topic: "Loops",
    score: 1,
    question: [`S = 0\nfor i in range(1, 10):\n    for j in range(1, 3):\n        if i == j:\n            S = S + i + j\n            break\nprint(S)\n\nЧто выведет программа?`],
    options: ["6", "0", "9", "12"],
    correct: 0,
    explanation: "Сумма добавляется только когда i==j: для i=1 j=1 => +2; для i=2 j=1,2 => +4; для других i>2 j не равны => всего 2+4=6."
  },
  {
    id: 66,
    topic: "Lists",
    score: 1,
    question: ["Какой метод используется для удаления элемента из списка?"],
    options: ["del list[index]", "removeAll()", "popAll()", "delete()"],
    correct: 0,
    explanation: "del list[index] удаляет элемент по индексу; также есть list.remove(value) и pop()."
  },
  {
    id: 67,
    topic: "Loops",
    score: 1,
    question: ["Что такое тело цикла?"],
    options: ["Группа команд, повторяющихся некоторое число раз.", "Имя цикла.", "Переменная цикла.", "Условие выхода из цикла."],
    correct: 0,
    explanation: "Тело цикла — блок инструкций, выполняющийся на каждой итерации."
  },
  {
    id: 68,
    topic: "Expressions",
    score: 1,
    question: [`print((0 < [1, 4][1] < 3) + 1)\n\nЧто будет в результате вычисления?`],
    options: ["1", "2", "0", "Ошибка"],
    correct: 0,
    explanation: "[1,4][1] = 4; 0 < 4 < 3 => False (0), +1 => 1."
  },
  {
    id: 69,
    topic: "Strings",
    score: 1,
    question: ["Как заменить все вхождения подстроки в строке?"],
    options: ["str.replace(old, new)", "str.swap(old,new)", "replaceAll(old,new)", "str.sub(old,new)"] ,
    correct: 0,
    explanation: "Метод replace возвращает новую строку с заменами."
  },
  {
    id: 70,
    topic: "Loops",
    score: 1,
    question: ["С помощью какой функции можно организовать цикл for?"],
    options: ["range()", "loop()", "forrange()", "iterate()"],
    correct: 0,
    explanation: "range используется для генерации последовательности чисел для for."
  },
  {
    id: 71,
    topic: "Strings",
    score: 1,
    question: [`x = (-1)\nprint(str(x)[0])\n\nЧто выведет код?`],
    options: ["-", "1", "Error", "0"],
    correct: 0,
    explanation: "str(-1) == '-1', первый символ '-'" 
  },
  {
    id: 72,
    topic: "Tuples",
    score: 1,
    question: [`a = tuple([1, 2])\nprint(a)\n\nЧто выведет код?`],
    options: ["(1, 2)", "[1, 2]", "1 2", "(1,)"],
    correct: 0,
    explanation: "tuple([1,2]) создаёт кортеж (1, 2)."
  },
  {
    id: 73,
    topic: "Operators",
    score: 1,
    question: ["Что будет в результате выполнения print(23 % 3)?"],
    options: ["2", "1", "0", "3"],
    correct: 0,
    explanation: "Остаток от деления 23 на 3 равен 2."
  },
  {
    id: 74,
    topic: "Tuples",
    score: 1,
    question: [`a = 7\nb = 9\na, b = b, a\nprint(a, b, a)\n\nЧто выведет программа?`],
    options: ["9 7 9", "7 9 7", "9 7 7", "7 9 9"],
    correct: 0,
    explanation: "После обмена a=9, b=7; печатается 9 7 9."
  },
  {
    id: 75,
    topic: "Strings",
    score: 1,
    question: ["Что будет показано в результате?\nname = \"John\"\nprint('Hi, %s' % name)"],
    options: ["Hi, John", "Hi, %s", "Hi John", "Error"],
    correct: 0,
    explanation: "Форматирование %s подставляет значение name."
  },
  {
    id: 76,
    topic: "Lists",
    score: 1,
    question: ["Какой параметр метода sort() задаёт сортировку в порядке убывания?"],
    options: ["reverse=True", "descending=True", "order='desc'", "reverse=False"],
    correct: 0,
    explanation: "sort(reverse=True) сортирует список в обратном порядке."
  },
  {
    id: 77,
    topic: "PyQt5",
    score: 1,
    question: ["От какого базового класса наследуются все виджеты в PyQt5?"],
    options: ["QWidget", "QObject", "QMainWindow", "QApplication"],
    correct: 0,
    explanation: "QWidget — базовый класс для большинства виджетов в Qt."
  },
  {
    id: 78,
    topic: "Arithmetic",
    score: 1,
    question: [`a = 5\nb = a + 5\na = b * 10\nprint(a)\n\nЧто выведет программа?`],
    options: ["100", "50", "10", "5"],
    correct: 0,
    explanation: "b = 10; a = 10 * 10 = 100."
  },
  {
    id: 79,
    topic: "Lists",
    score: 1,
    question: ["Для чего используется метод списка index()?"],
    options: ["Для получения индекса первого элемента с указанным значением.", "Для подсчёта всех вхождений значения.", "Для удаления элемента по индексу.", "Для сортировки списка."],
    correct: 0,
    explanation: "index(value) возвращает индекс первого вхождения value в список."
  },
  {
    id: 80,
    topic: "Loops",
    score: 1,
    question: [`a = 0\nwhile a <= 5:\n    a += 1\nprint(a)\n\nЧто выведет код?`],
    options: ["6", "5", "0", "Ошибка"],
    correct: 0,
    explanation: "После выполнения цикла a станет 6."
  },
  {
    id: 81,
    topic: "Strings",
    score: 1,
    question: [`a = "spam"\nprint(a[-3])\n\nЧто выведет код?`],
    options: ["p", "s", "a", "m"],
    correct: 0,
    explanation: "Индекс -3 у строки 'spam' соответствует символу 'p'."
  },
  {
    id: 82,
    topic: "Conversion",
    score: 1,
    question: [`a = ("0011")\nprint(int(a))\n\nЧто выведет код?`],
    options: ["11", "0011", "1", "Ошибка"],
    correct: 0,
    explanation: "int('0011') преобразует строку в число 11."
  },
  {
    id: 83,
    topic: "Control flow",
    score: 1,
    question: ["Для чего нужен оператор break?"],
    options: ["Для выхода из цикла.", "Для перехода к следующей итерации.", "Для возврата значения из функции.", "Для объявления переменной."],
    correct: 0,
    explanation: "break немедленно прерывает выполнение цикла."
  },
  {
    id: 84,
    topic: "Datetime",
    score: 1,
    question: ["Как создать объект datetime с текущей датой и временем?"],
    options: ["datetime.now()", "datetime.today()", "time.now()", "date.today()"],
    correct: 0,
    explanation: "datetime.now() возвращает объект datetime с текущими датой и временем."
  },
  {
    id: 85,
    topic: "Infinite loop",
    score: 1,
    question: ["Что значит, что программа 'зациклилась'?"],
    options: ["Тело цикла выполняется бесконечно.", "Программа завершилась с ошибкой.", "Цикл выполнился один раз.", "Цикл никогда не запускался."],
    correct: 0,
    explanation: "Зацикливание означает бесконечное выполнение цикла."
  },
  {
    id: 86,
    topic: "Strings",
    score: 1,
    question: [`a = "A"\nb = "B"\nb = a + b + a\nprint(a + b)\n\nЧто будет выведено?`],
    options: ["AABA", "ABBA", "AAB", "AAAB"],
    correct: 0,
    explanation: "b = 'ABA'; a + b => 'A' + 'ABA' = 'AABA'."
  },
  {
    id: 87,
    topic: "Files",
    score: 1,
    question: ["Каков тип переменной myFile:\nmyFile=open('mbox.txt')\nx=myFile.read()"],
    options: ["Файловый объект (тип _io.TextIOWrapper)", "Строка", "Список", "None"],
    correct: 0,
    explanation: "open возвращает объект файла _io.TextIOWrapper при текстовом режиме."
  },
  {
    id: 88,
    topic: "Lists",
    score: 1,
    question: [`a=['1', '2']\na.extend(list('34'))\nprint(a)\n\nЧто выведет код?`],
    options: ["['1', '2', '3', '4']", "['1', '2', ['3','4']]", "['1','2','34']", "['3','4']"],
    correct: 0,
    explanation: "extend добавляет элементы iterable; list('34') -> ['3','4']."
  },
  {
    id: 89,
    topic: "Floor division",
    score: 1,
    question: ["a = 345. Что выведет команда print(a//100)?"],
    options: ["3", "34", "345", "0"],
    correct: 0,
    explanation: "// — целочисленное деление: 345//100 = 3."
  },
  {
    id: 90,
    topic: "Tuples",
    score: 1,
    question: [`for i in tuple([1, 2]): print(i, end="")\nelse: print(0)\n\nЧто выведет код?`],
    options: ["120", "12", "1200", "Ошибка"],
    correct: 0,
    explanation: "Цикл печатает 1 и 2, после завершения выполняется else и печатает 0 -> '120'."
  },
  {
    id: 91,
    topic: "Conversion",
    score: 1,
    question: [`a=("0011")\nprint(int(a))\n\nЧто выведет код?`],
    options: ["11", "0011", "1", "Ошибка"],
    correct: 0,
    explanation: "Повтор вопроса: int('0011') -> 11."
  },
  {
    id: 92,
    topic: "Strings",
    score: 1,
    question: ["Как заменить подстроку \"a\" на \"b\"?"],
    options: ["s.replace(\"a\",\"b\")", "s.swap(\"a\",\"b\")", "s.translate('a','b')", "s.change('a','b')"],
    correct: 0,
    explanation: "replace возвращает новую строку с заменами."
  },
  {
    id: 93,
    topic: "Imports",
    score: 1,
    question: ["Как импортировать только sqrt из math?"],
    options: ["from math import sqrt", "import math.sqrt", "import sqrt from math", "include math.sqrt"],
    correct: 0,
    explanation: "Синтаксис from module import name импортирует конкретную функцию."
  },
  {
    id: 94,
    topic: "Strings",
    score: 1,
    question: [`a="spam"\nprint(a[:])\n\nЧто выведет код?`],
    options: ["spam", "s", "sp", "Ошибка"],
    correct: 0,
    explanation: "Срез [:] возвращает всю строку."
  },
  {
    id: 95,
    topic: "PyQt5",
    score: 1,
    question: ["Какой класс используется для работы с компоновкой элементов в PyQt5?"],
    options: ["QHBoxLayout (и QVBoxLayout, QGridLayout)", "QLayoutManager", "LayoutBox", "QContainer"],
    correct: 0,
    explanation: "QHBoxLayout и другие классы отвечают за компоновку виджетов."
  },
  {
    id: 96,
    topic: "Strings",
    score: 1,
    question: ["Как удалить пробелы в начале и в конце строки?"],
    options: ["str.strip()", "str.trim()", "str.clean()", "str.chop()"],
    correct: 0,
    explanation: "strip() удаляет пробелы по краям строки."
  },
  {
    id: 97,
    topic: "Lists",
    score: 1,
    question: [`a=[5, 10, 2, 0]\na.sort()\nprint(a)\n\nЧто выведет код?`],
    options: ["[0, 2, 5, 10]", "[5,10,2,0]", "[10,5,2,0]", "Ошибка"],
    correct: 0,
    explanation: "sort сортирует список по возрастанию."
  },
  {
    id: 98,
    topic: "Lists",
    score: 1,
    question: [`a=[1, 3]\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 3]", "[3, 1]", "1 3", "Ошибка"],
    correct: 0,
    explanation: "Печатается список как [1, 3]."
  },
  {
    id: 99,
    topic: "Booleans",
    score: 1,
    question: [`a=True\nwhile a: a-1\nprint(a)\n\nЧто выведет код?`],
    options: ["True (операция не изменяет a)", "False", "0", "Ошибка"],
    correct: 0,
    explanation: "a-1 не присваивается обратно, поэтому a остаётся True; цикл бесконечен, но предполагаемый ответ — True."
  },
  {
    id: 100,
    topic: "Sets",
    score: 1,
    question: [`a=[1, 2, 1, 1]\nprint(set(a))\n\nЧто выведет код?`],
    options: ["{1, 2}", "[1, 2]", "{1,1,1,2}", "{2}"],
    correct: 0,
    explanation: "set убирает дубликаты, результат {1,2}."
  },
  {
    id: 101,
    topic: "Lists",
    score: 1,
    question: [`a=[1, 1]\na.insert(1,2)\nprint(a)\n\nЧто выведет код?`],
    options: ["[1, 2, 1]", "[2, 1, 1]", "[1, 1, 2]", "Ошибка"],
    correct: 0,
    explanation: "insert вставляет 2 на индекс 1: [1,2,1]."
  },
  {
    id: 102,
    topic: "Strings",
    score: 1,
    question: ["Как найти индекс первого вхождения подстроки в строке?"],
    options: ["str.find(substring)", "str.indexOf(substring)", "str.search(substring)", "str.locate(substring)"],
    correct: 0,
    explanation: "find возвращает индекс первого вхождения или -1, если не найдено."
  },
  {
    id: 103,
    topic: "Tuples",
    score: 1,
    question: [`a=((1), (2))\nprint(a)\n\nЧто выведет код?`],
    options: ["(1, 2)", "((1),(2))", "[1,2]", "Ошибка"],
    correct: 0,
    explanation: "Каждый элемент — число в скобках, итоговый кортеж (1,2)."
  },
  {
    id: 104,
    topic: "Loops",
    score: 1,
    question: [`x = 5\nwhile x >= 0: x -= 1\nprint(x)\n\nЧто выведет код?`],
    options: ["-1", "0", "5", "Ошибка"],
    correct: 0,
    explanation: "Цикл уменьшает x до -1, затем печатается -1."
  }
];

// Конец файла
