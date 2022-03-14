class TextClass {
    constructor(database) {
        this.SCRIPTS = database;
    }

    charScript(value) {
        for (const script of this.SCRIPTS) {
            for (const range of script.ranges) {
                if(value >= range[0] && value < range[1])
                    return script
            }
        }
        return null;
    }

    groupBy(text, groupName) {
        const counts = [];
        for (const iterator of text) {
            const name = groupName(iterator);
            const known = counts.findIndex(e => e.name == name);
            if(known == -1) 
                counts.push({name, count : 1});
            else
                counts[known].count++;
        }
        return counts;
    }

    textScript(text) {
        const script = this.groupBy(text, char => {
            const script = this.charScript(char.codePointAt(0))
            return script.name ? script.name : "none";
        }).filter(e => e != "none");

        const total = script.reduce((n, {count}) => n+count, 0)

        if(total == 0) return "No Script Found";
        return script.map(({name, count}) => {
            let resultInPercent = Math.round(count/total * 100);
            return {name, resultInPercent};
        });
    }
}