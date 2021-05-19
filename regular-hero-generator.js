const title = ['Mr.', 'Miss', 'Sir', 'Madam'];

const adjective = ['Fantastic', 'Brilliant', 'Super', 'Wonder', 'Metal', 'Hellish', 'Drive', 'Child', 'Handsome', 'Beautiful'];

const noun = ['Tortillas', 'Rugs', 'Wildfire', 'Man', 'Woman', 'Boy', 'Girl', 'Blizzard', 'Tornado', 'Cyborg', 'Bat', 'Samurai', 'Knight', 'King', 'Emperor'];

let regularHeroName;

const regularHeroGenerator = () => {
    
    const first = title[Math.floor(Math.random() * title.length)];
    const second = adjective[Math.floor(Math.random() * adjective.length)];
    const third = noun[Math.floor(Math.random() * noun.length)];

    regularHeroName = `${first} ${second} ${third}!` 
}

regularHeroGenerator();

console.log(regularHeroName);