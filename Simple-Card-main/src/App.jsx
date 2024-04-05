import UserCard from './Components/UserCard';

const user = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Software Engineer',
    email: 'johndoe1@gmail.com',
    online: false,
    skills: ['React', 'JavaScript', 'Node.js'],
    bio: 'Passionate about coding and building awesome software.',
    avatarUrl: 'https://img.freepik.com/free-vector/hand-drawn-anime-kawaii-illustration_52683-123756.jpg?size=626&ext=jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'UX Designer',
    email: 'janesmith2@gmail.com',
    bio: 'Creating delightful user experiences with a focus on simplicity.',
    online: true,
    skills: ['React', 'JavaScript', 'Node.js'],
    avatarUrl: 'https://img.freepik.com/premium-vector/young-man-animestyle-character-vector-illustration-design-manga-anime-boy_147933-2258.jpg?size=626&ext=jpg',
  },
  {
    id: 3,
    name: 'Rohan Mathy',
    role: 'UX Designer',
    email: 'roshanmathy3@gmail.com',
    bio: 'Delightful user experiences simplicity experiences simplicity.',
    online: true,
    skills: ['React', 'JavaScript', 'Node.js'],
    avatarUrl: 'https://img.freepik.com/premium-psd/sticker-anime-women-personages_1073400-163.jpg?size=626&ext=jpg&ga=GA1.1.520715386.1709878294&semt=ais',
  },
  
];

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {user.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};


export default App;
