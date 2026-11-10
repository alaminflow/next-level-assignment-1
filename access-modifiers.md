# Access Modifiers in TypeScript

## Introduction

When we build classes, we don't want everyone to touch every property. Access modifiers help us control that. TypeScript has public, private, protected and readonly.

## How They Work

Public is the default, so anyone can use it. Private means only the same class can use it. Protected is like private, but child classes can use it too. Readonly means the value can be set once and never changed after that. Here Admin can read role because it is a child class, but outside code cannot. One thing to remember is that these rules are checked only while compiling. After that, they are gone in the JavaScript file.

```ts
class User {
  public name: string;
  private password: string;
  protected role: string = "member";
  readonly id: number;

  constructor(name: string, password: string, id: number) {
    this.name = name;
    this.password = password;
    this.id = id;
  }
}

class Admin extends User {
  getRole(): string {
    return this.role; // ok, protected
  }
}

const user = new User("Rahim", "1234", 1);
user.name;     // ok
user.password; // error, private
user.id = 2;   // error, readonly
```

## Conclusion

I use private to hide data, protected to share it with child classes, and readonly for values that should never change. It keeps the code safer and cleaner.