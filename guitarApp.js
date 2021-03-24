const standardDrills = [];
const skillDrills = [];
const chordDrills = [];
const scaleDrills = [];

const drillFactory = (name, type, range, tempo, description, interval, chordType) => {
    return {
        _name: name, 
        _type: type, 
        _range: range, 
        _tempo: tempo,
        _description: description,
        _interval: interval,
        _chord: chordType,

        get name() {
            return this._name;
        }, 
        get type() {
            return this._type;
        },
        get range() {
            return this._range;
        },
        get tempo() {
            return this._tempo;
        }, 
        get description() {
            return this._description;
        },
        get interval() {
            if(this._interval) return this._interval;
        }, 
        get chord() {
            if(this._chord) return this._chord;
        },

        set range(newRange) {
            this._range = newRange;
        }, 
        set tempo(newTempo) {
            this._tempo = newTempo;
        },
        set interval(newInterval) {
            this._interval = newInterval;
        },
        set chord(newChord) {
            this._chord = newChord;
        },

        printDrill() {
            console.log(this.name);
            console.log(`Type: ${this.type}`);
            console.log(`Tempo: ${this.tempo} bpm`)
            const rnge = this.range;
            console.log(`Range: Frets ${rnge[0]} - ${rnge[1]}`);
            if(this.interval) console.log(`Interval: ${this.interval}`);
            if(this.chord) console.log(`Chord Type: ${this.chord}`);
            console.log(this.description);
            console.log(' ');
        }


    }
}

const createDrillBank = () => {
    const basicDexterity = drillFactory('Basic Dexterity Drill', 'Standard', [1,12], 120, 'Follow the 1 2 3 4 - 4 3 2 1 playing pattern.');
    standardDrills.push(basicDexterity);
    const intermediateDexterity = drillFactory('Intermediate Dexterity Drill', 'Standard', [1,12], 150, 'Follow the 1 3 2 4 - 4 2 3 1 playing pattern.');
    standardDrills.push(intermediateDexterity);
    const advanceDexterity = drillFactory('Advance Dexterity Drill', 'Standard', [1,12], 180, 'Do all possible playing patterns.');
    standardDrills.push(advanceDexterity);

    const speedSkill = drillFactory('Speed Picking Drill', 'Skill', [1, 12], 60, 'Start with 1/8 notes, then 1/8 note triplets, then 1/16 notes, then 1/16 note pentuplets, then 1/16 note hexaplets.');
    skillDrills.push(speedSkill);
    const basicStretch = drillFactory('Basic Stretching Drill', 'Skill', [9, 1], 90, 'Stretch fingers 2, 3, and 4 by 1 fret each.');
    skillDrills.push(basicStretch);
    const advanceStretch = drillFactory('Advance Stretching Drill', 'Skill', [9, 1], 90, 'Stretch fingers 2, 3, and 4, by 2 frets each.');
    skillDrills.push(advanceStretch);
    const cagedRoots = drillFactory('CAGED Roots Drill', 'Skill', [0, 15], 120, 'Cycle through the circle of fourths and find all the root notes using the CAGED shapes.');
    skillDrills.push(cagedRoots);

    const majArpeggio = drillFactory('Major Arpeggio Drill', 'Chord', [0, 15], 120, 'Cycle through the circle of fourths and map all the major arpeggios of every root', null, 'Maj');
    chordDrills.push(majArpeggio);
    const minArpeggio = drillFactory('Minor Arpeggio Drill', 'Chord', [0, 15], 120, 'Cycle through the circle of fourths and map all the minor arpeggios of every root', null, 'Min');
    chordDrills.push(minArpeggio);
    const majTriad = drillFactory('Major Triads Drill', 'Chord', [0,15], 120, 'Cycle through the major triads using the circle of fourths.', null, 'Closed Maj');
    chordDrills.push(majTriad);
    const minTriad = drillFactory('Minor Triads Drill', 'Chord', [0,15], 120, 'Cycle through the minor triads using the circle of fourths.', null, 'Closed Min');
    chordDrills.push(minTriad);

    const majPentatonic = drillFactory('Major Pentatonic Drill', 'Scale', [0, 15], 120, 'Cycle through the circle of fourths and do the major pentatonic scale for every root.', 2);
    scaleDrills.push(majPentatonic);
    const minPentatonic = drillFactory('Minor Pentatonic Drill', 'Scale', [0, 15], 120, 'Cycle through the circle of fourths and do the minor pentatonic scale for every root.', 2);
    scaleDrills.push(minPentatonic);
    const majScale = drillFactory('Major Scale Drill', 'Scale', [0, 15], 120, 'Cycle through the circle of fourths and do the major scale for every root.', 2);
    scaleDrills.push(majScale);
    const minScale = drillFactory('Minor Scale Drill', 'Scale', [0, 15], 120, 'Cycle through the circle of fourths and do the natural minor scale for every root.', 2);
    scaleDrills.push(minScale);
}

createDrillBank();

const printDrillBank = () => {
    standardDrills.forEach(drill => drill.printDrill());
    skillDrills.forEach(drill => drill.printDrill());
    chordDrills.forEach(drill => drill.printDrill());
    scaleDrills.forEach(drill => drill.printDrill());
}

const randomNumber = drillType => {
    if(drillType === 'standard') return Math.floor(Math.random()*3);
    else {
        const drillPair = [];
        do {
            const drill = Math.floor(Math.random()*4);
            if(!drillPair.includes(drill)) drillPair.push(drill);
        }while(drillPair.length<2)

        return drillPair;
    }
}

const generateSingleRoutine = () => {
    const routine = [];
    
    //Randomly select 7 drills, 1 standard drill, 2 skill drills, 2 chord drills, and 2 scale drills. 
    //Standard Drill
    const standardDrill = randomNumber('standard');
    routine.push(standardDrills[standardDrill]);
    
    //Skill Drills
    const skillDrill = randomNumber('skill');
    routine.push(skillDrills[skillDrill[0]]);
    routine.push(skillDrills[skillDrill[1]]);

    //Chord Drills
    const chordDrill = randomNumber('chord');
    routine.push(chordDrills[chordDrill[0]]);
    routine.push(chordDrills[chordDrill[1]]);

    //Scale Drills
    const scaleDrill = randomNumber('scale');
    routine.push(scaleDrills[scaleDrill[0]]);
    routine.push(scaleDrills[scaleDrill[1]]);

    return routine;
}

const printRoutine = () => {
    const routine = generateSingleRoutine();
    routine.forEach(drill => drill.printDrill());
}

const appStartUp = () => {
    console.log('Hello! Welcome to the guitar routine generator!');
    
    const prompt = require('prompt-sync')({sigint: true});
    let ans;
    do {
        ans = prompt('Would you like to generate a routine? y/n : ');
        if(ans.toLowerCase() !== 'y' && ans.toLowerCase() !== 'n') console.log('Invalid Input');   
    
    } while(ans.toLowerCase() !== 'y' && ans.toLowerCase() !== 'n');

    if(ans.toLowerCase() === 'y') printRoutine();
    else console.log('Okay, Bye!');
}

appStartUp();