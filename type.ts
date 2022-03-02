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
const q:IndexLimitredType = {
	age: 3,
	amount: 2,
}














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
