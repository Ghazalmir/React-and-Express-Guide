import QCard from './Qcard';

function Page5(){
  const questions = [
    {
      num: 1,
      question: "Rate your experience with the frameworks that you chose. Did they perform to your expectations?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.",
    },
    {
      num: 2,
      question: "Were the frameworks of your choice difficult to install or configure?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.",
    },    
    {
      num: 3,
      question: "Was it easy to create the page(s) with the frameworks of your choice?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.",
    },    
    {
      num: 4,
      question: "Was the learning curve steep compared with regular HTML/CSS/JavaScript/PHP?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.",
    },    
    {
      num: 5,
      question: "Would you have done things differently in retrospect? Did you regret your choice of frameworks?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quod a voluptate debitis quas fugiat iure eos officiis aspernatur? Doloribus consequuntur excepturi dolorum necessitatibus, maiores corporis iste ducimus perspiciatis quo. Dolor officiis quasi doloribus autem, modi quod odio doloremque eos pariatur fugit, exercitationem similique, soluta necessitatibus. Harum dolorem fugiat illo aliquam recusandae? Eius voluptatum repudiandae atque minus consequuntur ipsum deleniti.",
    },    

  ];

  return(
    <div>  
      <h1>Conclusion</h1>
      {questions.map (ques => (<QCard 
      num={ques.num} 
      question={ques.question}
      answer={ques.answer}
      />) )}
 
    </div>
  );
}

export default Page5;