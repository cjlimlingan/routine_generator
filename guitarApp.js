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

/*const basicDexterity = drillFactory('Basic Dexterity Drill', 'Standard', [1,12], 120, 'Follow the 1 2 3 4 - 4 3 2 1 playing pattern.');
const intermediateDexterity = drillFactory('Intermediate Dexterity Drill', 'Standard', [1,12], 150, 'Follow the 1 3 2 4 - 4 2 3 1 playing pattern.');
const advanceDexterity = drillFactory('Advance Dexterity Drill', 'Standard', [1,12], 180, 'Do all possible playing patterns.'); */
