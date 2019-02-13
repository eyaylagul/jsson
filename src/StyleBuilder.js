export default class StyleBuilder {
    
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
    
    display(val) {
        if(val) {
            this.set('display', val);
            return this;
        }
        return this.has('display') ? `display:${this.get('display')};` : '';
    }
    
    position(val) {
        if (val) {
            this.set('position', val);
            return this;
        }
        
        return this.has('position') ? `position:${this.get('position')};` : '';
    }
    
    height(val) {
        if (val) {
            this.set('height', val);
            return this;
        }
        
        return this.has('height') ? `height:${this.get('height')}${this.unit()};` : '';
    }
    
    
    width(val) {
        if (val) {
            this.set('width', val);
            return this;
        }
        
        return this.has('width') ? `width:${this.get('width')}${this.unit()};` : '';
    }
    
    zIndex(val) {
        if (val) {
            this.set('zIndex', val);
            return this;
        }
        
        return this.has('zIndex') ? `z-index: ${this.get('zIndex')};` : '';
    }
    
    left(val) {
        if (val) {
            this.set('left', val);
            return this;
        }
        
        return (this.has('left') || this.has('x')) ? `left:${this.get('left') || this.get('x')}${this.unit()};` : '';
    }
    
    // left alias
    x(val) {
        return this.left(val);
    }
    
    
    top(val) {
        if (val) {
            this.set('top', val);
            return this;
        }
        
        return (this.has('top') || this.has('y')) ? `top:${this.get('top') || this.get('y')}${this.unit()};` : '';
    }
    
    // top alias
    y(val) {
        return this.top(val);
    }
    
    rotate(val) {
        if (val) {
            this.set('rotate', val);
            return this;
        }
        
        return this.has('rotate') ? `transform:rotate(${this.get('rotate')}deg);` : '';
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
    
    backgroundColor(val) {
        if (val) {
            this.set('backgroundColor', val);
            return this;
        }
        
        return this.has('backgroundColor') ? `background-color:${this.get('backgroundColor')};` : '';
    }
    
    radius(val) {
        if (val) {
            this.set('radius', val);
            return this;
        }
        return this.has('radius') ? `border-radius: ${this.get('radius')}${this.unit()};` : '';
    }
    
    render() {
        return `${this.display()}${this.position()}${this.height()}${this.width()}${this.backgroundColor()}${this.left()}${this.top()}${this.rotate()}${this.zIndex()}${this.textAlign()}${this.textTransform()}${this.fontWeight()}${this.fontStyle()}${this.fontSize()}${this.fontFamily()}${this.color()}${this.radius()}`;
    }
}
