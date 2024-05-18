//Task 3
function createUserProfiles(originalNames, modifiedNames) {
    const userProfiles = [];
  
    for (let i = 0; i < originalNames.length; i++) {
      const originalName = originalNames[i];
      const modifiedName = modifiedNames[i];
      const id = i + 1;
  
      const userProfile = {
        originalName,
        modifiedName,
        id,
      };
  
      userProfiles.push(userProfile);
    }
  
    return userProfiles;
  }

  //Task 3 example
  const originalNames = ['Nana', 'Kwame', 'Asamoah', 'Agyemang', 'Junior'];
const modifiedNames = [ 'nana', 'KWAME', 'asamoah', 'AGYEMANG', 'junior' ];

const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log(userProfiles);