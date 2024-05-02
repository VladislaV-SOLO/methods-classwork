console.group('варианты использования без this');

const userPro1 = {
    objectName: 'userPro1',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: function () {
        console.log(`Hello from ${userPro1.objectName}! 
        My name is ${userPro1.name} and I am a ${userPro1.profession}`);
    }
}

userPro1.introduce()

const userSimple1 = {
    objectName: 'userSimple1',
    name: 'Nick',
    profession: 'Back-End',
    introduce: function () {
        console.log(`Hello from ${userSimple1.objectName}! 
        My name is ${userSimple1.name} and I am a ${userSimple1.profession}`);
    }
}

userSimple1.introduce()
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

function introduce() {
    console.log(`Hello from ${userPro2.objectName}! 
    My name is ${userPro2.name} and I am a ${userPro2.profession}`);
}
const userPro2 = {
    objectName: 'userPro2',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: introduce
}

userPro2.introduce()

const userSimple2 = {
    objectName: 'userSimple2',
    name: 'Nick',
    profession: 'Back-End',
    introduce: introduce
}

userSimple2.introduce()
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
function introduce3(obj) {
    console.log(`Hello from ${obj.objectName}! 
    My name is ${obj.name} and I am a ${obj.profession}`);
}

const userPro3 = {
    objectName: 'userPro3',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: introduce3
}
userPro3.introduce(userPro3)

const userSimple3 = {
    objectName: 'userSimple3',
    name: 'Nick',
    profession: 'Back-End',
    introduce: introduce3
}
userSimple3.introduce(userSimple3)

console.groupEnd()

// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

console.group('Работа с использованием this')

const userPro5 = {
    objectName: 'userPro5',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: function () {
        console.log(`Hello from ${this.objectName}! 
        My name is ${this.name} and I am a ${this.profession}`);
    }
}
userPro5.introduce()

const userSimple5 = {
    objectName: 'userSimple5',
    name: 'Nick',
    profession: 'Back-End',
    introduce: userPro5.introduce
}
userPro5.introduce()

// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

function  introduce4() {
    console.log(`Hello from ${this.objectName}! 
    My name is ${this.name} and I am a ${this.profession}`);
}

const userPro6 = {
    objectName: 'userPro6',
    name: 'Vlad',
    profession: 'Front-End',
    introduce: introduce4
}
userPro6.introduce()

const userSimple6 = {
    objectName: 'userSimple6',
    name: 'Nick',
    profession: 'Back-End',
    introduce: introduce4
}
userPro6.introduce()

// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

const userSimple7 = {
    objectName: 'userSimple7',
    name: 'Nick',
    profession: 'Back-End',
    introduce () {
        console.log(this);
        console.log(`Hello from ${this.objectName}! 
        My name is ${this.name} and I am a ${this.profession}`);

    }
}
let tempFoo = userSimple7.introduce
tempFoo()



console.groupEnd()


