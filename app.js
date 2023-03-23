function whoIsOnline(users) {
    let usersOnline = [];
    // Happy Coding! Puedes modificar solo el cuerpo de esta función
    for (let i=0;i<users.length-1;i++) {
        if (users[i].status=='online') {
            usersOnline.push(users[i].username);
        }
    }

    return usersOnline;
    
  }
  
  module.exports =  {whoIsOnline};