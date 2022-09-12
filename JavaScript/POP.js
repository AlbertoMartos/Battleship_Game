//BATTLESHIP GAME - Class

var author;
var player;
let vsauthor = null;
let vsplayer = null;

class Person{
    //private atributte
    #_privateDni="47524780A";

    constructor(n,a,e){
        this._name = n;
        this._surname=a;
        this._age=e;
    }

    //getters
    get name(){
        return this._name;
    }

    get surname(){
        return this._surname;
    }

    get age(){
        return this._age;
    }

    //setters
    set name(value){
        this._name = value;
    }

    set surname(value){
        this._surname = value;
    }

    set age(value){
        this._age = value;
    }

    //static method
    static sayHi(){
        return "Hi, nice to meet you!"
    }

    //private method
    #returnDni(){
        return  this.#_privateDni       //returns dni, but it's privated
    }

    showDni(){
        return this.#returnDni();     //access to the private DNI from the class to be able to show it
    }

    //toString
    toString(){
        return `NOMBRE: ${this.name} ${this.surname}, EDAD: ${this.age}`;
    }

    //valueOf
    valueOf(){
        return this.age;
    }   
    
}

class Author extends Person{

    #_privateIdAuthor = "650425631A";
    _github = "https://github.com/AlbertoMartos";

    constructor(n,a,e,l,v){
        super(n,a,e);
        this._language = l;
        this._version = v;
    }

    //getters
    get github(){
        return this._github;
    }

    get language(){
        return this._language;
    }

    get version(){
        return this._version;
    }

    //setters
    set github(value){
        this._github=value;
    }

    set language(value){
        this._language = value;
    }

    set version(value){
        this._version=value;
    }

    //static method
    static sayHiAuthor(){
        return `${super.sayHi()} Im the author!`
    }

    //private method

    #returnIdAuthor(){
        return this.#_privateIdAuthor;
    }

    showIdAuthor(){
        return this.#returnIdAuthor();
    }

    //toString
    toString(){
        return `${super.toString()}, GITHUB: ${this.github}, LANGUAGE: ${this.language}, VERSION: ${this.version}`;
    }

    //valueOf
    valueOf(){
        return this._version;
    }



}

class Player extends Person{
    //private data
    #_ipUser="192.168.17.43";
    
    constructor(n,a,e,p,ac,fa,id){
        super(n,a,e);
        this._score = p;
        this._hits = ac;
        this._fails = fa;
        this._idUser=id;
    }

    //getters
    get score(){
        return this._score;
    }

    get hits(){                 //get how many times the user has guessed right
        return this._hits;
    }

    get fails(){
        return this._fails;
    }

    get idUser(){
        return this._idUser;
    }

    //setters
    set score(value){
        this._score = value;
    }

    set hits(value){
        this._hits = value;
    }

    set fails(value){
        this._fails = value;
    }

    set idUser(value){
        this._idUser=value;
    }

    //static method
    static sayHiPlayer(){
        return `${super.sayHi()} Im the player!`;
    }

    //private method
    #returnIpUser(){
        return this.#_ipUser;
    }

    showIpUser(){
        return this.#returnIpUser();
    }

    //toString
    toString(){
        return `${super.toString()}, SCORE: ${this.score}, HITS: ${this.hits}, FAILS: ${this.fails}, ID USER: ${this.idUser}`; 
    }

    //valueOf
    valueOf(){
        return this.score + " - " + this.hits + " - " + this.fails;
    }
}

//--------------------- Adding prototype method and checking that the author and player classes are ready ---------------------

Person.prototype.testingPrototype=function(){ //adding hot function to the code (just testing)
    return "Testing the prototype function";
}

function fillInfoAuthor(name,surname,age,language,version){ //fill the classes
    author = new Author(name,surname,age,language,version);
}

function fillInfoPlayer(name,surname,age,score,hits,fails,idUser){
    player = new Player(name,surname,age,score,hits,fails,idUser);
}

//fillInfoAuthor("Vinicius","Junior",21,100,2,1,15486); //testing
fillInfoAuthor("Alberto","Martos",24,"JavaScript",'1.0.0'); 


function showAuthor(){
    vsauthor = window.open("../HTML/showAuthor.html","Demo","width=1000,height=500")  //onclick showAuthor
}

function showPlayer(){
    vsplayer = window.open("../HTML/showPlayer.html","Demo","width=1000,height=500")  //onclick showPlayer
}