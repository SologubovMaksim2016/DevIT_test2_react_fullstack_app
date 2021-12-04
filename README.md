# DevIT_test2_react_fullstack_app


Тестовое задание DevIT. Разработка fullstack приложения для регистрации и управления пользователями
___
## Quick start

Клонируем репозиторий в пустую папку 
``` bash
$ git clone https://github.com/SologubovMaksim2016/DevIT_test2_react_fullstack_app.git
```
Из консоли переходим в клонированную папку
``` bash
$ cd DevIT_test2_react_fullstack_app
```


```проверка версии node.js:```
``` bach
$ node –v  
```

Если node.js на компъютере не установлена, устанавливаем  стабильную версию с сайта  [Nodejs.org](https://nodejs.org/en/)

Команды в консоли:

```проверка версии npm:```
``` bach
$ npm –v  
```
```Для установки зависимостей проекта запускаем команду```
``` bach
$ npm install
```
```для компиляции и запуска тестового задания```
``` bach
$ npm start 
```

Переходим в браузере по адресу http://localhost:3000/



## При выполненнии тестового задания использовались:
``` typescript
- JavaScript
- Typescript
- Node
- NPM
- HTML
- CSS
``` 


## Author

**Maksim Sologubov**

- [Profile](https://github.com/rohit19060 "Rohit jain")
- [Email](mailto:sologubovmaksim2016@gmail.com?subject=Hi "Hi!")
- [Linkedin](https://linkedin.com/in/maksimsologubov "Welcome")
- [CV](http://cvmkr.com/KQFg "My CV")



## Примеры использования:

>## ***Свойства коллекции*** 
># .lenght
>- создает коллекцию на основании переданного массива.
>``` typescript
>	let lenght = Collection.make([1, 2, 3, 4]).lenght	 //  4
>```

---
>## ***Статические методы***

># .make([arr: array = [] ]): Collection
>- создает коллекцию на основании переданного массива.
>``` typescript
>	let coll = Collection.make([1, 2, 3, 4])	// coll.arr = [1,2,3,4]	
>```
># .map( callback: functionб arr: array): Collection
>- выполняет действия над каждым элементом массива, согдасно переданной функции.
>``` typescript
>	let array = [1, 2, 3, 4]
>	let map = Collection.map((item) => item * 2, array)	// map.arr = [2,4,6,8] , array = [1, 2, 3, 4]
>```
>
># .filter( callback: functionб arr: array): Collection
>- фильтрует массив по условию.Возвращает новую коллекцию не изменяя старой.
>``` typescript
>	let array = [1, 2, 3, 4]
>	let filter = Collection.filter((item) => item > 2, array)// filter.arr = [3,4] , array = [1, 2, 3, 4]
>```
># .reduce( callback: function, arr: array, [, initial: any]): Collection
>- последовательно обрабатывает каждый элемента массива с сохранением промежуточного результата.
>``` typescript
>	let array = [1, 2, 3, 4]
>	let reduce = Collection.reduce( (a: any,b: any)=>  a+b  ,  [1, 2, 3, 4], 0)// reduce.arr = 10, array = [1, 2, 3, 4]
>```
># .every( callback: function, arr: array,): void
>- проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
>``` typescript
>	let every = Collection.every( (elem => elem >=3)  ,  [1, 2, 3, 4])// false
>	let every = Collection.every( (elem => elem <= 5)  ,  [1, 2, 3, 4])// true
>```
># .indexOf( searchElement: string, arr: array [, fromIndex: number = 0]): number
>- возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
>``` typescript
>	let indexOf = Collection.indexOf( ("Vasya"), [1, 2, "Vasya",  "Rafshan", false])// 2	
>```
>
># .toJSON(arr: array): string
>- возвращает значение в формате JSON.
>``` typescript
>	let toJSON = Collection.filter((item) => item > 2, [1, 2, 3, 4]).toJSON()	 // "[3,4]"
>```
># .toQueryString(arr: array): string
>- возвращает значение в формате QueryString.
>``` typescript
>	let toQueryString = Collection.make([1, 2, 3, 4]).toQueryString()	 // "0=1&1=2&2=3&3=4"
>```
># .isEmpty(arr: array): : boolean
>- возвращает значение в формате QueryString.
>``` typescript
>	let isEmpty = Collection.make([1, 2, 3, 4]).isEmpty()	 // false
>	let isEmpty = Collection.make([]).isEmpty()	 // true
>```
># .find( search: string|regex, arr: array,): Collection
>- выполняет поиск в массиве по переданному значению
>``` typescript
>	let data = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
>	let find: ICollection = Collection.find("Vasya", data) // find.arr = ["Vasya"]
>```
># .avg(arr: array [, skipNaN: bool = false]): number
>- возвращает среднее арифметическое, с возможностью исключения не числовых значений
>``` typescript
>	let avg = Collection.avg([1, 2, 3, 4])   //  avg = 5
>	let avg2 = Collection.avg(true, [1, 2, true, "vasja", false, 0, 3, 4])   //  avg2 = 1.25	
>```
># .chunk( count: number, arr: array): Collection[]
>- разбивает массив на части с заданным размером массива
>``` typescript
>	let chunk = Collection.chunk(2, [1, 2, 1990, 85, 24, 5, 7, 8.1]) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]		
>```
># .skipUntil( value: any, arr: array): Collection
>- пропускает заданное количество элементов
>``` typescript
>	let skipUntil = Collection.skipUntil(3, [1, 2, 1990, 85, 24, 5, 7, 8.1]) // [ 85, 24, 5, 7, 8.1]	
>```
># .contains( search: string|regex, arr: array): boolean
>- возвращает true, когда елемент есть в коллекции, false - когда на найден 
>``` typescript
>	let skipUntil = Collection.skipUntil([1, 2, 1990, 85, 24, 5, 7, 8.1], 3) // [ 85, 24, 5, 7, 8.1]	
>```
># .get(arr: array, path:string): any
>- по переданному пути возвращает элемент массива 
>``` typescript
>	let data = [{
>				name: "Vasya",
>				email: "vasya@example.com",
>				age: 20,
>			},{
>				name: "Dima",
>				email: "dima@example.com",
>				age: 34,
>			},1,3,5,[1, 2, 3, 4,[						
>									{
>										name: "Rafshan",
>										email: "rafshan@example.com",
>										age: 11,
>									 }					
>								]
>					]
>			]			
>	let get:any = Collection.get('[5][4][0][name]', data) // get = "Rafshan"
>```

># .normalize(arr: array, schema: string|Object[, transform: bool = false]): Collection
>- нормализует данные в массиве исключая или преобразуя не подходящие 
>``` typescript
>	let data = [1, "2", 1990, 85, "24.0", "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
>	let data2 =[
>		{
>			name: "Vasya",
>			email: "vasya@example.com",
>			age: 20,
>		},
>		{
>			name: "Dima",
>			email: "dima@example.com",
>			age: "34",
>		},
>		{
>			name: "Colya",
>			email: "colya@example.com",
>			age: 46,
>		},
>		{
>			name: "Misha",
>			email: "misha@example.com",
>			age: "16.0",
>		},
>		{
>			name: "Ashan",
>			email: "ashan@example.com",
>			age: 99,
>		},
>		{
>			name: "Rafshan",
>			email: "rafshan@example.com",
>			age: 11,
>		}
>	]
>
>	let res1 = Collection.normalize( 'string', data)		// res1.arr = ["2", "24.0", "Vasya", "colya@example.com", "Rafshan", "ashan@example.com"]
>	let res2 = Collection.normalize( 'string', data, true) // res2.arr = ["1", "2", "1990", "85", "24.0", "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", "true", "false"]
>	let res3 = Collection.normalize( 'number', data) // res3.arr = [1, 1990, 85]
>	let res4 = Collection.normalize( 'number', data, true)// res4.arr = [1, 2, 1990, 85, 24, 1]
>	let res5 = Collection.normalize( 'int', data)// res5.arr = [1, 1990, 85]
>	let res6 = Collection.normalize( 'int', data, true)// res6.arr = [1, 2, 1990, 85, 24]
>	let res7 = Collection.normalize( 'float', data)// res7.arr = []
>	let res8 = Collection.normalize( 'float', data, true)// res8.arr = [1, 2, 1990, 85, 24]
>	let res9 = Collection.normalize( 'bool', data)// res9.arr = [true, false]
>	let res10 = Collection.normalize( 'bool', data, true)// res10.arr = [true, true, false]
>	let res11 = Collection.normalize( 'function', data, true)// res11.arr = []
>	let res12 = Collection.normalize( 'array', data)// res12.arr = []
>	let res13 = Collection.normalize( 'array', data, true)// res13.arr = []
>	let res14 = Collection.normalize( { age: 'string' }, data2, true)// res14.arr = [{"key":"age","stringValue":"20"},{"key":"age","stringValue":"34"},{"key":"age","stringValue":"46"},{"key":"age","stringValue":"16.0"},{"key":"age","stringValue":"99"},{"key":"age","stringValue":"11"}]
>	let res15 = Collection.normalize( { age: 'string' }, data2)// res15.arr = [{"key":"age","value":"34"},{"key":"age","value":"16.0"}]
>	let res16 = Collection.normalize( { age: 'number' }, data2, true)// res16.arr = [{"key":"age","numValue":20},{"key":"age","numValue":34},{"key":"age","numValue":46},{"key":"age","numValue":16},{"key":"age","numValue":99},{"key":"age","numValue":11}]
>	let res17 = Collection.normalize( { age: 'number' }, data2)// res17.arr = [{"key":"age","value":20},{"key":"age","value":46},{"key":"age","value":99},{"key":"age","value":11}]
>	let res18 = Collection.normalize( { age: 'int' }, data2, true)// res18.arr = [{"key":"age","intValue":20},{"key":"age","intValue":34},{"key":"age","intValue":46},{"key":"age","intValue":16},{"key":"age","intValue":99},{"key":"age","intValue":11}]
>	let res19 = Collection.normalize( { age: 'int' }, data2)// res19.arr = [{"key":"age","value":20},{"key":"age","value":46},{"key":"age","value":99},{"key":"age","value":11}]
>	let res20 = Collection.normalize( { age: 'float' }, data2, true)// res20.arr = [{"key":"age","floatValue":20},{"key":"age","floatValue":34},{"key":"age","floatValue":46},{"key":"age","floatValue":16},{"key":"age","floatValue":99},{"key":"age","floatValue":11}]
>	let res21 = Collection.normalize( { age: 'float' }, data2)// res21.arr = []
>	let res22 = Collection.normalize( { age: 'bool' }, data2, true)// res22.arr = []
>	let res23 = Collection.normalize( { age: 'bool' }, data2)// res23.arr = []
>```

># .pluck( path: string, arr: array): Collection
>- возвращает найденных элементов по строковому ключу 
>``` typescript
> let data =[
>		{
>			name: "Vasya",
>			email: "vasya@example.com",
>			age: 20,
>		},
>		{
>			name: "Dima",
>			email: "dima@example.com",
>			age: "34",
>		},
>		{
>			name: "Colya",
>			email: "colya@example.com",
>			age: 46,
>		},
>		{
>			name: "Misha",
>			email: "misha@example.com",
>			age: "16.0",
>		},
>		{
>			name: "Ashan",
>			email: "ashan@example.com",
>			age: 99,
>		},
>		{
>			name: "Rafshan",
>			email: "rafshan@example.com",
>			age: 11,
>		}
>	]
>
>	let pluck = Collection.pluck('name', data) 	 // pluck.arr =  ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
>```

># .unique(arr: array): Collection
>- возвращает массив уникальных значений 
>``` typescript
>	let data = [1, 2, 1990, 85, 1, 1990, 24, 5, 7, 8.1];
>	let unique = Collection.unique( data) 	 // unique.arr = [1, 2, 1990, 85, 24, 5, 7, 8.1]
>```

># .fill(lenght: number, value: any): Collection
>- создает массив указанной длинны и заполняет его переданными значениями.
>``` typescript
>	let fill = Collection.fill(5, "test") 	 // fill.arr = ["test", "test", "test", "test", "test"]
>```

># .sort(arr: array [, compareFunction: function]): Collection
>- сортирует массив. Пользователь может передавать свою функцию сравнения значений
>``` typescript
>	let data = [1, 2, 1990, 85, 24]
>	let sort = Collection.sort( data, (a: any, b: any): number => a - b ) // sort.arr = [1,  2, 24, 85, 1990]
>```

># .sortDesc(arr: array [, compareFunction: function]): Collection
>- сортирует массив в обратном порядке. Пользователь может передавать свою функцию сравнения значений
>``` typescript
>	let data = [1, 2, 1990, 85, 24]
>	let sortDesc = Collection.sortDesc( data, (a: any, b: any): number => a - b ) // sortDesc.arr = [1990, 85, 24, 2, 1]
>```

># .sortBy(arr: array [, compareFunction: function]): Collection
>- сортирует массив  по ключу. Пользователь может передавать свою функцию сравнения значений (при отсутствии компаратора сравенние идет по строковому значению)
>``` typescript
>	let data = [{age: 1}, {age: 10}, {age: 4}, {age: 60}]
>	let sortBy = Collection.sortBy("age", data)  // sortBy.arr = [{"age":1},{"age":10},{"age":4},{"age":60}]
>	let sortBy2 = Collection.sortBy("age", data,  data, (a: any, b: any): number => a - b)  // sortBy2.arr = [{"age":1},{"age":4},{"age":10},{"age":60}]
>```

># .sortByDesc(arr: array [, compareFunction: function]): Collection
>- сортирует массив по ключу в обратном порядке. Пользователь может передавать свою функцию сравнения значений (при отсутствии компаратора сравенние идет по строковому значению)
>``` typescript
>	let data = [{age: 1}, {age: 10}, {age: 4}, {age: 60}]
>	let sortByDesc = Collection.sortByDesc("age", data) // sortByDesc.arr = [{"age":60},{"age":4},{"age":10},{"age":1}]
>	let sortByDesc2 = Collection.sortByDesc("age", data, (a: any, b: any): number => a - b) // sortByDesc2.arr = [{"age":60},{"age":10},{"age":4},{"age":1}]
>```














---
>## ***Методы в коллекции***
># .map( callback: function): Collection
>- выполняет действия над каждым элементом массива, согдасно переданной функции.Возвращает новую коллекцию не изменяя старой.
>``` typescript
>	let array = Collection.make([1, 2, 3, 4])
>	let map = array.map((item) => item * 2)	// map.arr = [2,4,6,8] , array = [1, 2, 3, 4]
>```
># .transform( callback: function): Collection
>- выполняет те же действия, что и "map". Преобразует текущую коллекцию.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let map = array.transform((item) => item * 2, array)	// map.arr = [2,4,6,8], array =  [2,4,6,8]
>```
># .filter( callback: function): Collection
>- фильтрует массив по условию.Возвращает новую коллекцию не изменяя старой.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let filter = array.filter((item) => item > 2, array)// filter.arr = [3,4] , array = [1, 2, 3, 4]
>```
># .sanitize( callback: function): Collection
>- выполняет те же действия, что и "filter". Преобразует текущую коллекцию.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let sanitize = array.filter((item) => item > 2, [1, 2, 3, 4])// sanitize.arr = [3,4], array = [3, 4]
>```
># .reduce( callback: function [, initial: any]): Collection
>- последовательно обрабатывает каждый элемента массива с сохранением промежуточного результата.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let reduce = array.reduce( (a: any,b: any)=>  a+b  ,  [1, 2, 3, 4], 0)// reduce.arr = 10, array = [1, 2, 3, 4]
>```
># .every( callback: function): void
>- проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])		
>	let every = array.every( (elem => elem >=3)  ,  [1, 2, 3, 4])// false
>	let every = array.every( (elem => elem <= 5)  ,  [1, 2, 3, 4])// true
>```
># .indexOf( searchElement: string [, fromIndex: number = 0): number
>- возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
>``` typescript
>	let array =  Collection.make([1, 2, "Vasya",  "Rafshan", false])
>	let indexOf = array.indexOf( ("Vasya") )// 2	
>```
># .toJSON(): string
>- возвращает значение в формате JSON.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let toJSON = array.filter((item) => item > 2).toJSON()	 // "[3,4]"
>```
># .toQueryString(): string
>- возвращает значение в формате QueryString.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let toQueryString =array.toQueryString()	 // "0=1&1=2&2=3&3=4"
>```
># .isEmpty(): boolean
>- возвращает значение в формате QueryString.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let array2 = []
>	let isEmpty = array.isEmpty()	 // false
>	let isEmpty2 =  array2.isEmpty()	 // true
>
>```
># .values: () => array;
>- возвращает массив коллекции.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let values = array.filter((item) => item > 2, [1, 2, 3, 4]).values()	 // [3,4]
>```
># .toArray: () => array;
>- возвращает массив коллекции.
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let toArray = array.filter((item) => item > 2, [1, 2, 3, 4]).toArray()	 // [3,4]
>```
>
># .find( search: string|regex): Collection
>- выполняет поиск в массиве по переданному значению
>``` typescript
>	let data =  Collection.make([1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]);
>	let find = data.find("Vasya") // find.arr = ["Vasya"]
>```
># .avg([, skipNaN: bool = false]): number
>- возвращает среднее арифметическое, с возможностью исключения не числовых значений
>``` typescript
>	let array =  Collection.make([1, 2, 3, 4])
>	let avg = array.avg()   //  avg = 5
>	let avg2 = array.avg(true)   //  avg2 = 1.25	
>```
># .chunk( count: number): Collection[]
>- разбивает массив на части с заданным размером массива
>``` typescript
>	let array =  Collection.make([1, 2, 1990, 85, 24, 5, 7, 8.1])
>	let chunk = array.chunk(2) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]		
>```
># .skipUntil( value: any): Collection
>- пропускает заданное количество элементов
>``` typescript
>	let array =  Collection.make([1, 2, 1990, 85, 24, 5, 7, 8.1])
>	let skipUntil = array.skipUntil(3) // [ 85, 24, 5, 7, 8.1]	
>```
># .contains( search: string|regex): boolean
>- возвращает true, когда елемент есть в коллекции, false - когда на найден 
>``` typescript
>	let array =  Collection.make([1, 2, 1990, 85, 24, 5, 7, 8.1])
>	let contains = array.contains(5) // contains = true	
>	let contains2 = array.contains(7) // contains2 = false	
>```
># .get( path:string): any
>- по переданному пути возвращает элемент массива 
>``` typescript
>	let data =Collection.make([{
>				name: "Vasya",
>				email: "vasya@example.com",
>				age: 20,
>			},{
>				name: "Dima",
>				email: "dima@example.com",
>				age: 34,
>			},1,3,5,[1, 2, 3, 4,[						
>									{
>										name: "Rafshan",
>										email: "rafshan@example.com",
>										age: 11,
>									 }					
>								]
>					]
>			])		
>	let get:any = data.get('[5][4][0][name]') // get = "Rafshan"
>```

># .normalize( schema: string|Object[, transform: bool = false]): Collection
>- нормализует данные в массиве исключая или преобразуя не подходящие 
>``` typescript
>	let data = Collection.make([1, "2", 1990, 85, "24.0", "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]);
>	let data2 =Collection.make([
>		{
>			name: "Vasya",
>			email: "vasya@example.com",
>			age: 20,
>		},
>		{
>			name: "Dima",
>			email: "dima@example.com",
>			age: "34",
>		},
>		{
>			name: "Colya",
>			email: "colya@example.com",
>			age: 46,
>		},
>		{
>			name: "Misha",
>			email: "misha@example.com",
>			age: "16.0",
>		},
>		{
>			name: "Ashan",
>			email: "ashan@example.com",
>			age: 99,
>		},
>		{
>			name: "Rafshan",
>			email: "rafshan@example.com",
>			age: 11,
>		}
>	])
>
>	let res1 = data.normalize( 'string')		// res1.arr = ["2", "24.0", "Vasya", "colya@example.com", "Rafshan", "ashan@example.com"]
>	let res2 = data.normalize( 'string', true) // res2.arr = ["1", "2", "1990", "85", "24.0", "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", "true", "false"]
>	let res3 = data.normalize( 'number') // res3.arr = [1, 1990, 85]
>	let res4 = data.normalize( 'number', true)// res4.arr = [1, 2, 1990, 85, 24, 1]
>	let res5 = data.normalize( 'int')// res5.arr = [1, 1990, 85]
>	let res6 = data.normalize( 'int', true)// res6.arr = [1, 2, 1990, 85, 24]
>	let res7 = data.normalize( 'float')// res7.arr = []
>	let res8 = data.normalize( 'float', true)// res8.arr = [1, 2, 1990, 85, 24]
>	let res9 = data.normalize( 'bool')// res9.arr = [true, false]
>	let res10 = data.normalize( 'bool', true)// res10.arr = [true, true, false]
>	let res11 = data.normalize( 'function', true)// res11.arr = []
>	let res12 = data.normalize( 'array')// res12.arr = []
>	let res13 = data.normalize( 'array', true)// res13.arr = []
>	let res14 = data.normalize( { age: 'string' }, true)// res14.arr = [{"key":"age","stringValue":"20"},{"key":"age","stringValue":"34"},{"key":"age","stringValue":"46"},{"key":"age","stringValue":"16.0"},{"key":"age","stringValue":"99"},{"key":"age","stringValue":"11"}]
>	let res15 = data2.normalize( { age: 'string' }2)// res15.arr = [{"key":"age","value":"34"},{"key":"age","value":"16.0"}]
>	let res16 = data2.normalize( { age: 'number' }, true)// res16.arr = [{"key":"age","numValue":20},{"key":"age","numValue":34},{"key":"age","numValue":46},{"key":"age","numValue":16},{"key":"age","numValue":99},{"key":"age","numValue":11}]
>	let res17 = data2.normalize( { age: 'number' }2)// res17.arr = [{"key":"age","value":20},{"key":"age","value":46},{"key":"age","value":99},{"key":"age","value":11}]
>	let res18 = data2.normalize( { age: 'int' }, true)// res18.arr = [{"key":"age","intValue":20},{"key":"age","intValue":34},{"key":"age","intValue":46},{"key":"age","intValue":16},{"key":"age","intValue":99},{"key":"age","intValue":11}]
>	let res19 = data2.normalize( { age: 'int' }2)// res19.arr = [{"key":"age","value":20},{"key":"age","value":46},{"key":"age","value":99},{"key":"age","value":11}]
>	let res20 = data2.normalize( { age: 'float' }, true)// res20.arr = [{"key":"age","floatValue":20},{"key":"age","floatValue":34},{"key":"age","floatValue":46},{"key":"age","floatValue":16},{"key":"age","floatValue":99},{"key":"age","floatValue":11}]
>	let res21 = data2.normalize( { age: 'float' }2)// res21.arr = []
>	let res22 = data2.normalize( { age: 'bool' }, true)// res22.arr = []
>	let res23 = data2.normalize( { age: 'bool' }2)// res23.arr = []
>```

># .pluck( path: string): Collection
>- возвращает найденных элементов по строковому ключу 
>``` typescript
> let data =Collection.make([
>		{
>			name: "Vasya",
>			email: "vasya@example.com",
>			age: 20,
>		},
>		{
>			name: "Dima",
>			email: "dima@example.com",
>			age: "34",
>		},
>		{
>			name: "Colya",
>			email: "colya@example.com",
>			age: 46,
>		},
>		{
>			name: "Misha",
>			email: "misha@example.com",
>			age: "16.0",
>		},
>		{
>			name: "Ashan",
>			email: "ashan@example.com",
>			age: 99,
>		},
>		{
>			name: "Rafshan",
>			email: "rafshan@example.com",
>			age: 11,
>		}
>	])
>
>	let pluck = data.pluck('name') 	 // pluck.arr =  ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
>```

># .unique(): Collection
>- возвращает массив уникальных значений 
>``` typescript
>	let data = Collection.make([1, 2, 1990, 85, 1, 1990, 24, 5, 7, 8.1]);
>	let unique = data.unique() 	 // unique.arr = [1, 2, 1990, 85, 24, 5, 7, 8.1]
>```

># .fill(lenght: number, value: any): Collection
>- создает массив указанной длинны и заполняет его переданными значениями.
>``` typescript
>	let data = Collection.make([])
>	let fill = data.fill(5, "test") 	 // fill.arr = ["test", "test", "test", "test", "test"]
>```


># .sort([compareFunction: function]): Collection
>- сортирует массив. Пользователь может передавать свою функцию сравнения значений
>``` typescript
>	let data = [1, 2, 1990, 85, 24]
>	let sort = data.sort((a: any, b: any): number => a - b ) // sort.arr = [1,  2, 24, 85, 1990]
>```

># .sortDesc([compareFunction: function]): Collection
>- сортирует массив в обратном порядке. Пользователь может передавать свою функцию сравнения значений
>``` typescript
>	let data = [1, 2, 1990, 85, 24]
>	let sortDesc = data.sortDesc((a: any, b: any): number => a - b ) // sortDesc.arr = [1990, 85, 24, 2, 1]
>```

># .sortBy([compareFunction: function]): Collection
>- сортирует массив  по ключу. Пользователь может передавать свою функцию сравнения значений (при отсутствии компаратора сравенние идет по строковому значению)
>``` typescript
>	let data = [{age: 1}, {age: 10}, {age: 4}, {age: 60}]
>	let sortBy = data.sortBy("age")  // sortBy.arr = [{"age":1},{"age":10},{"age":4},{"age":60}]
>	let sortBy2 = data.sortBy("age", (a: any, b: any): number => a - b)  // sortBy2.arr = [{"age":1},{"age":4},{"age":10},{"age":60}]
>```

># .sortByDesc([ compareFunction: function]): Collection
>- сортирует массив по ключу в обратном порядке. Пользователь может передавать свою функцию сравнения значений (при отсутствии компаратора сравенние идет по строковому значению)
>``` typescript
>	let data = [{age: 1}, {age: 10}, {age: 4}, {age: 60}]
>	let sortByDesc = data.sortByDesc("age") // sortByDesc.arr = [{"age":60},{"age":4},{"age":10},{"age":1}]
>	let sortByDesc2 = data.sortByDesc("age", (a: any, b: any): number => a - b) // sortByDesc2.arr = [{"age":60},{"age":10},{"age":4},{"age":1}]
>```



## License
[MIT](https://choosealicense.com/licenses/mit/)
