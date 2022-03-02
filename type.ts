// string
const fullName: string = "Фродо Бэггинс";

// number
const age: number = 18;

// boolean
const hasRing: boolean = true;

// undefined, null или boolean
let isSauronAlive: undefined | null | boolean = undefined;
isSauronAlive = null;
isSauronAlive = false;

// array
const friends: string[] = ["Гэндальф", "Сэм", "Мерри", "Пиппин"];

const enemies: Array<string> = ["Саурон", "Саруман"];

// Реализовать interface Person
interface Person {
	fullName: string;
	address: string;
	age: number;
}

const sam: Person = {
	fullName: "Сэмуайз Гэмджи",
	address: "Шир",
	age: 17
};

const pippin: Person = {
	fullName: "Перегрин Тук",
	address: "Шир",
	age: 17
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
