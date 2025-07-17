let name ="paramasudha";
let age ="20";
console.log("my name is"+name);
console.log("my age is"+age);

let num1=20;
let num2=20;
let total=num1+num2;
console.log("the total num is" + total);

function favouritejob()
{
    console.log("my favouritejob is MERN stack developer");
}
favouritejob()

let myname="PARAMASUDHA S";
let myage=20;
let isalive=true;
let car=null;
let bike;
console.log(typeof myname);
console.log(typeof myage);
console.log(typeof isalive);
console.log(typeof car);
console.log(typeof bike);

let AGE=18;
if (AGE>=18)
    {
        console.log("you are eligible to vote");
    }
    else
        {console.log("you are not eligible to vote");}

    let mark =90;
    if (mark>=90)
        {
            console.log("you got a A+ grade");
        }
        else if(mark>=70)
        {
            console.log("you got a A grade");

        }
        else
        {
            console.log("you got a fail mark");
        }

        for(let j=1;j<=5;j++)
        {
            console.log("this is practice js"+j);
        }

        let j=2;
        while(j<=5)
        {
            console.log("hi dude"+j);
            j++;
        }

        //function with parameters//

        function friend(name)
        {console.log("my trustable friend name is" +name);}
        friend("appu");
        friend("amma");

        //function with return//

        function add(a,b)
        {return a+b;}
        let result=add(20,30)
        {console.log("the total is" +result);}

        //arrays concept of js//
    
        let favouritefood =["friedrice","dosa","chickenbriyani","fishfry","fish"];
        console.log(favouritefood);
        console.log(favouritefood[2]);
        favouritefood.push("mushroomrice");
        console.log(favouritefood);
        favouritefood.pop();
        console.log(favouritefood);
        console.log(favouritefood.length);
        for(let i=0;i<favouritefood.length;i++)
        {
            console.log(favouritefood[i]);
        }

        let favouritePlaces = ["Goa", "Ooty", "Kodaikanal", "Manali"];
        favouritePlaces.unshift("pondicherry");
        console.log(favouritePlaces);

        favouritePlaces.pop();
        console.log(favouritePlaces);

        favouritePlaces.push("paris");
        console.log(favouritePlaces);

         let favouritePlace = ["Goa", "Ooty", "Kodaikanal", "Manali"];
         favouritePlace.splice(1,1,);
         console.log(favouritePlace);
        console.log(favouritePlace.length);

for(let i=0;i<favouritePlace.length;i++)
{
    console.log(favouritePlace[i]);
}

let Places = ["Pondicherry", "Goa", "Ooty", "Kodaikanal", "Manali", "Paris"];
let fewplaces=Places.slice(2,5);
console.log(fewplaces);
console.log(Places);


let color = ["Red", "Green", "Blue"];
color.splice(1,0,"Yellow");
let index=color.indexOf("Green");
if(index!==-1)
{
color.splice(index,1);
}
color.push("Black");
console.log(color);




let colors = ["Red", "Green", "Blue"];
colors.splice(2,0,"Yellow");
let colorsindex=colors.indexOf("Green");
if(colorsindex!==-1)
    {
colors.splice(colorsindex,1);
    }
    console.log(colors);
    let fruits = ["Apple", "Banana", "Mango"];
    fruits.unshift("Graphes");
    let fruitsindex=fruits.indexOf("Mango");
    if (fruitsindex!==-1)
    {
        fruits[fruitsindex]="Orange"    
    }
console.log(fruits);

for(let i=0;i<5;i++)
{
    console.log("numbers" +i);
}

let colours=["blue","red","purple"];
for(let colour of colours)
{
    console.log(colour);
}

//print nums 10 to 1 using for//

for(let i=10; i>=1 ;i--)
{
    console.log("print the numbers" +i);
}
let cities = ["Chennai", "Madurai", "Salem"];
for(let city of cities)
{
    console.log(city);
}
let coloors = ["Red", "Green", "Yellow"];
coloors.forEach(function(coloor)
{
    console.log(coloor);
});

let student = { name: "Arun", age: 20, dept: "CSE" };
for(let key in student)
{
console.log(key+":"+student[key]);
}
let marks = [40, 50, 60, 70];
let score=marks.map(function(num)
{
    return num+5;
});
console.log(score);

Numbers=[20,30,40,50,60];
Numbers.pop();
Numbers.push(70);
console.log(Numbers);

function addnumbers(a,b)
{
    return a+b;
}
let adds=addnumbers(10,20);
console.log(adds);

function multiplyNumbers(a,b,c)
{
    return a*b*c;
}
let multiply=multiplyNumbers(10,2,3);
console.log(multiply);
let number=10;
if(number<0)
{
    console.log("it is negative value");
}

let markss = [35, 50, 60, 80]; 
let scores=markss.map(num=>num*2);
console.log(scores);

let numbers = [20, 35, 50, 65, 80];
let numb = numbers.filter(num => num >= 50);
console.log(numb);
