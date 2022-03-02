import { runMain } from "module";
import { type } from "os";

const str: string = "Фродо Бэггинс";

const age: number = 18;

const hasRing: boolean = true;

const id: symbol = Symbol();

const big: bigint = 5400n

const b: null = null

const c: undefined = undefined

const obj: object = {
	name: "Victor"
}

//:any value
const str2: any = 'Gogi'

//:safe replacement any
// let myUnKnow: unknown;
// myUnKnow.length
let myUnKnow: unknown;
if (typeof myUnKnow === 'string') myUnKnow.length   //already has a type string

//it is better to use rarely
const myVariable: unknown = 'vovo';
(myVariable as string).length;


type StrNumNull = string | number | null;
let manyType: StrNumNull;
manyType = 42;
manyType = 'vovo';
manyType = null;



// undefined, null или boolean
let isSauronAlive: undefined | null | boolean = undefined;
isSauronAlive = null;
isSauronAlive = false;

// array
const friends: string[] = ["Гэндальф", "Сэм", "Мерри", "Пиппин"];

const enemies: Array<string> = ["Саурон", "Саруман"];

const v: Array<string | number> = [1, 2, 'vov']
const bob: (number | string)[] = [1, 2, 'dod']

const strNum: [string, number] = ['vov', 2]

const strNumBool: [string, number, ...boolean[]] = ['vov', 2, false, true]

function sum(a: number, b: number): number {
	return a + b
}

const arrowFun = (a: number, b: number): number => {
	return Math.pow(a, b)                 //возведение в степень
}

//if the function returns nothing
const n = (message: string): void => {
	console.log(message)
}


// Реализовать interface Person
interface Person {
	readonly fullName: string;   //?  cannot redefine
	address: string;
	age?: number;       //?   ? - property not necessary
}

const sam: Person = {
	fullName: "Сэмуайз Гэмджи",
	address: "Шир",
	age: 17
};

const pippin: Person = {
	fullName: "Перегрин Тук",
	address: "Шир",
};



// Реализовать type Wizard
type Wizard = {
	fullName: string;
	address: string;
};
const gandalf: Wizard = {
	fullName: "Гэндальф Серый",
	address: "Валинор"
};

//:expand (Расширить) interface
interface Admin extends Person {
	canBan: boolean;
}
const admin1: Admin = {
	fullName: "Сэмуайз Гэмджи",
	address: "Шир",
	age: 17,
	canBan: true,
};
const admin2: Admin = {
	fullName: "Перегрин Тук",
	address: "Шир",
	canBan: false,
};

//: Обьединить типы через пересечение
type AdminPerson = Person & {
	canBan: boolean;
};
const admin3: AdminPerson = {
	fullName: "Сэмуайз Гэмджи",
	address: "Шир",
	age: 17,
	canBan: true,
};
const admin4: AdminPerson = {
	fullName: "Перегрин Тук",
	address: "Шир",
	canBan: false,
};

//:когда не известно название свойств обьектов, известен тип значений
type IndexType = {
	[key: string]: number;
}
const m: IndexType = {
	age: 12,
}
//:тоже самое через интефейс
interface IndexTypeInterface {
	[key: string]: number
}

//: когда изв назв св-в  и этих св-в один тип (в interface нельзя исп)
type keyName = "age" | "amount"
type IndexLimitredType = {
	[key in keyName]: number;  // in оператор typeScript
}
const q: IndexLimitredType = {
	age: 3,
	amount: 2,
}

//:Class
interface Connection1 {
	request(url: string): any;
}
class FetchService implements Connection1 {
	request(url: string): any {
		return fetch(url).then(result => result.json())
	}
}
const fetchPost = new FetchService();
fetchPost
	.request('https://')
	.then(data => console.log(data))

//: переиспользовать функции с разными аргументами
//- джинерики (любой тип)
function echo1<T>(data: T) {
	return data;
}
const num: number = 13
const f1 = echo1<string>('vovo')
const f2 = echo1(num)

//:если надо два джинерика
function echo2<T, S>(data: T, data2: S) {
	return data;
}


//:
interface Connection2<T> {
	request(url: string): Promise<T>;
}
class FetchService2<P> implements Connection2<P> {
	request(url: string): Promise<P> {
		return fetch(url).then(result => result.json())
	}
}
interface Post {
	id: number;
	userId: number;
	title: string;
	completed: string;
}

const fetchPost2 = new FetchService2<Post>();
fetchPost
	.request('https://jsonplaceholder.typicode.com/todos/1')
	.then(data => console.log(data))


//:
function getLength<T extends {length: number}>(data: T) {
	return data.length;
}
getLength('vovo')
getLength({ length: 34 })
// getLength(23) //err
getLength([])

//:вспомогательные типы - признаны упростить создание или модеификацию сущ типов или интерфейсов
interface Todo{
	id: number;
	title: string;
	userId: number;
	completed?: boolean;
	body?: string;
}
const todo1: Partial<Todo> = { //Partial - делает передоваемые св-во не обязательным
	title: 'купить'
}
const todo2: Required<Todo> = { //наоборот обязательным
	id: 1,
	title: 'vv',
	userId: 3,
	completed: true,
	body: 'pp'
}
const todo3: Readonly<Todo> = { //неизменяемое
	id: 1,
	title: 'vv',
	userId: 3,
	completed: true,
	body: 'pp'
}
// todo3.id = 4  //err

//:создовать типы где не известны назв св-в, но известно какой будет тип у значений
const withRecord: Record<string, number> = {
	age: 45,
}

//: Pick - позволяет создавать новый тип на основе типа передоваемым первым аргументом, выбирая из него св-ва перед вторым аргументом
const todo4: Pick<Todo, 'id' | 'title'> = {
	id: 1,
	title: 'купить'
}
//: Omit - наоборот  позволяет создавать новый тип на основе типа передоваемым первым аргументом, исключая из него св-в переданое вторым арг
const todo5: Omit<Todo, 'id'> = {
	userId: 1,
	title: 'купить'
}

//: Как скопировать тип свойства из другого интерфейса, при чтобы было др название св-ва
interface NewTodo{
	text: Todo['title']
}
const newTodo: NewTodo = {
	text: ''
}

//: Перечисления (Enums).
enum AuthProvider{
	email,
	google,
	facebook,
}
interface UserData{
	id: number;
	authProvider: AuthProvider;
}
const userData: UserData = {
	id: 1,
	authProvider:2
}
if (userData.authProvider === AuthProvider.email) console.log('')
else if (userData.authProvider === AuthProvider.facebook) console.log('')
else if (userData.authProvider === AuthProvider.google) console.log('')


//: Типизация callback. для функции
function myOwnForEach<T>(data:T[], callback: (item: T)=> void) {
	for (let i = 0; i < data.length; i++){
		callback(data[i])
	}
}
myOwnForEach([1, 2, 3], (item) => {
	console.log(item)
})
























// interface & class
//
// Создать интрефейс Maps и имплементировать его.
// В интерфейсе должен быть метод addMarker который
// первым арументом принимает широту (число),
// а вторым аргументом долготу (число).
// Метод addMarker ничего возвращает.
interface Maps {
	addMarker(latitude: number, longitude: number): void;
}

class MapsService implements Maps {
	addMarker(latitude: number, longitude: number) {
		// Здесь какая-то реализация добавления
		// маркера на карту.
	}
}

// Generic
//
// Описать тип для функции echo
// с помощью дженериков.
const echo = <T>(data: T): T => {
	return data;
};

const echoOutput = echo<number>(42);

// Описать типы для функции myOwnMap
// с помощью дженериков.
// Типы в дженериках должны сами "подхватиться"
// на лету.
// В данном примере перменная myOwnMapOutput
// должна иметь тип 'string[]'.
function myOwnMap<T, S>(data: T[], callback: (item: T) => S) {
	const result: S[] = [];

	for (let i = 0; i < data.length; i++) {
		result.push(callback(data[i]));
	}

	return result;
}

const myOwnMapOutput = myOwnMap([1, 2, 3], (item) => item.toString());

// Реализовать интерфейс Connection
// в котором есть метод request.
// Метод request первым аргументом
// принимает HTTP метод (GET, POST, и т.д),
// вторым арументом принимает URL, и третим
// необязательным аргументом принимает данные
// для POST запроса. Возвращет метод request
// Promise с данными полученными из сервиса.
type HttpMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface Connection<T> {
	request<S>(method: HttpMethods, url: string, data?: S): Promise<T>;
}
