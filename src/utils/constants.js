import Audi from "../images/icon-audi.png";
import BMW from "../images/icon-bmw.webp";
import Chevrolet from "../images/icon-chevrolet.png";
import Mercedes from "../images/icon-merc.png";
import Mitsubishi from "../images/icon-mitsub.png";
import Nissan from "../images/icon-nissan.png";
import Ford from "../images/icon-ford.png";
import Toyota from "../images/icon-toyota.png";
import Opel from "../images/icon-opel.png";
import Renault from "../images/icon-reno.png";
import Škoda from "../images/icon-shkoda.webp";
import Hyundai from "../images/icon-hyundai.png";
import bumper from "../images/categ-bumpers.webp";
import catBumper from "../images/categ-bumpers.webp";
import catBumperGrille from "../images/categ-bump-grilles.webp";
import catBumperReinf from "../images/categ-bumper-reinf.webp";
import catDoor from "../images/categ-door.webp";
import catFender from "../images/categ-fender.webp";
import catHood from "../images/categ-hood.webp";
import catSideSill from "../images/categ-side-sill.webp";
import catWheelArches from "../images/categ-wheel-arches.webp";
import catSubframe from "../images/categ-subframes.webp";
import hood from "../images/categ-hood.webp";
import sedanFront from "../images/sedan_front.webp";
import sedanRear from "../images/sedan_rear.webp";
import crossoverFront from "../images/crossover_front.webp";
import crossoverRear from "../images/crossover_rear.webp";
import hatchbackFront from "../images/hatchback_front.webp";
import hatchbackRear from "../images/hatchback_rear.webp";
import stationWagonFront from "../images/station-wagon_front.webp";
import stationWagonRear from "../images/station-wagon_rear.webp";
import truckFront from "../images/truck_front.webp";
import truckRear from "../images/truck_rear.webp";
import minivanFront from "../images/minivan_front.webp";
import minivanRear from "../images/minivan_rear.webp";
import jeepFront from "../images/jeep__front.webp";
import jeepRear from "../images/jeep_rear.webp";

export const carModels = {
  седан: {
    front: sedanFront,
    rear: sedanRear,
  },
  кроссовер: {
    front: crossoverFront,
    rear: crossoverRear,
  },
  хэтчбек: {
    front: hatchbackFront,
    rear: hatchbackRear,
  },
  универсал: {
    front: stationWagonFront,
    rear: stationWagonRear,
  },
  грузовик: {
    front: truckFront,
    rear: truckRear,
  },
  минивэн: {
    front: minivanFront,
    rear: minivanRear,
  },
  джип: {
    front: jeepFront,
    rear: jeepRear,
  },
};

// Список марок
export const carBrands = [
  "BMW",
  "Nissan",
  "Ford",
  "Hyundai",
  "Kia",
  "Все марки",
];

// Список деталей
export const carParts = [
  "Пороги",
  "Подрамники",
  "Капоты",
  "Крылья",
  "Бамперы",
  "Усилители бампера",
  "Решетки бампера",
  "Подкрылки",
  "Двери",
  "Все детали",
];

export const supportSystems = [
  { name: "Пороги", image: catSideSill },
  { name: "Подрамники", image: catSubframe },
];

export const bodyTrimAndAccents = [
  { name: "Капоты", image: catHood },
  { name: "Крылья", image: catFender },
];

export const doorsAndAccessories = [{ name: "Двери", image: catDoor }];

export const carBodyParts = [
  { name: "Бамперы", image: catBumper },
  { name: "Усилители бампера", image: catBumperReinf },
  { name: "Решетки бампера", image: catBumperGrille },
  { name: "Подкрылки", image: catWheelArches },
  { name: "Бамперы", image: catBumper },
  { name: "Усилители бампера", image: catBumperReinf },
  { name: "Решетки бампера", image: catBumperGrille },
  { name: "Подкрылки", image: catWheelArches },
];

export const bumpers = [
  {
    id: "1",
    src: bumper,
    name: "Бампер передний BMW F 30 15- Black Sapphire 475",
    brand: "BMW",
    number: "51117445093",
    price: "13 500.00₽",
    year: "2010",
    material: "сталь",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Бампер передний BMW F 30 15- Black Sapphire 475. Здесь его описание.",
    subcategory: "Бамперы",
  },
  {
    id: "2",
    src: bumper,
    name: "Бампер передний Nissan X-Trail T32 14- Black",
    brand: "Nissan",
    number: "62022-9US0A",
    price: "11 800.00₽",
    year: "2015",
    material: "пластик",
    manufacturer: "Nissan Motor Co., Ltd.",
    details:
      "Бампер передний Nissan X-Trail T32 14- Black. Здесь его описание.",
    subcategory: "Бамперы",
  },
  {
    id: "3",
    src: bumper,
    name: "Бампер передний Ford Focus 3 11- Red",
    brand: "Ford",
    number: "CV6Z-17B968-AA",
    price: "10 200.00₽",
    year: "2013",
    material: "сталь",
    manufacturer: "Ford Motor Company",
    details: "Бампер передний Ford Focus 3 11- Red. Здесь его описание.",
    subcategory: "Бамперы",
  },
  {
    id: "4",
    src: bumper,
    name: "Бампер передний Hyundai Tucson TL 15- Gray",
    brand: "Hyundai",
    number: "86511-D3010",
    price: "14 300.00₽",
    year: "2016",
    material: "пластик",
    manufacturer: "Hyundai Motor Company",
    details: "Бампер передний Hyundai Tucson TL 15- Gray. Здесь его описание.",
    subcategory: "Бамперы",
  },
  {
    id: "5",
    src: bumper,
    name: "Бампер передний Kia Sportage 5 20- Silver",
    brand: "Kia",
    number: "86511-F2000",
    price: "13 000.00₽",
    year: "2020",
    material: "пластик",
    manufacturer: "Kia Corporation",
    details: "Бампер передний Kia Sportage 5 20- Silver. Здесь его описание.",
    subcategory: "Бамперы",
  },
  {
    id: "6",
    src: bumper,
    name: "Бампер передний Ford Focus 3 11- Red",
    brand: "Ford",
    number: "CV6Z-17B968-AA",
    price: "10 200.00₽",
    year: "2013",
    material: "сталь",
    manufacturer: "Ford Motor Company",
    subcategory: "Бамперы",
  },
  {
    id: "7",
    src: bumper,
    name: "Бампер передний Hyundai Tucson TL 15- Gray",
    brand: "Hyundai",
    number: "86511-D3010",
    price: "14 300.00₽",
    year: "2016",
    material: "пластик",
    manufacturer: "Hyundai Motor Company",
    subcategory: "Бамперы",
  },
  {
    id: "8",
    src: bumper,
    name: "Бампер передний Kia Sportage 5 20- Silver",
    brand: "Kia",
    number: "86511-F2000",
    price: "13 000.00₽",
    year: "2020",
    material: "пластик",
    manufacturer: "Kia Corporation",
    subcategory: "Бамперы",
  },
];

export const hoods = [
  {
    id: "1",
    src: hood,
    name: "Капот передний BMW F 30 15 Black Sapphire 475",
    brand: "BMW",
    number: "51117445093",
    price: "18 000.00₽",
    year: "2010",
    material: "сталь",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Капот передний BMW F 30 15- Black Sapphire 475. Капот для BMW F 30, модель 2015 года, выполнен из стали. Идеален для замены или восстановления поврежденных деталей.",
    subcategory: "Капоты",
  },
  {
    id: "2",
    src: hood,
    name: "Капот передний Nissan Altima 2015 ",
    brand: "Nissan",
    number: "62221-3TA0A",
    price: "16 500.00₽",
    year: "2015",
    material: "алюминий",
    manufacturer: "Nissan Motor Co.",
    details:
      "Капот передний для Nissan Altima 2015 года выпуска. Легкий и прочный алюминиевый капот, выполнен с учетом всех стандартов безопасности и качества.",
    subcategory: "Капоты",
  },
  {
    id: "3",
    src: hood,
    name: "Капот передний Ford Focus 2014",
    brand: "Ford",
    number: "BB5Z-16700-C",
    price: "15 200.00₽",
    year: "2014",
    material: "сталь",
    manufacturer: "Ford Motor Company",
    details:
      "Капот передний для Ford Focus 2014 года выпуска. Изготовлен из стали, обеспечивающей долговечность и отличную защиту от повреждений.",
    subcategory: "Капоты",
  },
  {
    id: "4",
    src: hood,
    name: "Капот передний Hyundai Elantra 2016",
    brand: "Hyundai",
    number: "DNK15A51",
    price: "17 000.00₽",
    year: "2016",
    material: "сталь",
    manufacturer: "Hyundai Motor Company",
    details:
      "Капот передний для Hyundai Elantra 2016 года. Прочный стальной капот, идеально подходящий для замены после аварии или повреждений.",
    subcategory: "Капоты",
  },
  {
    id: "5",
    src: hood,
    name: "Капот передний Kia Optima 2016",
    brand: "Kia",
    number: "67401-D6300",
    price: "16 800.00₽",
    year: "2016",
    material: "сталь",
    manufacturer: "Kia Motors",
    details:
      "Капот передний для Kia Optima 2016 года. Капот выполнен из высококачественной стали для надежности и долговечности.",
    subcategory: "Капоты",
  },
  {
    id: "6",
    src: hood,
    name: "Капот передний BMW X5 2015",
    brand: "BMW",
    number: "51717174178",
    price: "22 000.00₽",
    year: "2015",
    material: "алюминий",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Капот передний BMW X5, выполнен из алюминия. Легкий и прочный, идеально подходит для замены поврежденного капота на BMW X5 2015 года.",
    subcategory: "Капоты",
  },
  {
    id: "7",
    src: hood,
    name: "Капот передний Ford Mustang 2017",
    brand: "Ford",
    number: "FR3Z-16700-A",
    price: "23 000.00₽",
    year: "2017",
    material: "алюминий",
    manufacturer: "Ford Motor Company",
    details:
      "Капот передний для Ford Mustang 2017 года. Изготовлен из алюминия для снижения веса и улучшения аэродинамики.",
    subcategory: "Капоты",
  },
];

export const bumperReinfs = [
  {
    id: "1",
    src: catBumperReinf,
    name: "Усилитель бампера BMW F30 2015",
    brand: "BMW",
    number: "51117445234",
    price: "7 500.00₽",
    year: "2015",
    material: "сталь",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Усилитель бампера для BMW F30 2015 года. Изготовлен из высококачественной стали, идеально подходит для замены поврежденных частей переднего бампера.",
    subcategory: "Усилители бампера",
  },
  {
    id: "2",
    src: catBumperReinf,
    name: "Усилитель бампера Nissan X-Trail 2020",
    brand: "Nissan",
    number: "62020-6V800",
    price: "6 000.00₽",
    year: "2020",
    material: "сталь",
    manufacturer: "Nissan Motor Co.",
    details:
      "Усилитель бампера для Nissan X-Trail 2020 года, выполненный из стали. Обеспечивает дополнительную защиту переднего бампера от повреждений при столкновениях.",
    subcategory: "Усилители бампера",
  },
  {
    id: "3",
    src: catBumperReinf,
    name: "Усилитель бампера Ford Focus 2019",
    brand: "Ford",
    number: "BF-95367892",
    price: "5 500.00₽",
    year: "2019",
    material: "пластик и металл",
    manufacturer: "Ford Motor Company",
    details:
      "Усилитель бампера для Ford Focus 2019 года. Композитный материал сочетает прочность металла и легкость пластика для улучшенной безопасности.",
    subcategory: "Усилители бампера",
  },
  {
    id: "4",
    src: catBumperReinf,
    name: "Усилитель бампера Hyundai Tucson 2018",
    brand: "Hyundai",
    number: "86540-2D500",
    price: "4 500.00₽",
    year: "2018",
    material: "сталь",
    manufacturer: "Hyundai Motor Company",
    details:
      "Усилитель бампера для Hyundai Tucson 2018 года, изготовлен из стали, предназначен для обеспечения максимальной безопасности в случае удара.",
    subcategory: "Усилители бампера",
  },
  {
    id: "5",
    src: catBumperReinf,
    name: "Усилитель бампера Kia Sportage 2017",
    brand: "Kia",
    number: "86540-C7000",
    price: "5 000.00₽",
    year: "2017",
    material: "металл",
    manufacturer: "Kia Motors Corporation",
    details:
      "Усилитель бампера для Kia Sportage 2017 года, выполненный из металла. Идеален для обеспечения жесткости и защиты переднего бампера автомобиля.",
    subcategory: "Усилители бампера",
  },
];

export const doors = [
  {
    id: "1",
    src: catDoor,
    name: "Дверь передняя BMW F30 2015",
    brand: "BMW",
    number: "41317154045",
    price: "20 000.00₽",
    year: "2015",
    material: "сталь",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Передняя дверь для BMW F30 2015 года. Изготовлена из стали, идеально подходит для замены поврежденных частей кузова.",
    subcategory: "Двери",
  },
  {
    id: "2",
    src: catDoor,
    name: "Дверь передняя Nissan X-Trail 2020",
    brand: "Nissan",
    number: "80820-6V000",
    price: "18 500.00₽",
    year: "2020",
    material: "алюминий",
    manufacturer: "Nissan Motor Co.",
    details:
      "Передняя дверь для Nissan X-Trail 2020 года. Изготовлена из алюминия для легкости и прочности. Идеальна для замены поврежденных элементов кузова.",
    subcategory: "Двери",
  },
  {
    id: "3",
    src: catDoor,
    name: "Дверь передняя Ford Focus 2019",
    brand: "Ford",
    number: "GG1Z-8200100-A",
    price: "16 000.00₽",
    year: "2019",
    material: "сталь",
    manufacturer: "Ford Motor Company",
    details:
      "Передняя дверь для Ford Focus 2019 года. Изготовлена из стали, подходит для замены поврежденных дверных элементов.",
    subcategory: "Двери",
  },
  {
    id: "4",
    src: catDoor,
    name: "Дверь передняя Hyundai Tucson 2018",
    brand: "Hyundai",
    number: "83201-2D600",
    price: "15 000.00₽",
    year: "2018",
    material: "сталь",
    manufacturer: "Hyundai Motor Company",
    details:
      "Передняя дверь для Hyundai Tucson 2018 года. Изготовлена из стали, подходит для замены поврежденных дверных элементов на автомобилях этого года.",
    subcategory: "Двери",
  },
  {
    id: "5",
    src: catDoor,
    name: "Дверь передняя Kia Sportage 2017",
    brand: "Kia",
    number: "83301-C7000",
    price: "17 000.00₽",
    year: "2017",
    material: "алюминий",
    manufacturer: "Kia Motors Corporation",
    details:
      "Передняя дверь для Kia Sportage 2017 года. Изготовлена из алюминия, отличается легкостью и высокой прочностью.",
    subcategory: "Двери",
  },
];

export const fenders = [
  {
    id: "1",
    src: catFender,
    name: "Крыло переднее BMW F30 2015",
    brand: "BMW",
    number: "41007154013",
    price: "12 000.00₽",
    year: "2015",
    material: "сталь",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Переднее крыло для BMW F30 2015 года. Изготовлено из стали, идеально подходит для замены поврежденных элементов кузова автомобиля.",
    subcategory: "Крылья",
  },
  {
    id: "2",
    src: catFender,
    name: "Крыло переднее Nissan X-Trail 2020",
    brand: "Nissan",
    number: "63100-6V200",
    price: "11 500.00₽",
    year: "2020",
    material: "алюминий",
    manufacturer: "Nissan Motor Co.",
    details:
      "Переднее крыло для Nissan X-Trail 2020 года. Изготовлено из алюминия, обеспечивает легкость и прочность при эксплуатации автомобиля.",
    subcategory: "Крылья",
  },
  {
    id: "3",
    src: catFender,
    name: "Крыло переднее Ford Focus 2019",
    brand: "Ford",
    number: "GG1Z-16006-A",
    price: "10 500.00₽",
    year: "2019",
    material: "сталь",
    manufacturer: "Ford Motor Company",
    details:
      "Переднее крыло для Ford Focus 2019 года. Изготовлено из стали, подходит для замены поврежденных элементов кузова.",
    subcategory: "Крылья",
  },
  {
    id: "4",
    src: catFender,
    name: "Крыло переднее Hyundai Tucson 2018",
    brand: "Hyundai",
    number: "79100-2D600",
    price: "13 000.00₽",
    year: "2018",
    material: "сталь",
    manufacturer: "Hyundai Motor Company",
    details:
      "Переднее крыло для Hyundai Tucson 2018 года. Изготовлено из стали, предназначено для замены поврежденных частей кузова автомобиля.",
    subcategory: "Крылья",
  },
  {
    id: "5",
    src: catFender,
    name: "Крыло переднее Kia Sportage 2017",
    brand: "Kia",
    number: "79100-C7000",
    price: "12 500.00₽",
    year: "2017",
    material: "алюминий",
    manufacturer: "Kia Motors Corporation",
    details:
      "Переднее крыло для Kia Sportage 2017 года. Изготовлено из алюминия, отличается легкостью и прочностью, идеально подходит для замены поврежденных элементов кузова.",
    subcategory: "Крылья",
  },
];

export const bumpGrilles = [
  {
    id: "1",
    src: catBumperGrille,
    name: "Решетка бампера BMW F30 2015",
    brand: "BMW",
    number: "51118054863",
    price: "8 000.00₽",
    year: "2015",
    material: "пластик",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Решетка бампера для BMW F30 2015 года. Изготовлена из пластика, идеально подходит для замены поврежденных элементов переднего бампера.",
    subcategory: "Решетки бампера",
  },
  {
    id: "2",
    src: catBumperGrille,
    name: "Решетка бампера Nissan X-Trail 2020",
    brand: "Nissan",
    number: "62040-6V300",
    price: "7 500.00₽",
    year: "2020",
    material: "пластик",
    manufacturer: "Nissan Motor Co.",
    details:
      "Решетка бампера для Nissan X-Trail 2020 года. Изготовлена из прочного пластика, используется для улучшения аэродинамики и охлаждения.",
    subcategory: "Решетки бампера",
  },
  {
    id: "3",
    src: catBumperGrille,
    name: "Решетка бампера Ford Focus 2019",
    brand: "Ford",
    number: "GG1Z-8200A1",
    price: "6 000.00₽",
    year: "2019",
    material: "пластик",
    manufacturer: "Ford Motor Company",
    details:
      "Решетка бампера для Ford Focus 2019 года. Изготовлена из прочного пластика, служит для защиты и вентиляции радиатора и других компонентов.",
    subcategory: "Решетки бампера",
  },
  {
    id: "4",
    src: catBumperGrille,
    name: "Решетка бампера Hyundai Tucson 2018",
    brand: "Hyundai",
    number: "86500-2D500",
    price: "6 500.00₽",
    year: "2018",
    material: "пластик",
    manufacturer: "Hyundai Motor Company",
    details:
      "Решетка бампера для Hyundai Tucson 2018 года. Изготовлена из прочного пластика, предназначена для защиты и улучшения внешнего вида автомобиля.",
    subcategory: "Решетки бампера",
  },
  {
    id: "5",
    src: catBumperGrille,
    name: "Решетка бампера Kia Sportage 2017",
    brand: "Kia",
    number: "86500-C7000",
    price: "7 000.00₽",
    year: "2017",
    material: "пластик",
    manufacturer: "Kia Motors Corporation",
    details:
      "Решетка бампера для Kia Sportage 2017 года. Изготовлена из прочного пластика, защищает внутренние компоненты и улучшает внешний вид передней части автомобиля.",
    subcategory: "Решетки бампера",
  },
];

export const sideSills = [
  {
    id: "1",
    src: catSideSill,
    name: "Порог боковой BMW F30 2015",
    brand: "BMW",
    number: "51717157489",
    price: "10 000.00₽",
    year: "2015",
    material: "пластик",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Боковой порог для BMW F30 2015 года. Изготовлен из прочного пластика, идеально подходит для замены поврежденных элементов боковой части кузова.",
    subcategory: "Пороги",
  },
  {
    id: "2",
    src: catSideSill,
    name: "Порог боковой Nissan X-Trail 2020",
    brand: "Nissan",
    number: "76800-6V100",
    price: "8 500.00₽",
    year: "2020",
    material: "пластик",
    manufacturer: "Nissan Motor Co.",
    details:
      "Боковой порог для Nissan X-Trail 2020 года. Изготовлен из высококачественного пластика, используется для защиты кузова и улучшения внешнего вида автомобиля.",
    subcategory: "Пороги",
  },
  {
    id: "3",
    src: catSideSill,
    name: "Порог боковой Ford Focus 2019",
    brand: "Ford",
    number: "GG1Z-16100-A",
    price: "7 000.00₽",
    year: "2019",
    material: "металл",
    manufacturer: "Ford Motor Company",
    details:
      "Боковой порог для Ford Focus 2019 года. Изготовлен из металла, используется для защиты нижней части кузова от повреждений и улучшения аэродинамики.",
    subcategory: "Пороги",
  },
  {
    id: "4",
    src: catSideSill,
    name: "Порог боковой Hyundai Tucson 2018",
    brand: "Hyundai",
    number: "87701-2D500",
    price: "9 000.00₽",
    year: "2018",
    material: "пластик",
    manufacturer: "Hyundai Motor Company",
    details:
      "Боковой порог для Hyundai Tucson 2018 года. Изготовлен из прочного пластика, предназначен для защиты нижней части дверей и кузова автомобиля.",
    subcategory: "Пороги",
  },
  {
    id: "5",
    src: catSideSill,
    name: "Порог боковой Kia Sportage 2017",
    brand: "Kia",
    number: "87701-C7000",
    price: "8 000.00₽",
    year: "2017",
    material: "пластик",
    manufacturer: "Kia Motors Corporation",
    details:
      "Боковой порог для Kia Sportage 2017 года. Изготовлен из прочного пластика, обеспечивает защиту и улучшает внешний вид боковой части кузова.",
    subcategory: "Пороги",
  },
];

export const wheelArches = [
  {
    id: "1",
    src: catWheelArches,
    name: "Подкрылок BMW F30 2015",
    brand: "BMW",
    number: "41317154051",
    price: "4 000.00₽",
    year: "2015",
    material: "пластик",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Подкрылок для BMW F30 2015 года. Изготовлен из пластика, служит для защиты колесных арок от грязи и повреждений.",
    subcategory: "Подкрылки",
  },
  {
    id: "2",
    src: catWheelArches,
    name: "Подкрылок Nissan X-Trail 2020",
    brand: "Nissan",
    number: "63025-6V300",
    price: "3 500.00₽",
    year: "2020",
    material: "пластик",
    manufacturer: "Nissan Motor Co.",
    details:
      "Подкрылок для Nissan X-Trail 2020 года. Изготовлен из прочного пластика, защищает колесные арки от грязи и дорожных воздействий.",
    subcategory: "Подкрылки",
  },
  {
    id: "3",
    src: catWheelArches,
    name: "Подкрылок Ford Focus 2019",
    brand: "Ford",
    number: "GG1Z-16102-A",
    price: "3 800.00₽",
    year: "2019",
    material: "пластик",
    manufacturer: "Ford Motor Company",
    details:
      "Подкрылок для Ford Focus 2019 года. Изготовлен из пластика, помогает предотвращать повреждения колесных арок и кузова автомобиля.",
    subcategory: "Подкрылки",
  },
  {
    id: "4",
    src: catWheelArches,
    name: "Подкрылок Hyundai Tucson 2018",
    brand: "Hyundai",
    number: "87701-2D300",
    price: "4 200.00₽",
    year: "2018",
    material: "пластик",
    manufacturer: "Hyundai Motor Company",
    details:
      "Подкрылок для Hyundai Tucson 2018 года. Изготовлен из прочного пластика, защищает колесные арки от грязи и других повреждений.",
    subcategory: "Подкрылки",
  },
  {
    id: "5",
    src: catWheelArches,
    name: "Подкрылок Kia Sportage 2017",
    brand: "Kia",
    number: "87701-C7000",
    price: "3 900.00₽",
    year: "2017",
    material: "пластик",
    manufacturer: "Kia Motors Corporation",
    details:
      "Подкрылок для Kia Sportage 2017 года. Изготовлен из прочного пластика, предотвращает попадание грязи в колесные арки и защищает кузов от повреждений.",
    subcategory: "Подкрылки",
  },
];

export const subframes = [
  {
    id: "1",
    src: catSubframe,
    name: "Подрамник BMW F30 2015",
    brand: "BMW",
    number: "31116752487",
    price: "25 000.00₽",
    year: "2015",
    material: "сталь",
    manufacturer: "Bayerische Motoren Werke",
    details:
      "Подрамник для BMW F30 2015 года. Изготовлен из стали, используется для крепления подвески и других элементов к кузову автомобиля.",
    subcategory: "Подрамники",
  },
  {
    id: "2",
    src: catSubframe,
    name: "Подрамник Nissan X-Trail 2020",
    brand: "Nissan",
    number: "55110-6V100",
    price: "22 000.00₽",
    year: "2020",
    material: "сталь",
    manufacturer: "Nissan Motor Co.",
    details:
      "Подрамник для Nissan X-Trail 2020 года. Изготовлен из прочной стали, предназначен для установки подвески и других компонентов кузова.",
    subcategory: "Подрамники",
  },
  {
    id: "3",
    src: catSubframe,
    name: "Подрамник Ford Focus 2019",
    brand: "Ford",
    number: "GG1Z-5500-A",
    price: "20 000.00₽",
    year: "2019",
    material: "металл",
    manufacturer: "Ford Motor Company",
    details:
      "Подрамник для Ford Focus 2019 года. Изготовлен из металла, используется для крепления подвески и других ключевых компонентов автомобиля.",
    subcategory: "Подрамники",
  },
  {
    id: "4",
    src: catSubframe,
    name: "Подрамник Hyundai Tucson 2018",
    brand: "Hyundai",
    number: "54500-2D600",
    price: "21 500.00₽",
    year: "2018",
    material: "сталь",
    manufacturer: "Hyundai Motor Company",
    details:
      "Подрамник для Hyundai Tucson 2018 года. Изготовлен из стали, используется для установки подвески и крепления других частей кузова автомобиля.",
    subcategory: "Подрамники",
  },
  {
    id: "5",
    src: catSubframe,
    name: "Подрамник Kia Sportage 2017",
    brand: "Kia",
    number: "54500-C7000",
    price: "19 000.00₽",
    year: "2017",
    material: "металл",
    manufacturer: "Kia Motors Corporation",
    details:
      "Подрамник для Kia Sportage 2017 года. Изготовлен из металла, используется для монтажа подвески и других важных компонентов автомобиля.",
    subcategory: "Подрамники",
  },
];

const updatedSubframes = subframes.map((item) => ({
  ...item,
  id: `subframe-${item.id}`,
}));

const updatedWheelArches = wheelArches.map((item) => ({
  ...item,
  id: `wheelArche-${item.id}`,
}));

const updatedSideSills = sideSills.map((item) => ({
  ...item,
  id: `sideSill-${item.id}`,
}));

const updatedBumpGrilles = bumpGrilles.map((item) => ({
  ...item,
  id: `bumpGrille-${item.id}`,
}));

const updatedFenders = fenders.map((item) => ({
  ...item,
  id: `fender-${item.id}`,
}));

const updatedDoors = doors.map((item) => ({
  ...item,
  id: `door-${item.id}`,
}));

const updatedBumperReinfs = bumperReinfs.map((item) => ({
  ...item,
  id: `bumperReinf-${item.id}`,
}));

const updatedBumpers = bumpers.map((item) => ({
  ...item,
  id: `bumper-${item.id}`,
}));

const updatedHoods = hoods.map((item) => ({
  ...item,
  id: `hood-${item.id}`,
}));

export const productData = [
  ...updatedBumpers,
  ...updatedHoods,
  ...updatedBumperReinfs,
  ...updatedDoors,
  ...updatedFenders,
  ...updatedBumpGrilles,
  ...updatedSideSills,
  ...updatedWheelArches,
  ...updatedSubframes,
];

export const brandImgs = [
  { src: Audi, name: "Audi" },
  { src: BMW, name: "BMW" },
  { src: Chevrolet, name: "Chevrolet" },
  { src: Mercedes, name: "Mercedes" },
  { src: Mitsubishi, name: "Mitsubishi" },
  { src: Nissan, name: "Nissan" },
  { src: Ford, name: "Ford" },
  { src: Toyota, name: "Toyota" },
  { src: Opel, name: "Opel" },
  { src: Renault, name: "Renault" },
  { src: Škoda, name: "Škoda" },
  { src: Hyundai, name: "Hyundai" },
];

export const carData = {
  Audi: {
    models: ["A3", "A4", "Q5", "Q7", "TT"],
    years: ["2018", "2019", "2020", "2021", "2022"],
    engines: ["Бензин", "Дизель", "Электро"],
    modifications: ["Standard", "Sport", "Luxury"],
  },
  BMW: {
    models: ["3 Series", "5 Series", "X1", "X5", "Z4"],
    years: ["2017", "2018", "2019", "2020", "2021"],
    engines: ["Бензин", "Дизель", "Гибрид"],
    modifications: ["Basic", "M-Sport", "Premium"],
  },
  Nissan: {
    models: ["Qashqai", "X-Trail", "Juke", "Almera", "Leaf"],
    years: ["2019", "2020", "2021", "2022"],
    engines: ["Бензин", "Дизель", "Электро"],
    modifications: ["Eco", "Comfort", "Sport"],
  },
  Mercedes: {
    models: ["A-Class", "C-Class", "E-Class", "GLE", "GLS"],
    years: ["2016", "2017", "2018", "2019", "2020"],
    engines: ["Бензин", "Дизель", "Гибрид"],
    modifications: ["Standard", "AMG-Line", "Luxury"],
  },
  Chevrolet: {
    models: ["Camaro", "Tahoe", "Suburban", "Malibu", "Spark"],
    years: ["2015", "2016", "2017", "2018", "2019"],
    engines: ["Бензин", "Гибрид"],
    modifications: ["Base", "LT", "RS"],
  },
  Ford: {
    models: ["Focus", "Fiesta", "Mustang", "Explorer", "Ranger"],
    years: ["2018", "2019", "2020", "2021", "2022"],
    engines: ["Бензин", "Дизель", "Гибрид"],
    modifications: ["Standard", "ST-Line", "Titanium"],
  },
  Škoda: {
    models: ["Octavia", "Superb", "Kodiaq", "Karoq", "Fabia"],
    years: ["2017", "2018", "2019", "2020", "2021"],
    engines: ["Бензин", "Дизель"],
    modifications: ["Active", "Ambition", "Style"],
  },
  Toyota: {
    models: ["Corolla", "Camry", "RAV4", "Land Cruiser", "Prius"],
    years: ["2016", "2017", "2018", "2019", "2020"],
    engines: ["Бензин", "Гибрид", "Дизель"],
    modifications: ["Standard", "Comfort", "Premium"],
  },
  Renault: {
    models: ["Logan", "Duster", "Sandero", "Clio", "Megane"],
    years: ["2018", "2019", "2020", "2021", "2022"],
    engines: ["Бензин", "Дизель"],
    modifications: ["Access", "Life", "Zen"],
  },
  Opel: {
    models: ["Astra", "Insignia", "Corsa", "Grandland X", "Zafira"],
    years: ["2017", "2018", "2019", "2020"],
    engines: ["Бензин", "Дизель", "Гибрид"],
    modifications: ["Edition", "Elegance", "Ultimate"],
  },
  Mitsubishi: {
    models: ["Outlander", "Pajero", "Eclipse Cross", "ASX", "Lancer"],
    years: ["2015", "2016", "2017", "2018", "2019"],
    engines: ["Бензин", "Дизель", "Гибрид"],
    modifications: ["Invite", "Intense", "Ultimate"],
  },
  Hyundai: {
    models: ["Elantra", "Tucson", "Santa Fe", "Sonata", "Kona"],
    years: ["2018", "2019", "2020", "2021"],
    engines: ["Бензин", "Дизель", "Гибрид"],
    modifications: ["Start", "Classic", "Comfort", "Style"],
  },
};
