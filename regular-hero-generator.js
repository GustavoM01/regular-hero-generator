const adjective = ['fantastic', 'brilliant', 'super'];

const title = ['Mr.', 'Sr.', 'Miss'];

const noun = ['Tortillas', 'Rugs', 'Wildfire'];

let regularHeroName;

const regularHeroGenerator = () => {
    
    const first = adjective[Math.floor(Math.random() * adjective.length)];
    const second = title[Math.floor(Math.random() * title.length)];
    const third = noun[Math.floor(Math.random() * noun.length)];

    regularHeroName = `${first} ${second} ${third}!` 
}

regularHeroGenerator();

console.log(regularHeroName);