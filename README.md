# Registration Form

This is a registration form simulation for CMS

## Usage

Use the controller.json file to modify the registration form.

```javascript
controller = [
  //step[]
  {
    //step 1
    "name": "Step 1",
    "fields": [
      {
        "label": "Username",
        "name": "username",
        "type": "text",
        "required": true,
        "validation": {
          "type": "length",
          "message": "Username should be between 6 and 18 characters",
          "min": 6,
          "max": 18
        }
      },
      {
        "label": "Email",
        "name": "email",
        "type": "email",
        "required": true,
        "validation": {
          "type": "email",
          "message": "Email format is invalid"
        }
      }
      // ..other fields
    ]
  }
    // ..other steps
]

```

## Validations & Options by type of input

#### TEXT:
* length (for the number of characters a string should have)
    * message (error message)
    * min
    * max

#### DATE:
* age (a limited age for a date input)
    * message (error message)
    * min

#### EMAIL:
* email (email regex)
    * message (error message)
