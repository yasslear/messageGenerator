
// splitting the sentences into subject, verb, object

const subject = ['You', 'Your spouse', 'Your parent', 'Your closest friend', 'Your childhood friend', 'Your aunt', 'Your uncle'];

const verb = ['will find', 'will see', 'will begin wanting'];

const object = ['great fortune', 'great fortune','more opportunities to travel and see the world'];


const fortuneGenerator = () => {
    let pickSubject = subject[Math.floor(Math.random()*subject.length)];
    let pickVerb = verb[Math.floor(Math.random()*verb.length)];
    let pickObject = object[Math.floor(Math.random()*object.length)];

    return `${pickSubject} ${pickVerb} ${pickObject}`;
};


console.log(fortuneGenerator());