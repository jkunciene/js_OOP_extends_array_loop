class Person{
  constructor(fullName, birthYear){
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

}
class Student extends Person{
  constructor(fullName, birthYear, startYear, course){
    super(fullName, birthYear);

    this.startYear = startYear;
    this.course = course;
    this.evaluation = [];
  }

  setStartYear(year){
    this.startYear = year;
  }
  setEvaluation(val){
    this.evaluation.push(val);
  }
  getInfo(){
    return `Studentas/e ${this.fullName} pradejo mokytis ${this.startYear} grupeje ${this.course}`;
  }
  getEvaluation(){    
        for(let  i=0; i<this.evaluation.length; i++){
            console.log(this.evaluation[i]) ;            
        }
    }
}

const Ona = new Student("Ona Onaite", 1991, 0, "ZP21/1T");
Ona.setStartYear(2021);
console.log(Ona.getInfo());
Ona.setEvaluation(9);
Ona.setEvaluation(7);
Ona.setEvaluation(8);
Ona.setEvaluation(10);
Ona.getEvaluation();

