const data = {
  fullName: "Jennifer Smith",
  position: "UX UI Designer",
  socials: [
    {
      id: "fb",
      service: "Facebook",
      url: "https://222.facebook.com/jssmith24",
      icon_id: "fa-facebook-f",
    },
    {
      id: "ig",
      service: "Instagram",
      url: "https://222.facebook.com/jssmith24",
      icon_id: "fa-instagram",
    },
    {
      id: "db",
      service: "Dribble",
      url: "https://222.facebook.com/jssmith24",
      icon_id: "fa-dribbble",
    },
  ],
};

const cardApp = (data) => {
  const body = document.querySelector("body");
  const root = document.createElement("root");
  const style = document.createElement("style");
  const card = document.createElement("section");
  let number = 636909;

  const html = `
<section class="card">
<div class="card__wrapper">
  <img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg" class="card__user-img">
  <div class="card__info">
    <span class="card__name">${data.fullName}</span>
    <span class="card__title">${data.position}</span>
  </div>
  <div class="card__socials">
  </div>
</div>
</section>
`;
  const cssStyles = `
.card{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(50px);
  }
  .card__wrapper{
    height: 400px;
    padding: 20px;
    max-width: 300px;
    width: 100%;
    background: white;
    box-shadow: 0px 0px 62px 0px rgba(0,0,0,.22);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card__user-img{
    border: 2px solid #2c5eff;
    height: 70px;
    width: 70px;
    margin: 2rem 0 1.5rem;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  .card-info{
    margin-bottom: 2rem;
  }
  .card__name{
    text-align: center;
    display: block;
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: .5rem;
  }
  .card__title{
    display: block;
    font-size: .7rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  .card__icon{
    width: 200px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #000;
    margin-bottom: .4rem;
    overflow: hidden;
    display: flex;
  
    align-items: center;
    transition: background .3s ease-in-out, color .3s ease-in-out;
    cursor: pointer;
  }
  .card__icon-box{
    width: 25px;
    display: inline-block;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card__icon-title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .card__icon--fb{
    color: #2c5eff;
    border: 1px solid #2c5eff;
  }
  .card__icon--fb:hover{
    background: #2c5eff;
    color: white;
  }
  .card__icon--ig{
    color: #773fe7;
    border: 1px solid #773fe7;
  }
  .card__icon--ig:hover{
    background: #773ef7;
    color: white;
  }
  .card__icon--db{
    color: #f962b1;
    border: 1px solid #f962b1;
  }
  .card__icon--db:hover{
    background: #f962b1;
    color: white;
  }
`;

  //appends a root node
  body.prepend(root);
  root.classList.add("root");
  root.prepend(card);
  root.style.cssText = `
    background: url('https://wallpaperaccess.com/full/636909.jpg');
    background-size: cover;
    background-position: center;
`;
  root.prepend(style);

  //adds the card section
  card.classList.add("card");
  card.innerHTML = html;

  style.innerHTML = cssStyles;

  const cardSocials = document.querySelector(".card__socials");
  let temp = ` 
    <div class="card__icon card__icon--fb">
   
    </div>
`;
  // data.socials.forEach((el, idx) => {
  //   const tempNode = document.createElement("div");
  //   tempNode.classList.add(`card__icon`, `card__icon--${el.id}`);
  //   tempNode.innerHTML = `
  //   <span class="card__icon-box">
  //   <i class="fab ${el.icon_id}"></i>
  //   </span>
  //   <span class="card__icon-title">
  //   ${el.service}
  //   </span>
  //   `;
  //   cardSocials.append(tempNode);
  // });
  // };

  // data.socials.map((item) => {
  //   const tempNode = document.createElement("div");
  //   tempNode.classList.add(`card__icon`, `card__icon--${el.id}`);
  //   (tempNode.innerHTML = `
  //     <span class="card__icon-box">
  //     <i class="fab ${el.icon_id}"></i>
  //     </span>
  //     <span class="card__icon-title">
  //     ${el.service}
  //     </span>
  //   `);
  //   cardSocials.append(tempNode);
  // });

  data.socials.map((el, idx) => {
    const tempNode = document.createElement("div");
    tempNode.classList.add(`card__icon`, `card__icon--${el.id}`);
    tempNode.innerHTML = `
  <span class="card__icon-box">
  <i class="fab ${el.icon_id}"></i>
  </span>
  <span class="card__icon-title">
  ${el.service}
  </span>
  `;
    cardSocials.append(tempNode);
  });
};

cardApp(data);
