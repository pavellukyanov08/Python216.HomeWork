// ЗАДАНИЯ ИЗ ПРЕЗЕНТАЦИИ С ОБЪЕКТАМИ


// const user1 = {
//     firstName: "Sam",
//     lastName: "Doe",
//     age: 20
//   };
  
//   const user2 = {
//     firstName: "Charlie",
//     lastName: "Fort",
//     age: 31
//   };
  
//   /**
//    * @param {Object[]} user
//    * @param {string} user[].firstName
//    * @param {string} user[].lastName
//    * @param {number} user[].age
//    */
// function getIntials(user) {
//     // return `${user.firstName[0]}${user.lastName[0]}`
//     return `${user.firstName[0]}${user.lastName[0]}`
// }
  
// console.log(getIntials(user1)) // "SD"
// console.log(getIntials(user2)) // "CF"




// const course1 = {
//   name: "Learn English",
//   isCompleted: true
// };

// const course2 = {
//   name: "Learn JavaScript",
//   isCompleted: false
// };

// /**
//  * @param {Object[]} course
//  * @param {number} count
//  */
// function addNumberOfChapters(course, count) {
//   course['numberOfChapters'] = count
//   return course
// }

// console.log(addNumberOfChapters(course1, 80)) // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
// console.log(addNumberOfChapters(course2, 60)) // { name: 'Learn JavaScript', isCompleted: false, numb0erOfChapters: 60 }




// const student = {
//   name: "Sam Doe",
//   age: 24,
//   grades: [13, 15, 15, 14, 18]
// };

// /**
//  * @param {Object} student
//  * @param {string} student.name
//  * @param {number} student.age
//  * @param {number[]} student.grades
//  */
// function getSumOfGrades(student) {
//   return student.grades.reduce((a, b) => a + b)
// }

// console.log(getSumOfGrades(student)) // 75




// const users = [
// 	{
// 	  firstName: "Sam",
// 	  lastName: "Blue",
// 	  age: 21,
// 	},
//   {
//     firstName: "Charlie",
//     lastName: "Bon",
//     age: 38,
//   }
// ];

// /**
//  * @param {{firstName: String, lastName: String, age: Number}[]} users
//  */
// function getLastUserFullName(users) {
//   return `${users[1].firstName} ${users[1].lastName}`
// }

// console.log(getLastUserFullName(users)); // "Charlie Bon"




// const students = [
//     {
//       name: "Sam Doe",
//       age: 24,
//       learnEnglish: {
//         startYear: 2020,
//         grade: 18
//       }
//     },
//     {
//       name: "Charlie Bron",
//       age: 31,
//       learnEnglish: {
//         startYear: 2021,
//         grade: 19
//       }
//     }
// ];

// /**
//  * @param {Object} student
//  * @param {string} student.name
//  * @param {number} student.age
//  * @param {number[]} student.grades
//  */
// function getLastGrade(students) {
//   return students[0].learnEnglish.grade
// }

// console.log(getLastGrade(students)) // 18




// const students = [
//     {
//       name: "Sam Doe",
//       age: 24,
//       learnEnglish: {
//         startYear: 2020,
//         grade: 18
//       }
//     },
//     {
//       name: "Charlie Bron",
//       age: 31,
//       learnEnglish: {
//         startYear: 2021,
//         grade: 19
//       }
//     }
//   ];
  
//   /**
//    * @typedef {{startYear: Number, grade: Number}} Course
//    * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
//    *
//    * @param {Student[]} students
//    */
//   function getSumGrades(students) {
//     return students[0].learnEnglish.grade + students[1].learnEnglish.grade
//   }
  
//   console.log(getSumGrades(students)); // 37




// const users = [
//     {
//     firstName: "Sam",
//       lastName: "Blue",
//       age: 21,
//     },

//     {
//       firstName: "Charlie",
//       lastName: "Bon",
//       age: 38,
//     }
// ];
  
// /**
// * @param {{firstName: String, lastName: String, age: Number}[]} users
// */
// function getFullNames(users) {
//     return `[${users[0].firstName} ${users[0].lastName}, ${users[1].firstName} ${users[1].lastName}]`
// }
  
// console.log(getFullNames(users)); // [Sam Blue, Charlie Bon]