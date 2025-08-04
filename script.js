   const students = [
      {
        name: "Sara Fargoson",
        age: 21,
        course: "Computer Science",
        email: "sara@example.com",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        name: "Jone Mickle",
        age: 23,
        course: "Mechanical Engineering",
        email: "jone.mickle@example.com",
        image: "https://randomuser.me/api/portraits/men/47.jpg"
      },
      {
        name: "Diana Smith",
        age: 20,
        course: "Business Administration",
        email: "dina.smith@example.com",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      
    
    ];

    function displayStudentCards(studentArray) {
      const container = document.getElementById("cardContainer");

      for (let i = 0; i < studentArray.length; i++) {
        const student = studentArray[i];

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${student.image}" alt="${student.name}">
          <h3>${student.name}</h3>
          <p><strong>Age:</strong> ${student.age}</p>
          <p><strong>Course:</strong> ${student.course}</p>
          <p><strong>Email:</strong> ${student.email}</p>
        `;

        container.appendChild(card);
      }
    }

    displayStudentCards(students);
