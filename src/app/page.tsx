import { testDatabaseConnection } from './actions';

export default async function Home() {
  const isConnected = await testDatabaseConnection();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      teste
    </main>
  );
}
