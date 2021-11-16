import './page6.css';
import CreditsCard from './card';


function Page6(){
  const members = [
    {
      name: 'Adam Ferrara',
      img: 'https://joeschmoe.io/api/v1/random',
      order: 1 ,
      res: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.',
      github: '',
      linkedin: ''
    }, 
    {
      name: 'Syed Wahaj Haider',
      img: 'https://joeschmoe.io/api/v1/random',
      order: 2 ,
      res: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.',
      github: '',
      linkedin: ''
    }, 
    {
    name: 'Ghazal Mirsayyah',
    img: 'https://joeschmoe.io/api/v1/random',
    order: 3 ,
    res: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.',
    github: '',
    linkedin: ''}
  ];

  return(
    <div>  
      <h1>Meet the Team!</h1>
      {members.map (member => (<CreditsCard 
      name={member.name} 
      img={member.img}
      order={member.order}
      res={member.res}
      github={member.github}
      linkedin={member.linkedin}
        />) )}
      
      <div className="ref">
      <h3>References</h3>
      <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.
      </p>
      </div>

    </div>
  );
}

export default Page6;