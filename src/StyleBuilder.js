export class StyleBuilder {
    constructor(settings, unitType = 'px') {
        this.settings = (typeof settings === 'object') ? settings : {};
        this.unitType = unitType;
    }
    
    get(val) {
        return this.settings[val];
    }
    
    set(key, val) {
        return this.settings[key] = val;
    }
    
    has(val) {
        return this.settings.hasOwnProperty(val);
    }
    
    
    unit(val) {
        if (val) {
            this.unitType = val;
            return this;
        }
        return this.unitType;
    }
    
    
    textAlign(val) {
        if (val) {
            this.set('textAlign', val);
            return this;
        }
        return this.has('textAlign') ? `text-align:${this.get('textAlign')};` : '';
    }
    
    
    textTransform(val) {
        if (val) {
            this.set('textTransform', val);
            return this;
        }
        return this.has('textTransform') ? `text-transform:${this.get('textTransform')};` : '';
    }
    
    
    fontWeight(val) {
        if (val) {
            this.set('fontWeight', val);
            return this;
        }
        return this.has('fontWeight') ? `font-weight:${this.get('fontWeight')};` : '';
    }
    
    
    fontStyle(val) {
        if (val) {
            this.set('fontStyle', val);
            return this;
        }
        return this.has('fontStyle') ? `font-style:${this.get('fontStyle')};` : '';
    }
    
    
    fontSize(val) {
        if (val) {
            this.set('fontSize', val);
            return this;
        }
        return this.has('fontSize') ? `font-size:${this.get('fontSize')}${this.unit()};` : '';
    }
    
    fontFamily(val) {
        if (val) {
            this.set('fontFamily', val);
            return this;
        }
        return this.has('fontFamily') ? `font-family:${this.get('fontFamily')};` : '';
    }
    
    color(val) {
        if (val) {
            this.set('color', val);
            return this;
        }
        return this.has('color') ? `color:${this.get('color')};` : '';
    }
    
    
    radius(val) {
        if (val) {
            this.set('radius', val);
            return this;
        }
        return this.has('radius') ? `border-radius: ${this.get('radius')}${this.unit()};` : '';
    }
    
    render() {
        return `${this.textAlign()}${this.textTransform()}${this.fontWeight()}${this.fontStyle()}${this.fontSize()}${this.fontFamily()}${this.color()}${this.radius()}`;
    }
}
