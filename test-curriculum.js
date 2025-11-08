const { curriculumData } = require('./src/lib/curriculum-data.ts');

console.log('Curriculum loaded:', curriculumData);
console.log('O Level subjects count:', curriculumData[0].subjects.length);
console.log('O Level subject names:', curriculumData[0].subjects.map(s => s.name));

// Check if all required fields exist
curriculumData[0].subjects.forEach((subject, index) => {
  console.log(`Subject ${index + 1}: ${subject.name}`);
  console.log(`  - ID: ${subject.id}`);
  console.log(`  - Lessons count: ${subject.lessons ? subject.lessons.length : 'undefined'}`);
  
  if (subject.lessons && subject.lessons.length > 0) {
    console.log(`  - First lesson: ${subject.lessons[0].title}`);
  }
});