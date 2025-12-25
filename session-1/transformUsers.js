function transformUsers(users) {
  return users
    .filter(user => {
      const age = Number(user?.age);
      return !isNaN(age) && age >= 18;
    })
    .map(user => {
      const name = typeof user?.name === 'string' ? user.name : 'Unknown';
      const age = Number(user.age);
      const active = Boolean(user?.active);
      
      return `${name.toUpperCase()} is ${age} years old and is ${active ? 'active' : 'inactive'}`;
    });
}