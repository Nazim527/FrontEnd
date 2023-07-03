//! Bir nesne yaratmaq ucun class olusdururuq ve olusdurma qaydasi esasen asagidaki kimidir, class bir defe 
//! yaratdiqda isdediyimiz her Her hansi bir yerde nesnesini istifade ede biliriq

class ClassName {
    //* Code goes here
}

//? ---------------------------------------------------------------------------------------------------------------

//* Class Example

//! Class consturtor bize parametrler alaraq icindeki ozellikleri tanimamizi saglayir, 
//! constuctorun icinde sadece ozellik atamak ucun isdifade ediriq ama metodu uje classimizin icinde

// ! ornek asagidaki kimi

class Person {
    constructor(firstName, lastName,age) { //! Bunlara deger gondermedende var sayilan bir deger vere bilerem meselen "age=22"
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.skills = []
    }
    getFullName() {
        const fullName = "Hello " + this.firstName + " " + this.lastName
        return fullName
    }

    //! getter ve Setter getter-deyer gondermek icin, setter- ise deyer almaq ucun isdifade olunur 
    //? Getter esasen meselen obyekdimde private proberty olacaq ulasmaq olmasini isdemediyim bir sey onda get ile ulasmaq daha asan olacaq
    get getSkills() {
        return this.skills
    }
    
    //! Set istifade ederek
    set setSkills(skill) {
        this.skills.push(skill);
    }
    //? Set ucun metod isdifade ederek
    appendSkills(add) {
        this.skills.push(add)
    }

    static getVersion() {
        return 'Pirallahi'
    }
}

const person1 = new Person('Nazim', 'Rzayev', 22);
const person2 = new Person('Betul', "Yildirim", 21)

//* console.log(person2.getFullName());

//? get olan metodlari normal bir degisken kimi cagiririq
//*console.log(person1.getSkills); 

//? Set de artiq bir deyer atamaq isdesek o zaman gelib adi qaydada bir parametr girmirik yazilis qaydasi asagidaki cur olacaq ve cagirdikda deyerimiz "getde" olacaq
//*  person1.setSkills = 'Javascript'
//*  console.log(person1.getSkills)

//* person1.appendSkills('html')
//* person1.appendSkills('Css')
//* console.log(person1.getSkills);

//? ---------------------------------------------------------------------------------------------------------------

//! Inheritance - miras almaq; bu o demekdi men bir "Class" olusdururam ama ki "ozellik" ve "metodlarin" basqa bir classdan miras aliram
//! ornek asagida kimi verilmisdir. BU usulun bir iside yaxsidi ki kod setir sayin azaldir eyni seyin tekrarlanmasin onleyir

class Teacher extends Person {
    constructor(firstName, lastName,age, gender) {
        super(firstName, lastName,age) //! Bu ise super yazanda olan deger adlarini yesni age, lastName i hamisin "Extends" olaraq miras gonderdiyimiz class a gonderir ve artiq bizim adimizi isdifade ede bilerik
        this.gender = gender
    }

    get getGender() {
        return this.gender == 1 ? 'Kisi' : 'Qadin'
    }
}

const teacher1 = new Teacher('Betul', 'Yildirim', 21, 3);

console.log(teacher1.getGender);