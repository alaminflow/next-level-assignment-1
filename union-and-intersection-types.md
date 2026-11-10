# Union and Intersection Types in TypeScript

## Introduction

A union type uses the | symbol and means a value can be one type or another. An intersection type uses the & symbol and means a value must have the properties of all the types together. We can use both in one type to describe real data.

## Example

Think of a school system. Every person has a name and age, and each person is either a student or a teacher. The union gives us two possible shapes, student or teacher. The intersection adds name and age to both of them, so we don't repeat those properties. Inside the if block, TypeScript knows it is a student because of the role field, so grade is safe to use. In the other case, subject is available. If we make a student without a grade, the compiler gives an error.

```ts
type Person = { name: string; age: number };
type Student = { role: "student"; grade: number };
type Teacher = { role: "teacher"; subject: string };

type SchoolMember = Person & (Student | Teacher);

function describe(member: SchoolMember): string {
  if (member.role === "student") {
    return `${member.name} is in grade ${member.grade}`;
  }
  return `${member.name} teaches ${member.subject}`;
}

const rahim: SchoolMember = {
  name: "Rahim",
  age: 15,
  role: "student",
  grade: 9,
};
```

## Conclusion

Union gives us choices and intersection lets us add shared properties. Using them together keeps our types short and our code safe.