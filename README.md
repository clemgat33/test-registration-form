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
      },
      {
        "label": "First name",
        "name": "firstname",
        "type": "text",
        "required": true
      },
      {
        "label": "Date of birth",
        "name": "dateofbirth",
        "type": "date",
        "required": true,
        "validation": {
          "type": "age",
          "message": "Should be older than 18years old",
          "min": 18
        }
      },
      {
        "label": "Address",
        "name": "address",
        "type": "text",
        "required": false
      },
      {
        "label": "Country",
        "name": "country",
        "type": "select",
        "required": true,
        "options": ["Germany", "Canada", "Japan", "Kuwait", "Turkey", "Brazil"]
      }
      // ..other fields
    ]
  }
    // ..other steps
]

```
