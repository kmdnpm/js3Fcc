//functions can be assigned other names
function createUser(first, last) {
    return { firstName: first, lastName: last }
}
const makeUser = createUser;
const user = makeUser('Esther', 'Bai')

console.log(user);

//functions can be contained in objects
function logWoof() {
    console.log('Woof!');
}

const tess = {
    //objects
    name: 'Tess',
    barf: logWoof
}

tess.barf();

//inline functions
const tes = {
    name: 'Tess',
    barck: function () {
        console.log('Woof!');
    }
}
tes.barck();

//Arrays of Functions
function bark() {
    console.log('Woof!');
}
function growl() {
    console.log('Grrrrr!');
}
const dogSounds = [bark, growl]

for (let i = 0; i < dogSounds.length; i++) {
    dogSounds[i]()
}