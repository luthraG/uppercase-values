# uppercase-values
It provides an API to convert the values of the object into uppercase. Client of this API can specify if values of nested keys are also required to be converted to uppercase.

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install uppercase-values --save
```

### Usage

```javascript
var UPPER_CASE_VALUES = require('uppercase-values');

var object = {
    'California' : 'ca',
    'Texas'      : 'tx',
    'NEW YORK'   : 'ny' 
};

UPPER_CASE_VALUES.toUpperCaseValues(object);
//=> { 'California' : 'CA', 'Texas' : 'TX', 'NEW YORK' : 'NY' }

var days = {
    'SUNDAY'    : 'First',
    'MONDAY'    : 'Second',
    'TUESDAY'   : 'Third',
    'WEDNESDAY' : 3
};

UPPER_CASE_VALUES.toUpperCaseValues(days);
//=> { 'SUNDAY': 'FIRST', 'MONDAY' : 'SECOND', 'TUESDAY' : 'THIRD', 'WEDNESDAY' : 3 }

```

### Clone the repo

```bash
$ git clone https://github.com/luthraG/uppercase-values.git
```

### API

#### toUpperCaseValues(obj, [options])

This API takes two parameters:
1. Object whose values to be converted to uppercase and 
2. options object. This argument is optional


**Options**

Various options supported by this API are :
- **deep** - To specify if values of nested keys should also be converted to uppercase. Default is false.

**Example with options**

```javascript
var UPPER_CASE_VALUES = require('uppercase-values');

var days = {
    'SUNDAY'    : 'First',
    'MONDAY'    : 'Second',
    'TUESDAY'   : 'Third',
    'WEDNESDAY' : 3,
    'WEEK_END'  : {
    	'SUNDAY' : {
    		'CODE' : {
    			'ABBR' : 'sat'
    		}
    	}
	}
};

UPPER_CASE_VALUES.toUpperCaseValues(days, { deep : true});
//=> { 'SUNDAY': 'FIRST', 'MONDAY' : 'SECOND', 'TUESDAY' : 'THIRD', 'WEDNESDAY' : 3, 'WEEK_END' : { 'SUNDAY' : { 'CODE' : { 'ABBR' : 'SAT' } } } }

```

### Related projects

You might also be interested in these projects:

* [lowercase-values](https://www.npmjs.com/package/lowercase-values): Convert the values of all the keys of an object into lowercase. | [homepage](https://github.com/luthraG/lowercase-values.git)
* [object-upperkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into uppercase. | [homepage](https://github.com/luthraG/object-upperkeys.git)
* [object-lowerkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into lowercase. | [homepage](https://github.com/luthraG/object-lowerkeys.git)
* [objectvalues](https://www.npmjs.com/package/objectvalues): To get all the values of an object. It can also fetch the value of nested object of any depth. | [homepage](https://github.com/luthraG/objectvalues.git)

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)

