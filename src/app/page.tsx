import { prisma } from '@/database/prisma';

const Home = async () => {
  const user = await prisma.user.findFirst({
    where: { name: 'FirstTestUser' },
  });

  return (
    <div>
      <span>{user?.id}</span>
      <span>{user?.name}</span>
      <span>{user?.email}</span>
      <span>{user?.createdAt.toDateString()}</span>
    </div>
  );
};

export default Home;
