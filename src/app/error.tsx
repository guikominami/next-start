'use client';

export default function Error({ error }: { error: Error }) {
  console.log('error', error);

  return (
    <main>
      <h1>An error occurred!</h1>
      <p>Please try again later.</p>
    </main>
  );
}
